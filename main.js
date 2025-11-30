/*  1. Write a function that logs the current file path and directory. */
// function getCurrentFileAndDir() {
//     return {
//         file: __filename,
//         Dir: __dirname
//     }
// }
// let result = getCurrentFileAndDir()
// console.log(result);


/*  2. Write a function that takes a file path and returns its file name. */
// const path = require('node:path')
// function getFileName(Curr_path){
//     return path.basename(Curr_path)
// }
// console.log(getFileName('D:\\Route\\Assignment2\\main.js'));


/* 3. Write a function that builds a path from an object */
// const path = require('node:path')
// function buildPath(object) {
//     return path.format(object)
// }
// const object = {
//     dir: "D:\\Route\\Assignment2",
//     name: "main",
//     ext: ".js"
// }
// console.log(buildPath(object))
// console.log(__filename);


/* 4. Write a function that returns the file extension from a given file path.*/
// const path = require('node:path')
// function getExtension(filePath)
// {
//     return path.extname(filePath);
// }
// console.log(getExtension('D:\\Route\\Assignment2\\main.js'))


/* 5. Write a function that parses a given path and returns its name and ext.*/
// const path = require('node:path')
// function parsePath(filePath)
// {
//     const parsed = path.parse(filePath);
//     return {
//         Name:parsed.name,
//         Ext:parsed.ext
//     }
// }
// console.log(parsePath('D:\\Route\\Assignment2\\main.js'));


/* 6. Write a function that checks whether a given path is absolute.*/
// const path = require('node:path')
// function checkAbsolute(filePath)
// {
//     return path.isAbsolute(filePath)
// }
// console.log(checkAbsolute('D:\\Route\\Assignment2\\main.js'))
// console.log(checkAbsolute('./main.js'));


/* 7. Write a function that joins multiple segments*/
// const path = require('node:path')
// function joinPath(...segments)
// {
//     return path.join(...segments)
// }
// console.log(joinPath('/src', 'component','App.js'));


/* 8. Write a function that resolves a relative path to an absolute one.*/
// const path = require('node:path');
// function resolveToAbsolute(relativePath) {
//     return path.resolve(relativePath);
// }
// console.log(resolveToAbsolute('./index.js'));


/* 9. Write a function that joins two paths.*/
// const path = require('node:path');
// function joinTwoPaths(...Path) {
//     return path.join(...Path);
// }
// console.log(joinTwoPaths('/folder1', 'folder2/file.txt'));


/* 10. Write a function that deletes a file asynchronously.*/
// const path = require('node:path');
// const fs = require('node:fs')
// const filePath = path.resolve('./notes.txt')
// function deleteFileAsync(filePath) 
// {
//     return fs.unlink(filePath, (error)=>
//     {
//         if(error)
//         {
//             console.log("Error:", error);
//         } else {
//             console.log("The file.txt is deleted.");
//         }
//     });
// }
// console.log(deleteFileAsync(filePath));


/* 11. Write a function that creates a folder synchronously.*/
// const path = require('node:path');
// const fs = require('node:fs')
// const filePath = path.resolve('./folder')
// function createFolderSync(folderPath) {
//     fs.mkdirSync(folderPath, { recursive: true });
//     return "Success";
// }
// console.log(createFolderSync(filePath));


/* 12. Create an event emitter that listens for a "start" event and logs a welcome message.*/
// const {EventEmitter} = require('node:events')
// const event = new EventEmitter;
// event.on('start', (message)=>{
//     console.log(message);
// })
// event.emit('start','Welcome event triggered!')


/* 13. Emit a custom "login" event with a username parameter.*/
// const {EventEmitter} = require('node:events')
// const event = new EventEmitter;
// event.on('login', (username)=>{
//     console.log(`User logged in: ${username}`);

// })
// event.emit('login','Ahmed')


/* 14.Read a file synchronously and log its contents.*/
// const path = require('node:path')
// const fs = require('node:fs')
// const filePath = path.resolve('./notes.txt')
// const result = fs.readFileSync(filePath, {encoding:'utf8'})
// console.log(result);
// console.log('Hello Shehab');


/* 15. Write asynchronously to a file.*/
// const path = require('node:path')
// const fs = require('node:fs')
// const filePath = path.resolve('./notes.txt')
// fs.writeFile(filePath, "@#@#@#ShehabEmad",{flag:'a'}, (error) => {
//     if(error) {
//         console.log(error);
//     }
// })
// console.log("Done");


/* 16 .Check if a directory exists.*/
// const path = require('node:path')
// const fs = require('node:fs')
// const filePath = path.resolve('./notes.txt')
// const result = fs.existsSync(filePath);
// console.log(result);


/* 17.Write a function that returns the OS platform and CPU architecture.*/
// const os = require('node:os');
// function getSystemInfo() {
//     return {
//         Platform: os.platform(),
//         Arch: os.arch()
//     };
// }
// console.log(getSystemInfo());