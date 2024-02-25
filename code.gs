// @ts-nocheck
function doGet(e) {
  var app = HtmlService.createHtmlOutputFromFile("hello")
  return app;
}

// スプレッドシート処理関数
function new_quiz_sv()
{

  // スプレッドシート処理
  var sheet = 
    SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/1XJtl-NHVzMkppBOj78I740WMm42uY60DsqOtUYk2TcU/edit#gid=0')
    .getSheetByName('List');
  var max_r = sheet.getLastRow() - 1;

  // 最大出題回数を満たした問題は出題しない

  // 全行からランダムに1行選択
  var r = Math.floor(Math.random() * max_r) + 2; 

    // 問題文、回答文、出題回数の取得
  var text_quiz   = sheet.getRange("B" + r).getValue().replace(/\n/g,"<br/>")
  var text_answer = sheet.getRange("C" + r).getValue();
  return [text_quiz, text_answer];
}

// @ts-nocheck
function doGet(e) {
  var app = HtmlService.createHtmlOutputFromFile("hello")
  return app;
}

// スプレッドシート処理関数
function new_quiz_sv()
{

  // スプレッドシート処理
  var sheet = 
    SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/1XJtl-NHVzMkppBOj78I740WMm42uY60DsqOtUYk2TcU/edit#gid=0')
    .getSheetByName('List');
  var max_r = sheet.getLastRow() - 1;

  // 最大出題回数を満たした問題は出題しない

  // 全行からランダムに1行選択
  var r = Math.floor(Math.random() * max_r) + 2; 

    // 問題文、回答文、出題回数の取得
  var text_quiz   = sheet.getRange("B" + r).getValue().replace(/\n/g,"<br/>")
  var text_answer = sheet.getRange("C" + r).getValue();
  return [text_quiz, text_answer];
}
