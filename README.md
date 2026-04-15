# DOGCLUB

Full-stack web application for a dog services brand, including:

- marketing landing page,
- nutrition catalog with sorting and pagination,
- shopping cart flow,
- customer reviews with image upload,
- contact forms with email notifications.

## Table of Contents

- [Live Demo](#live-demo)
- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Features](#features)
- [Screenshots](#screenshots)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [API Reference](#api-reference)
- [Available Scripts](#available-scripts)
- [Deployment Notes](#deployment-notes)

## Live Demo

- Production URL: [https://dogclub.vercel.app](https://dogclub.vercel.app)

## Overview

`DOGCLUB` combines a React frontend and an Express/MongoDB backend.

The frontend provides a responsive user experience for:

- home/brand presentation,
- nutrition products browsing,
- cart interactions,
- submitting reviews and contacts.

The backend provides REST endpoints for:

- products,
- reviews,
- contacts (with automatic email send),
- cart storage.

## Tech Stack

### Frontend

- React
- React Router
- Axios
- React Hook Form + Yup
- React Toastify
- CSS (component-based styles)

### Backend

- Node.js + Express
- MongoDB + Mongoose
- Multer (in-memory uploads)
- Cloudinary (review image hosting)
- Nodemailer (email notifications from contact form)
- Morgan + CORS + dotenv

## Project Structure

```text
dog-club/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── api/
│   │   └── context/
│   └── package.json
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── middleware/
│   │   └── config/
│   ├── server.js
│   └── package.json
└── README.md
```

## Features

- Responsive UI for mobile, tablet, and desktop breakpoints
- Product catalog with sorting and pagination
- Cart add/remove functionality
- Review submission with star rating and optional image upload
- Contact form persistence in MongoDB
- Automatic email notification for each contact request

## Screenshots

### Home / Landing

`![Home page](docs/screenshots/home-page.jpeg)`

### Nutrition (Mobile sorting sheet)

`![Nutrition mobile sorting](docs/screenshots/nutrition-mobile-sorting.jpeg)`

### Footer (Desktop + Mobile)

`![Footer desktop](docs/screenshots/footer-desktop.jpeg)`

`![Footer mobile](docs/screenshots/footer-mobile.jpeg)`

### Contact Form Email Notification (Important)

After a user submits the contact form, the backend sends an email via Nodemailer to `GMAIL_USER`.

`![Contact email notification](docs/screenshots/contact-email-notification.jpeg)`

This is useful in portfolio/demo presentations to prove end-to-end form delivery.

## Getting Started

### 1) Clone repository

```bash
git clone <your-repository-url>
cd dog-club
```

### 2) Install dependencies

```bash
cd frontend && npm install
cd ../backend && npm install
```

### 3) Configure environment variables

Create `backend/.env` (see [Environment Variables](#environment-variables)).

### 4) (Optional) Seed initial data

```bash
cd backend
npm run seed
```

### 5) Start backend

```bash
cd backend
npm run dev
```

Backend runs on `http://localhost:8080`.

### 6) Start frontend

```bash
cd frontend
npm start
```

Frontend runs on `http://localhost:3000`.

## Environment Variables

Create `backend/.env` with:

```env
PORT=8080
MONGODB_URI=your_mongodb_connection_string

GMAIL_USER=your_gmail_address
GMAIL_PASS=your_gmail_app_password

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

Notes:

- Use a Gmail App Password (not your main account password).
- Cloudinary values are required for review image upload.

## API Reference

Base URL: `http://localhost:8080/api`

### Products

- `GET /products` - list products (supports query params like `sortBy`, `page`, `limit`, `category`)
- `GET /products/:id` - get product by id

### Reviews

- `GET /reviews` - list reviews
- `POST /reviews` - create review (`multipart/form-data`, field name for image: `image`)

### Contacts

- `POST /contacts` - create contact request and trigger email notification

### Cart

- `GET /cart` - get cart items
- `POST /cart` - add item `{ productId }`
- `DELETE /cart/:productId` - remove item by product id

## Available Scripts

### Frontend (`frontend/package.json`)

- `npm start` - run development server
- `npm run build` - production build
- `npm test` - tests

### Backend (`backend/package.json`)

- `npm run dev` - run server with nodemon
- `npm start` - run server with node
- `npm run seed` - seed MongoDB with initial data

## Deployment Notes

- Frontend and backend are separate services.
- Update frontend API base URL in `frontend/src/api/api.js` for production.
- Configure environment variables securely on hosting platform.
- Ensure CORS policy includes your frontend domain.
