// const Person = require('./person');
//
// (new Person('John Doe', 30)).greetings();
//
// console.log(__filename  + " -- " + __dirname)
//
// console.log(path)

const fs = require('fs');
const path  = require('path');
const os = require('os');
const url = require('url');
const EventEmitter = require('events');
const http = require('http');

//--create file
// fs.writeFile(
//   path.join(__dirname, '/test', 'hello.txt'),
//   'Hello World',
//   err => {
//     if (err) throw err;
//     console.log('Folder Created ...')
//   }
// )

//--append data
// fs.appendFile(
//   path.join(__dirname, '/test', 'hello.txt'),
//   '\nHello World',
//   err => {
//     if (err) throw err;
//     console.log('Folder Created ...')
//   }
// )

//--Read file
// fs.readFile(
//   path.join(__dirname, '/test', 'hello.txt'),
//   'utf-8', (err, data) => {
//     if (err) throw err;
//     console.log(data)
//   }
// )

//----Rename File
// fs.rename(
//   path.join(__dirname, '/test', 'hello.txt'), //Old File name
//   path.join(__dirname, '/test', 'hellozxcxzc.txt'), //New File Name
//   err => {
//     if (err) throw err;
//     console.log('File renamed!!!');
//   }
// )


//--platform
// console.log(os.platform());
// console.log(os.arch());
// console.table(os.cpus());
// console.log(os.freemem());
// console.log(os.totalmem());
// console.log(os.homedir());
// console.log(os.uptime());


//---URL Module
// const myUrl = new URL('http://mywebsite.com/hello.html?id=123&status=active');

// console.log('href: -------------' + myUrl.href);
// console.log('to string: --------' + myUrl.toString());
// console.log('host: -------------' + myUrl.host);
// console.log('hostname: ---------' + myUrl.hostname);
// console.log('pathname: ---------' + myUrl.pathname);
// console.log('search: -----------' + myUrl.search);
// console.log('searchParams: -----' + myUrl.searchParams);

// myUrl.searchParams.append('abc', '123');
// console.log('append: -----------' + myUrl.searchParams);
// myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`))



// //Create Class
// class MyEmitter extends EventEmitter {
//
// }
// //Init Object
// const myEmitter = new MyEmitter();
// // Event Listener
// myEmitter.on('event', () => console.log('Event Fired!!!'));
// myEmitter.emit('event');
// myEmitter.emit('event');
// myEmitter.emit('event');
// myEmitter.emit('event');

// //Logger With Event Emitter
// const uuid = require('uuid');
//
// class Logger extends EventEmitter {
//   log(msg) {
//     //call event
//     this.emit('message', {id: uuid.v1(), msg });
//   }
// }
//
// const logger = new Logger();
// logger.on('message', (data) => console.log('Called Listener:', data));
// logger.log('Hello World');


// Http Module
// http.createServer((req, res) => {
//   res.write('Hello World');
//   // res.end();
//   console.log("current url: ", req.url);
//   // res.end();
// }).listen(5000, () => console.log('Server running...'));


// //Create a Server
let server = http.createServer((req, res) => {
  if(req.url == "/"){
    res.write('<h1>Home</h1>');
  } else if(req.url == "/about") {
    res.write('<h1>About</h1>');
  }
  console.log("current url: " + req.url);
  res.end();
});
server.listen(5000, () => console.log("zxc"));
