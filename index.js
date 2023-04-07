
const http = require('http');
const fs = require('fs');
const ejs = require('ejs');

/*임시 데이터*/
//const name = 'ellen';
//name.ejs 역시 확인용으로 만들어진 파일

const basic = './pack/index.html';

const server = http.createServer((request, response) => {
  const url = request.url;
  response.setHeader('Content-Type', 'text/html');

  if (url === '/') {
    ejs
      .renderFile('./pack/index.html', { basic })
      .then(data => response.end(data));
  } 
  ///서버 연결 확인을 위해 임시로 만들어진 부분
  /*
  else if(url === './template/name.ejs'){
    ejs
    .renderFile('./template/index.ejs', { name })
    .then(data => res.end(data));
  }
  */
});

server.listen(3050,(err)=>{
  if(err){
      console.log('Error!!!');
  }else{
      console.log('create server on localhost:3050!!!');
  }
});