# Material Design 3 Components Exam

A pure HTML/CSS/JavaScript quiz application for students to take Material Design 3 component exams.

## Features

- Student registration (Name, Email, Telegram ID)
- Question selection (Q1, Q2, Q3)
- Interactive quiz interface with progress tracking
- Results calculation and display
- Automatic submission to Google Sheets

## Files Structure

```
Rahnema/
├── index.html              # Main HTML file
├── styles.css              # Styling
├── app.js                  # Main application logic
├── questions.js            # Questions data
├── GoogleAppsScript.gs     # Google Apps Script for Sheets integration
├── config.example.js       # Configuration template (safe to commit)
├── config.js               # Configuration file (gitignored - DO NOT COMMIT)
├── README.md               # This file
├── Q1.txt                  # Question set 1
├── Q2.txt                  # Question set 2
└── Q3.txt                  # Question set 3
```

## Setup Instructions

### 1. Local Setup

1. Download or clone all files to a directory
2. Open `index.html` in a web browser
3. The application should work locally without any server

### 2. Google Sheets Integration Setup

To enable automatic submission to Google Sheets:

#### Step 1: Open Your Google Sheet

1. Create a new Google Sheet or open your existing one
2. Note: Keep your Google Sheet URL private and do not commit it to version control

#### Step 2: Create Apps Script

1. In your Google Sheet, go to **Extensions** > **Apps Script**
2. Delete any existing code
3. Copy the entire contents of `GoogleAppsScript.gs` and paste it into the Apps Script editor
4. **Important**: Update the `SHEET_NAME` constant in the script to match your actual sheet name (usually `Sheet1`)
5. Click **Save** (Ctrl+S or Cmd+S)

#### Step 3: Deploy as Web App

1. Click **Deploy** > **New deployment**
2. Click the gear icon (⚙️) next to "Select type" and choose **Web app**
3. Set the following:
   - **Description**: Material Design 3 Exam Integration
   - **Execute as**: Me
   - **Who has access**: Anyone
4. Click **Deploy**
5. **Copy the Web App URL** that appears

#### Step 4: Configure the Application

1. Copy `config.example.js` to `config.js`:
   ```bash
   cp config.example.js config.js
   ```
2. Open `config.js` in a text editor
3. Replace `'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE'` with the Web App URL you copied
4. Save the file
5. **Important**: `config.js` is gitignored and will not be committed to version control, keeping your sensitive URLs safe

#### Step 5: Test

1. Open `index.html` in a browser
2. Fill out the registration form
3. Take the exam
4. Submit and check your Google Sheet - you should see the data appear

## Google Sheet Columns

The script will automatically create these columns:

- **Timestamp**: When the data was written
- **Name**: Student's name
- **Email**: Student's email address
- **Telegram ID**: Student's Telegram ID
- **Start Time**: When the exam started
- **End Time**: When the exam was submitted
- **Duration (seconds)**: Total time taken
- **Total Questions**: Number of questions answered
- **Correct Answers**: Number of correct answers
- **Score Percentage**: Percentage score
- **Question Sets**: Which question sets were answered (Q1, Q2, Q3)
- **Answers (JSON)**: All answers in JSON format
- **Results (JSON)**: Detailed results in JSON format

## Usage

1. **Registration**: Students enter their name, email, and Telegram ID
2. **Question Selection**: Students select which question sets they want to answer (Q1, Q2, Q3)
3. **Taking the Exam**: 
   - Navigate through questions using Previous/Next buttons
   - Select answers by clicking on options
   - Progress bar shows completion status
4. **Results**: After submission, students see their score and detailed breakdown
5. **Submission**: Results are automatically submitted to Google Sheets

## Troubleshooting

### Google Sheets not receiving data

1. Check that the Web App URL in `app.js` is correct
2. Verify the Apps Script is deployed and set to "Anyone" access
3. Check the Apps Script execution logs (View > Executions)
4. Ensure the sheet name in `GoogleAppsScript.gs` matches your actual sheet name

### Questions not loading

- Ensure `questions.js` is in the same directory as `index.html`
- Check browser console for JavaScript errors

### Styling issues

- Ensure `styles.css` is in the same directory as `index.html`
- Clear browser cache and reload

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Notes

- This is a pure frontend application - no server required
- Data is submitted to Google Sheets via Google Apps Script
- All data is stored locally in the browser during the exam
- Results are only sent to Google Sheets upon submission

## License

This project is provided as-is for educational purposes.

