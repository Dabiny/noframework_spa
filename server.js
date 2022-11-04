const http = require('http'); //http 모듈 생성
const fs = require('fs');
const url = require('url');
// const server = http.createServer(); // 웹서버 생성

// server.on('request', (code) => { // code => IncomingMessage객체 
//     console.log('Request Event');
    
// })

// server.on('connection', (code) =>{ // code => soket 객체
//     console.log('Connection Event');
   
// })

const server = http.createServer((request, response) => {
    // fs.readFile('./index.html', (err, data) => { // html파일을 보내는 방법. 
    //     response.writeHead(200, { "Content-type": "text/html" });
    //     response.end(data);
    // });
    // response.writeHead(200, { 'Content-type': 'text/html' });
    // response.end('<h1>Hello world...</h1>');

    // let date = new Date();
    // date.setDate(date.getDate() + 7);

    // response.writeHead(200, {
    //     'Content-type': 'text/html',
    //     'Set-Cookie': [
    //         'myname = dabin; Expires = ' + date.toUTCString(),
    //         'mygoal = good developer'
    //     ]
    // });
    // response.end('<h1>' + request.headers.cookie + '</h1>');

    if (request.method === 'GET') {
        console.log('GET 요청입니다.');
    }
    else if (request.method === 'POST') {
        console.log('POST 요청입니다.');
    }

    let path = url.parse(request.url).pathname;

    if (path === '/') {
        fs.readFile('./index.html', (err, data) => {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.end(data);
        });
    }
    else if (path === '/otherPage') {
        fs.readFile('./otherPage.html', (err, data) => {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.end(data);
        })
    }
})
server.listen(8080, () => {console.log('3002번 포트 생성')});
