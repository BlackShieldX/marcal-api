const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Define a simple route
app.get('/', (req, res) => {
    res.send('Hello, this is your API!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
