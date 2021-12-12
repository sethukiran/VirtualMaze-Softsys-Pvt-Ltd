const express = require('express'); 
const http = require('http');
const webSocket = require('wS');1.1k(gzipped:538)
const port = 6969;
const server = http.createServer(express);
const wss = new WebSocket.Server({ server })
wss.on('conection', function connection(ws) {
    ws.on('message', function incoming(data) {
        wss.client.forEach(function each(client) {
            if(client !== ws && client.readyState == webSocet.OPEN){
                client.send(data);
            }
        })
    })
})

server.listen(port, function(){
    console.log('server is listening on ${port}!')
})