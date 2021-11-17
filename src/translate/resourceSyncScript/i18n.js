const http = require('https'); // or 'https' for https:// URLs
const fs = require('fs');
const csv = require('csv-parser');

// google drive의 "PolaPolar i18n" sheet 활용
// 실제 경로 : https://docs.google.com/spreadsheets/d/1dvxA4hJB2E9rVWy_5nI7OPuX-RNBXD7yEBjHga8eZ7E/
const downloadUrl = "https://docs.google.com/spreadsheets/d/1dvxA4hJB2E9rVWy_5nI7OPuX-RNBXD7yEBjHga8eZ7E/gviz/tq?tqx=out:csv&tq=";

const lngList = [
  "kr",
  "en",
];
let i18nSpec = {}
for (const lng of lngList) {
  i18nSpec[lng] = { "translation": {} }
}

function addI18nSpec(lng, code, text) {
  i18nSpec[lng]["translation"][code] = text;
}

const csvFileName = 'internationalization.csv';
const csvFile = fs.createWriteStream(csvFileName);
const request = http.get(downloadUrl, function (response) {
  response.on('data', function (chunk) {
    // TODO: 데이터에서 바로 csv 파싱하여 만들기
    // console.log('BODY: ' + chunk);
  });
  response
    .pipe(csvFile)
    .on("finish", () => {
      fs.createReadStream(csvFileName)
        .pipe(csv())
        .on('data', (row) => {
          for (const lng of lngList) {
            console.log(row);
            addI18nSpec(lng, row["key"], row[lng]);
          }
        })
        .on('end', () => {
          // 다운받은 trans.csv 삭제
          fs.unlinkSync(csvFileName);

          console.log("json file output:");
          console.log(i18nSpec);
          const jsonStr = JSON.stringify(i18nSpec);
          const jsonFile = fs.createWriteStream("./src/translate/resources.json");
          jsonFile.write(jsonStr);
          jsonFile.end();

          console.log('create translation file');
        });
    })
});