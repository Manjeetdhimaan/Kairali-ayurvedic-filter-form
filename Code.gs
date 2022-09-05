function getObject() {

  const obj = {}
  const id = '1yrZxizKJeU1GeRIADs8n0CdidfMEJqbTnyYjEpslK1w';
  const name = 'LIST';
  const data = SpreadsheetApp.openById(id).getSheetByName(name).getDataRange().getDisplayValues().slice(1);

  data.forEach(([subjectKey, topicKey, chapter]) => {
    const subject = obj[subjectKey]
    if (!subject) {
      obj[subjectKey] = {}
      obj[subjectKey][topicKey] = [chapter]
    } else {
      const topic = subject[topicKey]
      if (!topic) {
        subject[topicKey] = [chapter]
      } else {
        topic.push(chapter)
      }
    }
  })
  console.log(obj);
  return obj;
}


function getTmslt() {
  let ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheets()[2];
  let data = sheet.getRange('E2:E70').getValues().filter(d => d[0] !== "");

  return data;
};
let tmslt = getTmslt().map(d => "<option>" + d + "</option>").join();

function check() {
  console.log(options);
}



function doGet(e) {
  Logger.log(Utilities.jsonStringify(e));
  var htmlOutput = HtmlService.createTemplateFromFile('Form');
  if (!e.parameter.page || e.parameter.page == 'Form') {
    // When no specific page requested, return "home page"
    var colors = getColors();
    htmlOutput.message = '';
    htmlOutput.colors = colors;
    var crolors = getCrolors();
    htmlOutput.message = '';
    htmlOutput.crolors = crolors;
    var crrolors = getCrrolors();
    htmlOutput.message = '';
    htmlOutput.crrolors = crrolors;
    var rcrolors = getrCrolors();
    htmlOutput.message = '';
    htmlOutput.rcrolors = rcrolors;
    var asgnone = getAsgnone();
    htmlOutput.message = '';
    htmlOutput.asgnone = asgnone;
    return htmlOutput.evaluate();
  }
  return HtmlService.createTemplateFromFile(e.parameter['page']).evaluate();
}

  function getrCrolors() {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var lovSheet = ss.getSheetByName("LIST");
    var getLastRow = lovSheet.getLastRow();
    var return_array = [];
    for (var i = 2; i <= getLastRow; i++) {
      if (return_array.indexOf(lovSheet.getRange(i, 5).getValue()) === -1) {
        return_array.push(lovSheet.getRange(i, 5).getValue());
      }
    }


    return return_array;
  }

   function getAsgnone() {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var lovSheet = ss.getSheetByName("LIST");
    var getLastRow = lovSheet.getLastRow();
    var return_array = [];
    for (var i = 2; i <= getLastRow; i++) {
      if (return_array.indexOf(lovSheet.getRange(i, 6).getValue()) === -1) {
        return_array.push(lovSheet.getRange(i, 6).getValue());
      }
    }


    return return_array;
  }

    function include(filename) {
    return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
  }

function getColors() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var lovSheet = ss.getSheetByName("LIST");
  var getLastRow = lovSheet.getLastRow();
  var return_array = [];
  for (var i = 2; i <= getLastRow; i++) {
    if (return_array.indexOf(lovSheet.getRange(i, 1).getValue()) === -1) {
      return_array.push(lovSheet.getRange(i, 1).getValue());
    }
  }


  return return_array;
}

function getFruits(color) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var lovSheet = ss.getSheetByName("LIST");
  var getLastRow = lovSheet.getLastRow();
  var return_array = [];
  for (var i = 2; i <= getLastRow; i++) {
    if (lovSheet.getRange(i, 1).getValue() == color) {
      return_array.push(lovSheet.getRange(i, 2).getValue());
    }
  }


  return return_array;
}
function getCrolors() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var lovSheet = ss.getSheetByName("LIST");
  var getLastRow = lovSheet.getLastRow();
  var return_array = [];
  for (var i = 2; i <= getLastRow; i++) {
    if (return_array.indexOf(lovSheet.getRange(i, 2).getValue()) === -1) {
      return_array.push(lovSheet.getRange(i, 2).getValue());
    }
  }


  return return_array;
}

function getFruitss(crolor) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var lovSheet = ss.getSheetByName("LIST");
  var getLastRow = lovSheet.getLastRow();
  var return_array = [];
  for (var i = 2; i <= getLastRow; i++) {
    if (lovSheet.getRange(i, 2).getValue() === crolor) {
      return_array.push(lovSheet.getRange(i, 3).getValue());
    }
  }


  return return_array;
}
function getCrrolors() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var lovSheet = ss.getSheetByName("DSSR DATABASE2");
  var getLastRow = lovSheet.getLastRow
  /**
   * Get the URL for the Google Apps Script running as a WebApp.
   */
}
  function getScriptUrl() {
    var url = ScriptApp.getService().getUrl();
    return url;
  }

  function homePage() {
    var pages = ["Form", "Table"];
    var urls = pages.map(function (name) {
      return getPageUrl(name);
    });
    var template = HtmlService.createTemplateFromFile("Form");
    template.urls = urls;
    return template.evaluate();
  }

  function getPageUrl(name) {
    if (name) {
      var url = ScriptApp.getService().getUrl();
      return url + "?page=" + name;
    } else {
      return ScriptApp.getService().getUrl();
    }
  }

  function test() {
    Logger.log(ScriptApp.getService().getUrl());
  }


  /* DEFINE GLOBAL VARIABLES, CHANGE THESE VARIABLES TO MATCH WITH YOUR SHEET */
  function globalVariables() {
    var varArray = {
      spreadsheetId: '1yrZxizKJeU1GeRIADs8n0CdidfMEJqbTnyYjEpslK1w', //** CHANGE !!!
      dataRage: 'Data!A2:AC',                                    //** CHANGE !!!
      idRange: 'Data!A2:AC',                                    //** CHANGE !!!
      lastCol: 'AC',                                            //** CHANGE !!!
      insertRange: 'Data!A1:AC1',                                   //** CHANGE !!!
      sheetID: '0'                                             //** CHANGE !!! Ref:https://developers.google.com/sheets/api/guides/concepts#sheet_id
    };
    return varArray;
  }


  /*
  # PROCESSING FORM ---------------------------------------------------------------------------------
  */


  /* PROCESS FORM */

  /* PROCESS FORM */
  function processForm(formObject) {
    if (formObject.RecId && checkID(formObject.RecId)) {//Execute if form passes an ID and if is an existing ID
      updateData(getFormValues(formObject), globalVariables().spreadsheetId, getRangeByID(formObject.RecId)); // Update Data
    } else { //Execute if form does not pass an ID
      appendData(getFormValues(formObject), globalVariables().spreadsheetId, globalVariables().insertRange); //Append Form Data
    }
    return getLastTenRows();//Return last 10 rows
  }


  /* GET FORM VALUES AS AN ARRAY */
  function getFormValues(formObject) {
    /* ADD OR REMOVE VARIABLES ACCORDING TO YOUR FORM*/
    if (formObject.RecId && checkID(formObject.RecId)) {
      var values = [[formObject.RecId.toString(),
      formObject.clnt,
      formObject.clntnm,
      formObject.crrolor,
      formObject.mf,
      formObject.adr,
      formObject.cty,
      formObject.datepicker,
      formObject.color,
      formObject.eml,
      formObject.wmtn,
      formObject.tmslt,
      formObject.rm,
      formObject.crolor,
      formObject.crolorr,
      formObject.clntt,
      formObject.pdupd,
      formObject.thrpamtone,
      formObject.thrppamtwo,
      formObject.dscnt,
      formObject.cnaply,
      formObject.tsamt,
      formObject.fnlamt,
      formObject.pymt,
      formObject.hmt,
      formObject.asnone,
      formObject.asnto,
      formObject.asnthr,
      formObject.sts]];
    } else {
      var values = [[new Date().getTime().toString(),//https://webapps.stackexchange.com/a/51012/244121
      formObject.clnt,
      formObject.clntnm,
      formObject.crrolor,
      formObject.mf,
      formObject.adr,
      formObject.cty,
      formObject.datepicker,
      formObject.color,
      formObject.eml,
      formObject.wmtn,
      formObject.tmslt,
      formObject.rm,
      formObject.crolor,
      formObject.crolorr,
      formObject.clntt,
      formObject.pdupd,
      formObject.thrpamtone,
      formObject.thrppamtwo,
      formObject.dscnt,
      formObject.cnaply,
      formObject.tsamt,
      formObject.fnlamt,
      formObject.pymt,
      formObject.hmt,
      formObject.asnone,
      formObject.asnto,
      formObject.asnthr,
      formObject.sts]];
    }
    return values;
  }


  /*
  ## CURD FUNCTIONS ----------------------------------------------------------------------------------------
  */


  /* CREATE/ APPEND DATA */
  function appendData(values, spreadsheetId, range) {
    var valueRange = Sheets.newRowData();
    valueRange.values = values;
    var appendRequest = Sheets.newAppendCellsRequest();
    appendRequest.sheetID = spreadsheetId;
    appendRequest.rows = valueRange;
    var results = Sheets.Spreadsheets.Values.append(valueRange, spreadsheetId, range, { valueInputOption: "RAW" });
  }

  /* READ DATA */
  function readData(spreadsheetId, range) {
    var result = Sheets.Spreadsheets.Values.get(spreadsheetId, range);
    return result.values;
  }


  /* UPDATE DATA */
  function updateData(values, spreadsheetId, range) {
    var valueRange = Sheets.newValueRange();
    valueRange.values = values;
    var result = Sheets.Spreadsheets.Values.update(valueRange, spreadsheetId, range, {
      valueInputOption: "RAW"
    });
  }


  /*DELETE DATA*/
  function deleteData(ID) {
    //https://developers.google.com/sheets/api/guides/batchupdate
    //https://developers.google.com/sheets/api/samples/rowcolumn#delete_rows_or_columns
    var startIndex = getRowIndexByID(ID);

    var deleteRange = {
      "sheetId": globalVariables().sheetID,
      "dimension": "ROWS",
      "startIndex": startIndex,
      "endIndex": startIndex + 1
    }

    var deleteRequest = [{ "deleteDimension": { "range": deleteRange } }];
    Sheets.Spreadsheets.batchUpdate({ "requests": deleteRequest }, globalVariables().spreadsheetId);

    return getLastTenRows();//Return last 10 rows
  }



  /* 
  ## HELPER FUNCTIONS FOR CRUD OPERATIONS --------------------------------------------------------------
  */


  /* CHECK FOR EXISTING ID, RETURN BOOLEAN */
  function checkID(ID) {
    var idList = readData(globalVariables().spreadsheetId, globalVariables().idRange,).reduce(function (a, b) { return a.concat(b); });
    return idList.includes(ID);
  }


  /* GET DATA RANGE A1 NOTATION FOR GIVEN ID */
  function getRangeByID(id) {
    if (id) {
      var idList = readData(globalVariables().spreadsheetId, globalVariables().idRange);
      for (var i = 0; i < idList.length; i++) {
        if (id == idList[i][0]) {
          return 'Data!A' + (i + 2) + ':' + globalVariables().lastCol + (i + 2);
        }
      }
    }
  }


  /* GET RECORD BY ID */
  function getRecordById(id) {
    if (id && checkID(id)) {
      var result = readData(globalVariables().spreadsheetId, getRangeByID(id));
      return result;
    }
  }


  /* GET ROW NUMBER FOR GIVEN ID */
  function getRowIndexByID(id) {
    if (id) {
      var idList = readData(globalVariables().spreadsheetId, globalVariables().idRange);
      for (var i = 0; i < idList.length; i++) {
        if (id == idList[i][0]) {
          var rowIndex = parseInt(i + 1);
          return rowIndex;
        }
      }
    }
  }


  /*GET LAST 10 RECORDS */
  function getLastTenRows() {
    var lastRow = readData(globalVariables().spreadsheetId, globalVariables().dataRage).length + 1;
    if (lastRow <= 11) {
      var range = globalVariables().dataRage;
    } else {
      var range = 'Data!A' + (lastRow - 9) + ':' + globalVariables().lastCol;
    }
    var lastTenRows = readData(globalVariables().spreadsheetId, range);
    return lastTenRows;
  }


  /* GET ALL RECORDS */
  function getAllData() {
    var data = readData(globalVariables().spreadsheetId, globalVariables().dataRage);
    return data;
  }


  function getData() {
    // var spreadSheetId = "1yrZxizKJeU1GeRIADs8n0CdidfMEJqbTnyYjEpslK1w"; //CHANGE
    // var dataRange = "Display!A1:M"; //CHANGE

    // var range = Sheets.Spreadsheets.Values.get(spreadSheetId, dataRange);
    // var values = range.values;

    let ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName("Display");
    let data = sheet.getDataRange().getValues().slice(1);
    console.log(data)
    return data;
  }

  function checkdis() {

    console.log(values);
  }


  /*
  ## OTHER HELPERS FUNCTIONS ------------------------------------------------------------------------
  */

 
  function getCrolors() {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var lovSheet = ss.getSheetByName("LIST");
    var getLastRow = lovSheet.getLastRow();
    var return_array = [];
    for (var i = 2; i <= getLastRow; i++) {
      if (return_array.indexOf(lovSheet.getRange(i, 2).getValue()) === -1) {
        return_array.push(lovSheet.getRange(i, 2).getValue());
      }
    }


    return return_array;
  }

  function getFruitss(crolor) {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var lovSheet = ss.getSheetByName("LIST");
    var getLastRow = lovSheet.getLastRow();
    var return_array = [];
    for (var i = 2; i <= getLastRow; i++) {
      if (lovSheet.getRange(i, 2).getValue() === crolor) {
        return_array.push(lovSheet.getRange(i, 3).getValue());
      }
    }


    return return_array;
  }
  function getCrrolors() {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var lovSheet = ss.getSheetByName("DSSR DATABASE2");
    var getLastRow = lovSheet.getLastRow();
    var return_array = [];
    for (var i = 2; i <= getLastRow; i++) {
      if (return_array.indexOf(lovSheet.getRange(i, 14).getValue()) === -1) {
        return_array.push(lovSheet.getRange(i, 14).getValue());
      }
    }


    return return_array;
  }

  function getFrruitss(crrolor) {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var lovSheet = ss.getSheetByName("DSSR DATABASE2");
    var getLastRow = lovSheet.getLastRow();
    var return_array = [];
    for (var i = 2; i <= getLastRow; i++) {
      if (lovSheet.getRange(i, 14).getValue() == crrolor) {
        return_array.push(lovSheet.getRange(i, 11).getValue());
      }
    }


    return return_array;
  }


 


