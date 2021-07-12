//  //NPM module
//  const color = require('cli-color')
//  console.log(color.yellow("hello world"));

//local module
//const auth = require('./auth');

//  //register("neetu");

// //auth.register("neetu");
// auth.login("yadav", "secret");


//core modules
//const path = require('path');

//dirname
//console.log('Folder name: ', path.dirname(__filename));

//filename
//console.log('Filename: ', path.basename(__filename));

//Extension
//console.log('Ext name:', path.extname(__filename));

//parse
//console.log('parse: ', path.parse(__filename));

//join 
//console.log('join: ', path.join(__dirname, 'order', 'App.js'));

//filesystem
  //const fs =  require('fs');

  //make a directory
//   fs.mkdir(path.join(__dirname, '/test'),(err) => {
//       if(err){
//           console.log(err);
//           return
//       }
//       console.log("folder created");
//   })

// file created
// fs.writeFile(path.join(__dirname, 'test', 'test.txt'), 'Hello Node/n', (err) => {
//     if(err){
//         throw err;
//     }
//     console.log("file created")
// })

// fs.appendFile(path.join(__dirname, 'test', 'test.txt'), 'data added', (err) => {
//     if(err){
//         throw err;
//     }
//     console.log("file created")
// })

//Read file 
// fs.readFile(path.join(__dirname, 'test', 'test.txt'),'utf-8',(err,data) => {
//          if(err){
//             throw err;
//         }
//         // const content = Buffer.from(data);
//         // console.log(content.toString());
//         console.log(data)
// })

//operating system modules
  //const os = require('os');
  //console.log('os type: ', os.type());
  //console.log('os platform: ', os.platform());
  //console.log('cpu architecture: ', os.arch());

//   console.log('cpu details: ', os.cpus());
//  console.log('free memory: ', os.freemem());

// console.log('Total memory: ', os.totalmem());
   
//console.log('Uptime: ', os.uptime());

//Events Modules
// const Emitter = require('events')
// const myEmitter = new Emitter()

// myEmitter.on('somename', (data) => {
//   console.log(data)
// })

// myEmitter.emit('somename', {
//   name: 'vicky'
// });


// class Auth extends Emitter {
//     register(username) {
//       console.log("Register Successfull..")
//       this.emit('Registered', username);
//     }
// }

// const auth = new Auth();
// //Listen
// //verify email
// auth.on('register', (username) => {
//   console.log(`sending email to ${username}`)
// })

// //welcome email
// auth.on('register', (username) => {
//   console.log(`sending welcome email to ${username}`)
// })
// auth.register('vicky');
