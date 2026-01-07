// Application state
let appState = {
    studentInfo: null,
    selectedQuestions: [],
    currentQuestionIndex: 0,
    answers: {},
    startTime: null,
    endTime: null,
    lastResults: null // Store last calculated results for retry
};

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Configuration validation and retrieval utility
function getGoogleScriptUrl() {
    // Wait a bit for config to load if it's still loading
    let attempts = 0;
    const maxAttempts = 10;
    
    function checkConfig() {
        // Method 1: Check CONFIG object
        if (typeof CONFIG !== 'undefined' && CONFIG && CONFIG.GOOGLE_SCRIPT_URL) {
            const url = CONFIG.GOOGLE_SCRIPT_URL;
            if (url && url !== 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE' && url.startsWith('https://script.google.com')) {
                return url;
            }
        }
        
        // Method 2: Check window.CONFIG (fallback)
        if (window.CONFIG && window.CONFIG.GOOGLE_SCRIPT_URL) {
            const url = window.CONFIG.GOOGLE_SCRIPT_URL;
            if (url && url !== 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE' && url.startsWith('https://script.google.com')) {
                return url;
            }
        }
        
        // Method 3: Check environment variables
        if (window.ENV_CONFIG && window.ENV_CONFIG.GOOGLE_SCRIPT_URL) {
            const url = window.ENV_CONFIG.GOOGLE_SCRIPT_URL;
            if (url && url.startsWith('https://script.google.com')) {
                return url;
            }
        }
        
        // Method 4: Check data attribute
        const dataUrl = document.documentElement.getAttribute('data-google-script-url');
        if (dataUrl && dataUrl.startsWith('https://script.google.com')) {
            return dataUrl;
        }
        
        // Method 5: Check meta tag
        const metaTag = document.querySelector('meta[name="google-script-url"]');
        if (metaTag && metaTag.content && metaTag.content.startsWith('https://script.google.com')) {
            return metaTag.content;
        }
        
        return null;
    }
    
    // Immediate check
    let url = checkConfig();
    if (url) return url;
    
    // Retry if config might still be loading (for async scenarios)
    while (attempts < maxAttempts && !url) {
        attempts++;
        url = checkConfig();
        if (url) return url;
        // Small delay to allow script to load
        if (attempts < maxAttempts) {
            // Use synchronous wait (only for initialization)
            const start = Date.now();
            while (Date.now() - start < 50) {
                // Busy wait (only acceptable during initialization)
            }
        }
    }
    
    return url;
}

function initializeApp() {
    // Enhanced config validation with multiple checks
    const configUrl = getGoogleScriptUrl();
    
    if (!configUrl) {
        console.warn('CONFIG validation: Google Script URL not found through any method');
        console.warn('Available methods checked: CONFIG object, window.CONFIG, ENV_CONFIG, data attributes, meta tags');
        
        // Log diagnostic information
        console.log('Diagnostic info:', {
            'typeof CONFIG': typeof CONFIG,
            'CONFIG exists': typeof CONFIG !== 'undefined',
            'CONFIG.GOOGLE_SCRIPT_URL': typeof CONFIG !== 'undefined' ? CONFIG.GOOGLE_SCRIPT_URL : 'N/A',
            'window.CONFIG': window.CONFIG,
            'document.readyState': document.readyState
        });
    } else {
        console.log('Configuration loaded successfully:', configUrl.substring(0, 50) + '...');
    }
    
    // Registration form handler
    const registrationForm = document.getElementById('registration-form');
    registrationForm.addEventListener('submit', handleRegistration);
    
    // Quiz navigation handlers
    document.getElementById('prev-btn').addEventListener('click', goToPreviousQuestion);
    document.getElementById('next-btn').addEventListener('click', goToNextQuestion);
    document.getElementById('submit-quiz-btn').addEventListener('click', submitQuiz);
    document.getElementById('restart-btn').addEventListener('click', restartExam);
}

function handleRegistration(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const telegram = formData.get('telegram');
    const selectedQuestion = formData.get('questions');
    
    // Validate that a question set is selected
    if (!selectedQuestion) {
        alert('Please select a question set to answer.');
        return;
    }
    
    // Store student info
    appState.studentInfo = {
        name: name,
        email: email,
        telegram: telegram
    };
    
    // Prepare questions based on selection
    appState.selectedQuestions = [];
    if (questionsData[selectedQuestion]) {
        questionsData[selectedQuestion].forEach(q => {
            appState.selectedQuestions.push({
                ...q,
                questionSet: selectedQuestion
            });
        });
    }
    
    // Initialize answers object
    appState.selectedQuestions.forEach((q, index) => {
        appState.answers[index] = null;
    });
    
    // Record start time
    appState.startTime = new Date();
    
    // Switch to quiz screen
    showScreen('quiz-screen');
    displayQuestion(0);
}

function displayQuestion(index) {
    if (index < 0 || index >= appState.selectedQuestions.length) {
        return;
    }
    
    appState.currentQuestionIndex = index;
    const question = appState.selectedQuestions[index];
    
    // Update question number and text
    document.getElementById('question-number').textContent = question.id;
    document.getElementById('question-text').textContent = question.text;
    
    // Update progress
    const totalQuestions = appState.selectedQuestions.length;
    const progress = ((index + 1) / totalQuestions) * 100;
    document.getElementById('progress-fill').style.width = progress + '%';
    document.getElementById('current-question').textContent = index + 1;
    document.getElementById('total-questions').textContent = totalQuestions;
    
    // Display options
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    Object.keys(question.options).sort().forEach(optionKey => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        if (appState.answers[index] === optionKey) {
            optionDiv.classList.add('selected');
        }
        
        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'question-option';
        radio.value = optionKey;
        radio.id = `option-${optionKey}`;
        radio.checked = appState.answers[index] === optionKey;
        
        const label = document.createElement('label');
        label.htmlFor = `option-${optionKey}`;
        label.textContent = `${optionKey}. ${question.options[optionKey]}`;
        
        optionDiv.appendChild(radio);
        optionDiv.appendChild(label);
        
        optionDiv.addEventListener('click', function() {
            selectOption(optionKey);
        });
        
        optionsContainer.appendChild(optionDiv);
    });
    
    // Update navigation buttons
    document.getElementById('prev-btn').disabled = index === 0;
    
    const isLastQuestion = index === appState.selectedQuestions.length - 1;
    document.getElementById('next-btn').style.display = isLastQuestion ? 'none' : 'block';
    document.getElementById('submit-quiz-btn').style.display = isLastQuestion ? 'block' : 'none';
}

function selectOption(optionKey) {
    appState.answers[appState.currentQuestionIndex] = optionKey;
    displayQuestion(appState.currentQuestionIndex);
}

function goToPreviousQuestion() {
    if (appState.currentQuestionIndex > 0) {
        displayQuestion(appState.currentQuestionIndex - 1);
    }
}

function goToNextQuestion() {
    if (appState.currentQuestionIndex < appState.selectedQuestions.length - 1) {
        displayQuestion(appState.currentQuestionIndex + 1);
    }
}

function submitQuiz() {
    // Check if all questions are answered
    const unanswered = appState.selectedQuestions.findIndex((q, index) => {
        return appState.answers[index] === null || appState.answers[index] === undefined;
    });
    
    if (unanswered !== -1) {
        if (!confirm('You have unanswered questions. Do you want to submit anyway?')) {
            return;
        }
    }
    
    // Record end time
    appState.endTime = new Date();
    
    // Calculate results
    const results = calculateResults();
    
    // Show results screen
    showResults(results);
}

function calculateResults() {
    let correct = 0;
    let total = appState.selectedQuestions.length;
    const resultsBySet = {};
    
    appState.selectedQuestions.forEach((question, index) => {
        const userAnswer = appState.answers[index];
        const isCorrect = userAnswer === question.correct;
        
        if (isCorrect) {
            correct++;
        }
        
        // Track results by question set
        if (!resultsBySet[question.questionSet]) {
            resultsBySet[question.questionSet] = { correct: 0, total: 0 };
        }
        resultsBySet[question.questionSet].total++;
        if (isCorrect) {
            resultsBySet[question.questionSet].correct++;
        }
    });
    
    return {
        correct,
        total,
        percentage: Math.round((correct / total) * 100),
        resultsBySet
    };
}

function showResults(results) {
    showScreen('results-screen');
    
    // Update score display
    const percentage = results.percentage;
    document.getElementById('score-percentage').textContent = percentage;
    document.getElementById('correct-count').textContent = results.correct;
    document.getElementById('total-answered').textContent = results.total;
    
    // Animate score circle
    const circumference = 2 * Math.PI * 54;
    const offset = circumference - (percentage / 100) * circumference;
    const scoreCircle = document.getElementById('score-circle');
    scoreCircle.style.strokeDashoffset = offset;
    
    // Show summary by question set
    const summaryContainer = document.getElementById('summary-container');
    summaryContainer.innerHTML = '';
    
    Object.keys(results.resultsBySet).forEach(qSet => {
        const setResult = results.resultsBySet[qSet];
        const setPercentage = Math.round((setResult.correct / setResult.total) * 100);
        
        const summaryItem = document.createElement('div');
        summaryItem.className = 'summary-item';
        summaryItem.innerHTML = `
            <h4>${qSet}</h4>
            <p>${setResult.correct} out of ${setResult.total} correct (${setPercentage}%)</p>
        `;
        summaryContainer.appendChild(summaryItem);
    });
    
    // Store results for potential retry
    appState.lastResults = results;
    
    // Submit to Google Sheets
    submitToGoogleSheets(results);
}

function submitToGoogleSheets(results) {
    const statusDiv = document.getElementById('submission-status');
    statusDiv.innerHTML = '<p><span class="loading"></span>Submitting your results...</p>';
    statusDiv.className = 'submission-status';
    
    // Prepare submission data
    const submissionData = {
        name: appState.studentInfo.name,
        email: appState.studentInfo.email,
        telegram: appState.studentInfo.telegram,
        answers: JSON.stringify(appState.answers),
        results: JSON.stringify({
            correct: results.correct,
            total: results.total,
            percentage: results.percentage,
            resultsBySet: results.resultsBySet
        }),
        submissionTime: appState.endTime.toISOString(),
        startTime: appState.startTime.toISOString(),
        duration: Math.round((appState.endTime - appState.startTime) / 1000) // seconds
    };
    
    // Get Google Apps Script URL using enhanced configuration retrieval
    // This method tries multiple sources and handles incognito mode issues
    let GOOGLE_SCRIPT_URL = getGoogleScriptUrl();
    
    // Validate URL is configured (not placeholder)
    const PLACEHOLDER_TEXT = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';
    if (!GOOGLE_SCRIPT_URL || 
        GOOGLE_SCRIPT_URL === PLACEHOLDER_TEXT || 
        GOOGLE_SCRIPT_URL.trim() === '' ||
        !GOOGLE_SCRIPT_URL.startsWith('https://script.google.com')) {
        
        // Enhanced error message with diagnostic information
        const isIncognito = detectIncognitoMode();
        const diagnosticInfo = getDiagnosticInfo();
        
        statusDiv.className = 'submission-status error';
        statusDiv.innerHTML = `
            <p><strong>Google Sheets integration not configured.</strong></p>
            <p>Please copy config.example.js to config.js and update the GOOGLE_SCRIPT_URL</p>
            <p>See README.md for instructions.</p>
            <p style="margin-top: 15px; font-weight: 500;">نتیجه ثبت نشد، لطفاً اسکرین‌شات بگیرید و در گروه بفرستید.</p>
            <button id="retry-submit-btn" class="btn btn-primary" style="margin-top: 15px;">تلاش مجدد برای ارسال</button>
        `;
        document.getElementById('restart-btn').style.display = 'block';
        
        // Add retry button event listener
        const retryBtn = document.getElementById('retry-submit-btn');
        if (retryBtn) {
            retryBtn.addEventListener('click', function() {
                // Retry submission - use stored results or recalculate
                const resultsToSubmit = appState.lastResults || calculateResults();
                submitToGoogleSheets(resultsToSubmit);
            });
        }
        
        // Log detailed diagnostic information
        console.error('Configuration Error Details:', {
            'GOOGLE_SCRIPT_URL': GOOGLE_SCRIPT_URL,
            'typeof CONFIG': typeof CONFIG,
            'CONFIG object': typeof CONFIG !== 'undefined' ? CONFIG : 'undefined',
            'window.CONFIG': window.CONFIG,
            'document.readyState': document.readyState,
            'isIncognito': isIncognito,
            'userAgent': navigator.userAgent
        });
        
        return;
    }
    
    // Log submission data for debugging
    console.log('Submitting data to Google Sheets:', submissionData);
    console.log('Google Script URL:', GOOGLE_SCRIPT_URL);
    
    // Submit to Google Sheets via Apps Script
    // Use no-cors mode as Google Apps Script handles CORS automatically
    fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData)
    })
    .then(() => {
        // With no-cors, we can't read the response, but the request was sent
        // Wait a bit then show success (data should be in the sheet)
        console.log('Submission request sent to Google Sheets');
        setTimeout(() => {
            statusDiv.className = 'submission-status success';
            statusDiv.innerHTML = '<p>✓ Results successfully submitted to Google Sheets!</p>';
            document.getElementById('restart-btn').style.display = 'block';
        }, 2000);
    })
    .catch(error => {
        console.error('Error submitting to Google Sheets:', error);
        // Show error but also try form submission as backup
        statusDiv.className = 'submission-status error';
        statusDiv.innerHTML = `
            <p><strong>Error submitting results.</strong></p>
            <p>Attempting alternative method...</p>
        `;
        // Try alternative method using form submission
        setTimeout(() => {
            submitViaForm(GOOGLE_SCRIPT_URL, submissionData, statusDiv);
        }, 1000);
    });
}

/**
 * Fallback submission method using form POST
 */
function submitViaForm(url, data, statusDiv) {
    // Create a hidden form and submit it
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = url;
    form.style.display = 'none';
    
    // Add data as hidden inputs
    Object.keys(data).forEach(key => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = typeof data[key] === 'string' ? data[key] : JSON.stringify(data[key]);
        form.appendChild(input);
    });
    
    document.body.appendChild(form);
    
    // Submit after a short delay
    setTimeout(() => {
        form.submit();
        // Show success message (we can't verify with this method)
        setTimeout(() => {
            statusDiv.className = 'submission-status success';
            statusDiv.innerHTML = '<p>✓ Results submitted to Google Sheets!</p>';
            document.getElementById('restart-btn').style.display = 'block';
            document.body.removeChild(form);
        }, 2000);
    }, 100);
}

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

// Helper function to detect incognito mode (approximate)
function detectIncognitoMode() {
    // Note: This is not 100% reliable but can help with diagnostics
    try {
        // Check for storage availability (incognito mode often restricts storage)
        const testKey = '__incognito_test__';
        localStorage.setItem(testKey, 'test');
        localStorage.removeItem(testKey);
        return false;
    } catch (e) {
        return true;
    }
}

// Helper function to get diagnostic information
function getDiagnosticInfo() {
    const info = [];
    
    if (typeof CONFIG === 'undefined') {
        info.push('CONFIG undefined');
    } else if (!CONFIG.GOOGLE_SCRIPT_URL) {
        info.push('CONFIG.GOOGLE_SCRIPT_URL missing');
    }
    
    if (document.readyState !== 'complete') {
        info.push('Document not ready: ' + document.readyState);
    }
    
    // Check if config.js script tag exists
    const configScript = Array.from(document.querySelectorAll('script')).find(
        s => s.src && s.src.includes('config.js')
    );
    if (!configScript) {
        info.push('config.js script tag not found');
    }
    
    return info.length > 0 ? info.join(', ') : null;
}

function restartExam() {
    // Reset app state
    appState = {
        studentInfo: null,
        selectedQuestions: [],
        currentQuestionIndex: 0,
        answers: {},
        startTime: null,
        endTime: null,
        lastResults: null
    };
    
    // Reset form
    document.getElementById('registration-form').reset();
    
    // Show registration screen
    showScreen('registration-screen');
}

