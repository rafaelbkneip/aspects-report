function Desenho(range){
  //Set the positions of aspect titles
  var sheets = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Template');
  var drawings = SpreadsheetApp.getActiveSheet().getDrawings();
  drawings[0].setPosition(8,1, 80, 0)
  drawings[1].setPosition(10,1, 80, 0)
  drawings[2].setPosition(12, 1, 80, 0)
  drawings[3].setPosition(14,1, 80, 0)
  drawings[4].setPosition(15,2, 0, 0)
  drawings[16].setPosition(7, 2, 150, 0)

  //Range
  range = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Auxiliary').getLastRow();

  //Loop all the names in the auxiliary sheet
  for (i=1; i<range+1; i++){
    var name = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Auxiliary').getRange('A' + i.toString()).getValue();
    var aspect1 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Auxiliary').getRange('B' + i.toString()).getValue();
    var aspect2 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Auxiliary').getRange('C' + i.toString()).getValue();
    var aspect3 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Auxiliary').getRange('D' + i.toString()).getValue();
    var aspect4 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Auxiliary').getRange('E' + i.toString()).getValue();

    //For each name, get the value of each aspect
    sheets.getRange('C5').setValue(name)
    sheets.getRange('I2').setValue(aspect1)
    sheets.getRange('I3').setValue(aspect2)
    sheets.getRange('I4').setValue(aspect3)
    sheets.getRange('I5').setValue(aspect4)

    //Print the values
    Logger.log(name)
    Logger.log(aspect1)
    Logger.log(aspect2)
    Logger.log(aspect3)
    Logger.log(aspect4)

    //For each aspect, get the corresponding drawing with the text based on the range. This text is alocated in its 
    //corresponding position, while the drawings with the texts for other ranges are alocated to auxiliary columns 

    //Aspect1
    if (aspect1 => 0.9 && aspect1 <= 1){

      drawings[4].setPosition(9, 2, 119, 0)
      sheets.setRowHeight(9,drawings[4].getHeight())
      drawings[5].setPosition(11, 8, 0, 0)
      drawings[6].setPosition(11, 8, 0, 0)
    }

    if (aspect1 => 0.7 && aspect1 < 0.9){

      drawings[5].setPosition(9,2, 119, 0)
      sheets.setRowHeight(9,drawings[5].getHeight())
      drawings[4].setPosition(9, 8, 0, 0)
      drawings[6].setPosition(12, 8, 0, 0)
    }
      
    if (aspect1 < 0.7){

      drawings[6].setPosition(9,2, 119, 0)
      sheets.setRowHeight(9,drawings[5].getHeight())
      drawings[4].setPosition(9, 8, 0, 0)
      drawings[5].setPosition(12, 8, 0, 0)
    }
      
    //Aspect 2
    if (aspect2 => 0.9 && aspect2 <= 1){
      drawings[7].setPosition(11,2, 119, 0)
      sheets.setRowHeight(11,drawings[7].getHeight())
      drawings[8].setPosition(9, 13, 0, 0)
      drawings[9].setPosition(12, 13, 0, 0)
    }

    if (aspect2 => 0.7 && aspect2 < 0.9){
      drawings[8].setPosition(11,2, 119, 0)
      sheets.setRowHeight(11,drawings[8].getHeight())
      drawings[7].setPosition(9, 13, 0, 0)
      drawings[9].setPosition(12, 13, 0, 0)
    }

    if (aspect2 < 0.7){
      drawings[9].setPosition(11,2, 119, 0)
      sheets.setRowHeight(11,drawings[9].getHeight())
      drawings[7].setPosition(9, 13, 0, 0)
      drawings[8].setPosition(12, 13, 0, 0)
    }

    //Aspect 3
    if (aspect3 => 0.9 && aspect3 <= 1){
      drawings[10].setPosition(13,2, 119, 0)
      sheets.setRowHeight(13,drawings[10].getHeight())
      drawings[11].setPosition(9, 20, 0, 0)
      drawings[12].setPosition(12, 20, 0, 0)
    }

    if (aspect3 => 0.7 && aspect3 < 0.9){
      drawings[11].setPosition(13,2, 119, 0)
      sheets.setRowHeight(13,drawings[11].getHeight())
      drawings[12].setPosition(12, 20, 0, 0)
      drawings[10].setPosition(9, 20, 0, 0)
    }
      
    if (aspect3  < 0.7){
      drawings[12].setPosition(13,2, 119, 0)
      sheets.setRowHeight(13,drawings[12].getHeight())
      drawings[11].setPosition(12, 20, 0, 0)
      drawings[10].setPosition(9, 20, 0, 0)
    }

    //Aspect 4
    if (aspect4 => 0.9 && aspect4 <= 1){
      drawings[13].setPosition(15,2, 119, 0)
      sheets.setRowHeight(15,drawings[13].getHeight()+20)
      drawings[14].setPosition(9, 27, 0, 0)
      drawings[15].setPosition(12, 27, 0, 0)
    }

    if (aspect4 => 0.7 && aspect4 < 0.9){
      drawings[14].setPosition(15,2, 119, 0)
      sheets.setRowHeight(15,drawings[14].getHeight()+20)
      drawings[13].setPosition(9, 27, 0, 0)
      drawings[15].setPosition(12, 27, 0, 0)
    }

    if (aspect4 < 0.7){
      drawings[15].setPosition(15,2, 119, 0)
      sheets.setRowHeight(15,drawings[15].getHeight()+20)
      drawings[13].setPosition(9, 27, 0, 0)
      drawings[14].setPosition(12, 27, 0, 0)
    }

    //Change the spreadsheet URl in order to enable the download
    url = SpreadsheetApp.getActiveSpreadsheet().getUrl().replace("edit", "export");

    Utilities.sleep(10000)

    //Download configurations
    const url2 = url + "?format=pdf&portrait=true&size=A4&gridlines=false&gid="+"GID"+"&top_margin=0.05&bottom_margin=0.10&left_margin=0.25&right_margin=0.25&right_margin=0.25&r1=0&c1=1&r2=16&c2=5"; 

    Utilities.sleep(10000)

    //Generate the file
    var response = UrlFetchApp.fetch(url2, {
      muteHttpExceptions: true,
      headers: {
        Authorization: 'Bearer ' +  ScriptApp.getOAuthToken(),
      },
    });
  
    Utilities.sleep(10000)

    //Print file size in MB
    var blob = response.getBlob();
    Logger.log("File size in MB: " + blob.getBytes().length / 1000000);

    //Move the generated file to a folder defined by its ID
    var folder = DriveApp.getFolderById('Folder-ID');
    file = DriveApp.createFile(blob);
    aux=file.getId()
    arquivo = DriveApp.getFileById(aux)
    DriveApp.getFileById(aux)
    Logger.log(name)
    arquivo.moveTo(folder);
    
    }
}