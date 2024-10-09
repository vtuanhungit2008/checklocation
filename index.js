const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

// Cho phép mọi nguồn truy cập (CORS)
app.use(cors());

// Sử dụng body-parser để phân tích JSON
app.use(bodyParser.json());

// API để nhận vị trí và in ra terminal
app.post('/api/save-location', (req, res) => {
    const { latitude, longitude } = req.body;

    if (!latitude || !longitude) {
        return res.status(400).send('Invalid location data.');
    }

    // Tạo link Google Maps từ tọa độ
    const googleMapsLink = `https://www.google.com/maps/?q=${latitude},${longitude}`;

    // Log vị trí và link Google Maps
    console.log(`Received location: Latitude: ${latitude}, Longitude: ${longitude}`);
    console.log(`Google Maps Link: ${googleMapsLink}`);

    // Phản hồi thành công
    res.json({ success: true, message: 'Location received successfully.', googleMapsLink });
});

// Máy chủ lắng nghe ở cổng 3000
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
