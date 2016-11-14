function doGet(e) {
  
  var htmlfile = "Index";
  var template = HtmlService.createTemplateFromFile(htmlfile);
  template.sheetid = "1gKRNw7wxu0jn9Xh0UiWEuG9Y9Mgz0lnrPiB-tCl1wLA";
 
  
  return template.evaluate()
  .setTitle(htmlfile)
  .setSandboxMode(HtmlService.SandboxMode.IFRAME);
  
}

// Get spreadsheet data and return it
function getSpreadsheetData(sheetId) { 
  var data = SpreadsheetApp.openById(sheetId).getSheets()[0].getDataRange().getValues();
  return (data.length > 1) ? data : null;
}

