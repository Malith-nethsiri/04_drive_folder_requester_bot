# 📄 Google Form to Google Drive Automation – Project 04

This Google Apps Script project automates the process of handling Google Form submissions. When a user submits a form, the script automatically:

1. Creates a new folder in Google Drive named after the user's name and email.
2. Adds a note file inside the folder containing the submission details.
3. Sends a confirmation email to the user.
4. Displays a custom menu in the Sheet to manually trigger test runs.

---

## 🚀 Features

✅ Auto-triggered on form submission  
✅ Dynamic folder and file creation in Drive  
✅ Personalized email sent to form submitter  
✅ Google Sheet menu integration for manual testing

---

## 🛠️ Setup Instructions

### 1. Link Google Form to Google Sheet
- Create a Google Form (e.g., Name, Email, Notes)
- Click `Responses` > `Link to Sheet`
- Choose to create a **new Sheet** or select an existing one

### 2. Add the Script
- Open the linked Sheet
- Go to `Extensions > Apps Script`
- Paste in the provided script (`Code.gs`)
- Save the script

### 3. Add Installable Trigger
- Go to `Triggers (⏰ icon) > + Add Trigger`
- Choose:
  - Function: `onFormSubmit`
  - Event type: `From form > On form submit`
- Save the trigger

### 4. Test It!
- Submit a sample response using the Google Form
- Check:
  - Drive folder creation
  - File contents
  - Email inbox for the confirmation

---



