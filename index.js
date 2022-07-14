// crud file making process

const fs = require ("fs");
const path = require('path');

const dirPath= path.join(__dirname,"crud")
console.log(dirPath)
const dirfile = `${dirPath}/apple.txt`

fs.writeFileSync( dirfile,
  "this is laxman text file "
)


// buffer
fs.readFile(dirfile,(err,item)=>{
  console.log(item)
})

// Read
fs.readFile(dirfile,"utf8",(err,item)=>{
  console.log(item)
})


// update
fs.appendFile(dirfile," and it is not so important file ",(err)=>{
  if (!err){
    console.log("apple.txt file successfully updated")
  }
})

// rename
fs.rename(dirfile,`${dirPath}/mango.txt`,(err)=>{
  if (!err){
    console.log("file is updated")
  }
})

// delete file for this direcatory
fs.unlinkSync(`${dirPath}/apple.txt`)