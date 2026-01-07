/**
 * Google Apps Script for Material Design 3 Exam
 * This script receives POST requests from the exam app and writes data to Google Sheets
 * 
 * SETUP INSTRUCTIONS:
 * 1. Open your Google Sheet (create a new one or use an existing one)
 * 2. Go to Extensions > Apps Script
 * 3. Delete any existing code and paste this entire file
 * 4. Replace 'YOUR_SHEET_NAME' with your actual sheet name (usually 'Sheet1')
 * 5. Click Save (Ctrl+S or Cmd+S)
 * 6. Click Deploy > New deployment
 * 7. Select type: Web app
 * 8. Set Execute as: Me
 * 9. Set Who has access: Anyone
 * 10. Click Deploy
 * 11. Copy the Web App URL and paste it into app.js (replace YOUR_GOOGLE_APPS_SCRIPT_URL_HERE)
 */

// Replace this with your actual sheet name
const SHEET_NAME = 'Sheet1';

/**
 * Handle POST requests from the exam app
 */
function doPost(e) {
  try {
    // Parse the JSON data - handle both JSON and form data
    let data;
    if (e.postData && e.postData.contents) {
      // JSON POST request
      data = JSON.parse(e.postData.contents);
    } else if (e.parameter) {
      // Form POST request
      data = {};
      data.name = e.parameter.name || '';
      data.email = e.parameter.email || '';
      data.telegram = e.parameter.telegram || '';
      data.answers = e.parameter.answers || '';
      data.results = e.parameter.results || '';
      data.submissionTime = e.parameter.submissionTime || '';
      data.startTime = e.parameter.startTime || '';
      data.duration = parseInt(e.parameter.duration || '0');
    } else {
      throw new Error('No data received');
    }
    
    // Get the active spreadsheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    
    // If sheet doesn't exist, create it
    if (!sheet) {
      const newSheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet(SHEET_NAME);
      setupSheetHeaders(newSheet);
      return writeData(newSheet, data);
    }
    
    // Check if headers exist, if not, add them
    if (sheet.getLastRow() === 0) {
      setupSheetHeaders(sheet);
    }
    
    // Write the data
    return writeData(sheet, data);
    
  } catch (error) {
    // Return error response with CORS headers
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        error: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Handle GET requests (for testing)
 */
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({
      message: 'Material Design 3 Exam - Google Sheets Integration',
      status: 'active',
      sheetName: SHEET_NAME
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Set up column headers in the sheet
 */
function setupSheetHeaders(sheet) {
  const headers = [
    'Timestamp',
    'Name',
    'Email',
    'Telegram ID',
    'Start Time',
    'End Time',
    'Duration (seconds)',
    'Total Questions',
    'Correct Answers',
    'Score Percentage',
    'Question Sets',
    'Answers (JSON)',
    'Results (JSON)'
  ];
  
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');
  sheet.getRange(1, 1, 1, headers.length).setBackground('#F6921E'); // Rahnema Orange
  sheet.getRange(1, 1, 1, headers.length).setFontColor('#FFFFFF');
  
  // Freeze the header row
  sheet.setFrozenRows(1);
}

/**
 * Write data to the sheet
 */
function writeData(sheet, data) {
  const timestamp = new Date();
  const row = [
    timestamp,                                    // Timestamp
    data.name || '',                              // Name
    data.email || '',                             // Email
    data.telegram || '',                          // Telegram ID
    data.startTime || '',                         // Start Time
    data.submissionTime || '',                    // End Time
    data.duration || 0,                           // Duration (seconds)
    JSON.parse(data.results || '{}').total || 0,  // Total Questions
    JSON.parse(data.results || '{}').correct || 0, // Correct Answers
    JSON.parse(data.results || '{}').percentage || 0, // Score Percentage
    Object.keys(JSON.parse(data.results || '{}').resultsBySet || {}).join(', '), // Question Sets
    data.answers || '',                           // Answers (JSON)
    data.results || ''                            // Results (JSON)
  ];
  
  sheet.appendRow(row);
  
  // Format the timestamp column
  const lastRow = sheet.getLastRow();
  sheet.getRange(lastRow, 1).setNumberFormat('yyyy-mm-dd hh:mm:ss');
  
  // Return success response
  return ContentService
    .createTextOutput(JSON.stringify({
      success: true,
      message: 'Data written successfully',
      row: lastRow
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

