const http = require ("http")
http.createServer((req , resp )=>{
    resp.write("write code anyway");
}).listen(4200)