# Secure API Gateway

## Project Description
This project is a Secure API Gateway built using Node.js and Express.js. It protects API endpoints using JWT (JSON Web Token) authentication and prevents excessive requests using Rate Limiting.

## Objective
- Implement secure user authentication.
- Protect APIs using JWT tokens.
- Prevent API abuse with Rate Limiting.
- Test APIs using Postman.

## Technologies Used

- Node.js
- Express.js
- JSON Web Token (JWT)
- Express Rate Limit
- Morgan
- Dotenv
- Postman
- GitHub

## API Endpoints

### Login

**POST** `/login`

Sample Request:

```json
{
  "username": "admin",
  "password": "admin123"
}
```

### Protected Profile

**GET** `/profile`

Authorization Header:

```
Bearer <JWT Token>
```

## Features

- JWT Authentication
- Protected API Endpoint
- Rate Limiting
- Secure Middleware
- API Testing with Postman

Project by,
Sangeetha A 
24MCA006
