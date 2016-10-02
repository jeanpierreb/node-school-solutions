// Exercise 1
// console.log('HELLO WORLD')

// Exercise 2
// let sum = 0
//
// process.argv.forEach((val, index) => {
//     if (index > 1) sum += +val
// })
//
// console.log(sum)

// Exercise 3
// var fs = require('fs')
// var file = fs.readFileSync(process.argv[2]).toString().split('\n')
// console.log(file.length - 1)

// Exercise 4
// const fs = require('fs');
// const input = process.argv[2] || 'package.json'
// let file = fs.readFile(input, 'utf8', (err, data) => {
// 	if (err) {
// 		throw error
// 	}
// 	console.log(data.split('\n').length - 1);
// })

// Exercise 5
// const fs = require('fs');
// const dir = process.argv[2] || '.';
// const regex = new RegExp('[!^.]' + process.argv[3]);
//
// fs.readdir(dir, (err, files) => {
// 	files.forEach(function(item){
// 		if (item.search(regex) != -1) {
// 			console.log(item);
// 		}
// 	})
// });

// Exercise 5 - Alternate version with Path instead of regex
// const fs = require('fs');
// const dir = process.argv[2];
// const ext = '.' + process.argv[3];
// const path = require('path');
//
// fs.readdir(dir, (err, files) => {
// 	files.forEach(function(item){
// 		if (path.extname(item) === ext) {
// 			console.log(item);
// 		}
// 	})
// });

// Exercise 6
// const program = require('./program');
// const ext = process.argv[3];
// const dir = process.argv[2];
//
// program(dir, ext, (err, results) => {
// 	if (err) return err;
//
// 	results.forEach(i => {
// 		console.log(i);
// 	})
// })

// Exercise 7
// const http = require('http')
//
// http.get(process.argv[2], (res) => {
//   res.resume();
// 	res.on('data', (evt) => {
// 			console.log(evt.toString());
// 	})
// }).on('error', (e) => {
//   console.log(`Got error: ${e.message} from `);
// });

// Exercise 8
// const http = require('http');
// const concatStream = require('concat-stream');
// const url = process.argv[2] || 'http://google.com';
//
// http.get(url, (res) => {
// 	res.resume();
// 	res.pipe(concatStream((data) => {
// 		console.log(data.toString().length);
// 		console.log(data.toString());
// 	}))
// }).on('error', (e) => {
// 	console.error(`Got an error: ${e.message}`);
// })

// Exercise 9
// const http = require('http')
// const urls = process.argv.slice(2)
// let output = []
//
// for (let i = 0; i < urls.length; i++) {
// 	(function(i) {
// 		http.get(urls[i], (req) => {
// 			var result = ''
//
// 			req.setEncoding('utf8')
//
// 			req.on('data', (data) => {
// 				result += data
// 			})
//
// 			req.on('end', (e) => {
// 				output[i] = result
//
// 				if (output.length === urls.length) {
// 					for (let j = 0; j < output.length; j++) {
// 						console.log(output[j]);
// 					}
// 				}
// 			})
// 		});
// 	}(i));
// }

// Exercise 10
// const net = require('net');
// const strftime = require('strftime');
// const port = process.argv[2]
//
// let server = net.createServer((socket) => {
// 	let data = strftime('%F %H:%M', new Date()) + '\n'
// 	socket.end(data)
// })
// server.listen(port)


// Exercise 11
// const http = require('http');
// const fs = require('fs');
//
// let server = http.createServer(function(request, response) {
// 	fs.createReadStream(process.argv[3]).pipe(response)
// })
//
// server.listen(process.argv[2])

// Exercise 12
// const http = require('http');
// const map = require('through2-map');
// let uc = map(chunk => chunk.toString().toUpperCase())
//
// let server = http.createServer((req, res) => {
// 	if (req.method == 'POST') {
// 		req.pipe(uc).pipe(res)
// 	}
// })
//
// server.listen(process.argv[2])

// Exercise 13
// const http = require('http')
// const url = require('url')
//
// let routes = {
// 	'/api/parsetime' : (parsedUrl) => {
// 		date = new Date(parsedUrl.query.iso)
// 		return {
// 			hour: date.getHours(),
// 			minute: date.getMinutes(),
// 			second: date.getSeconds()
// 		}
// 	},
//
// 	'/api/unixtime': (parsedUrl) => {
// 		return {
// 			'unixtime': (new Date(parsedUrl.query.iso)).getTime()
// 		}
// 	}
// }
//
// let parser = (path) => url.parse(`api/${path}`, true)
//
// server = http.createServer(function (req,res) {
// 	let parsedUrl = url.parse(req.url, true)
//
// 	let data = routes[parsedUrl.pathname](parsedUrl)
//
// 	if (!data) {
// 		res.writeHead(404)
// 		res.end()
// 	}
//
// 	res.writeHead(200, { 'Content-Type': 'application/json' })
// 	res.end(JSON.stringify(data))
// })
//
// server.listen(process.argv[2])
