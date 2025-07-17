function onFormSubmit(e) {
  const sheet = e.source.getSheetByName("Responses 1");
  const responses = e.values;
  
  const fileName = responses[1]; // Adjust index if needed
  const epid = responses[2];
  const notes = responses[3];
  const email = responses[4];

  const folderName = `${epid} - ${fileName}`;

  // Create folder
  const parentFolder = DriveApp.getFolderById("THE_ID_OF_THE_FOLDER"); // optional
  const newFolder = parentFolder ? parentFolder.createFolder(folderName) : DriveApp.createFolder(folderName);

  // Optional: Add a placeholder file or note inside
  const file = newFolder.createFile("notes.txt", notes);

  // Send confirmation email
  MailApp.sendEmail({
    to: email,
    subject: `✅ Folder Created: ${folderName}`,
    htmlBody: `Hi,<br>Your folder has been created: <a href="${newFolder.getUrl()}">${folderName}</a><br><br>Notes saved inside.`,
  });
}
