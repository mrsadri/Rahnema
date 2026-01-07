# Deployment Instructions

Your project is ready to be deployed to GitHub Pages! Follow these steps:

## Option 1: Using GitHub CLI (Recommended)

1. **Authenticate with GitHub CLI:**
   ```bash
   gh auth login
   ```

2. **Create the repository and push:**
   ```bash
   gh repo create Rahnema --public --source=. --remote=origin --description "Material Design 3 Components Exam - A web-based quiz application" --push
   ```

3. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Navigate to Settings > Pages
   - Under "Source", select "GitHub Actions"
   - The site will be published automatically

## Option 2: Manual Setup

1. **Create a new repository on GitHub:**
   - Go to https://github.com/new
   - Name it `Rahnema` (or any name you prefer)
   - Make it public
   - **Do NOT** initialize with README, .gitignore, or license

2. **Add the remote and push:**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/Rahnema.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Navigate to Settings > Pages
   - Under "Source", select "GitHub Actions"
   - The site will be published automatically

## After Deployment

Your site will be available at:
- `https://YOUR_USERNAME.github.io/Rahnema/`

The deployment workflow will automatically build and deploy your site whenever you push to the `main` branch.

## Privacy Notes

- All sensitive URLs have been removed from the code
- `.txt` files are excluded from the repository via `.gitignore`
- Remember to configure your Google Apps Script URL in `app.js` after deployment if you want to use the Google Sheets integration

