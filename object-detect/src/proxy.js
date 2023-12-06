const express = require('express');
const http = require('http');
const request = require('request');

const app = express();
const port = 3002; // Ganti dengan port yang sesuai

app.use(express.static('public'));

app.get('/mjpeg-proxy', (req, res) => {
    const esp32camStreamURL = 'http://192.168.1.4/mjpeg/1'; // Ganti dengan URL stream MJPEG ESP32-CAM
    req.pipe(request(esp32camStreamURL)).pipe(res);
});

app.listen(port, () => {
    console.log(`Server proxy berjalan di http://localhost:${port}`);
});
