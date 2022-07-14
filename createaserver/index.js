const fs = require("fs");
const path = require("path");

const dirPath = path.join(__dirname,"global")

// console.log(dirPath);

// for (i=0;i<5; i++){
//   fs.writeFileSync(dirPath + "/hello"+i+".txt", "a simple text file")
// }

// it return array of file we  have create them
fs.readdir(dirPath,(err, files)=>{
  // console.log(files)

  // it print one by one
  files.forEach((items)=>{
console.log("the file is ",items)
  })
  

})



