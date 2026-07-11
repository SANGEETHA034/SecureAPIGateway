require('dotenv').config();
console.log(
  process.env.RATE_LIMIT_WINDOW_MS,
  process.env.RATE_LIMIT_MAX_REQUESTS
);
const express = require('express');
const jwt = require('jsonwebtoken');
const rateLimit = require('express-rate-limit');
const morgan = require('morgan');

const auth = require('./middleware/auth');

const app = express();

app.use(express.json());

app.use(morgan('dev'));

const limiter = rateLimit({
    windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS),
    max: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS),
    message: {
        message: 'Too many requests. Please try again later.'
    }
});

app.use(limiter);

app.get('/', (req, res) => {
    res.send('Secure API Gateway is running!');
});

app.post('/login', (req, res) => {

    const { username, password } = req.body;

    if (
        username === 'admin' &&
        password === 'admin123'
    ) {

        const token = jwt.sign(
            { username },
            process.env.JWT_SECRET,
            {
                expiresIn: process.env.JWT_EXPIRES_IN
            }
        );

        return res.json({
            token
        });
    }

    return res.status(401).json({
        message: 'Invalid Credentials'
    });
});

app.get('/profile', auth, (req, res) => {

    res.json({
        message: 'Welcome Admin!',
        user: req.user
    });

});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});