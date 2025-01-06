// CommonJS 모듈 호출 방식
// const http = require("node:http");

// ESM 표준 모듈 호출 방식
import http from "node:http";

const PORT = 4000;

const server = http.createServer((request, response) => {
  response.end(/* html */ `
      <!doctype html>
      <html lang="ko-KR">
        <head>
          <meta charset="utf-8"/>
          <title>TypeScript 에센셜</title>
        </head>
        <body>
          <h1>타입스크립트 에센셜</h1>
        </body>
      </html>
    `);
});

server.listen(PORT);