const db = require("./db")
var fs = require('fs');
db.ref("/").once("value").then(a => {
    let codigo = a.val()
    fs.appendFile(`backup`, codigo, function (err) {
  if (err) throw err;
  console.log('Saved!');
});
})