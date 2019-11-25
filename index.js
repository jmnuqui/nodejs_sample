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
const myUrl = new URL('http://mywebsite.com/hello.html?id=123&status=active');

console.log('href: -------------' + myUrl.href);
console.log('to string: --------' + myUrl.toString());
console.log('host: -------------' + myUrl.host);
console.log('hostname: ---------' + myUrl.hostname);
console.log('pathname: ---------' + myUrl.pathname);
console.log('search: -----------' + myUrl.search);
console.log('searchParams: -----' + myUrl.searchParams);

myUrl.searchParams.append('abc', '123');
console.log('append: -----------' + myUrl.searchParams);
