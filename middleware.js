const express = require('express');
const app = express();

// ✅ Custom middleware function
function loggerMiddleware(req, res, next) {
    console.log(`${req.method} ${req.url} at ${new Date().toISOString()}`);
    next(); // Pass control to the next middleware or route handler
}

// ✅ Apply middleware to all routes
app.use(loggerMiddleware);

// ✅ A sample route
app.get('/', (req, res) => {
    res.send('Hello, Middleware!');
});

// ✅ Start the server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
