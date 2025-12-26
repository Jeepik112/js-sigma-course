// ЛЕКЦИЯ 6.
//

const http = require("http");
const PORT = 3000;

// const server = http.createServer((request, response) => {
//     // request - объект запроса от клиента
//     // response - ответ сервера клиенту

//     console.log("кто-то зашел на сервер");
//     console.log(request.method);

//     // формируем ответ клиенту
//     response.writeHead(200, { "Content-Type": "Text/plain" });

//     // тело ответа
//     response.write("hi from node.js server");

//     // закрываем соединение
//     response.end();
// });

const server = http.createServer(async (request, response) => {
    response.setHeader("Content-Type", "text/plain; charset=utf-8");

    if (request.url === "/") {
        // главная страница нашего сайта
        response.end("Главная страница сайта");
    } else if (request.url === '/about') {
        // страница о нас
        response.statusCode = 200;
        response.write("это страница нашего файлообменника");
        response.end();
    } else {
        response.statusCode = 404;
        response.end("404 - страница не найдена");
        response.end();
    }
}

server.listen(PORT);
console.log("сервер успешно запущен");