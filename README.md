# 🚀 Blogify API

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)
![Stripe](https://img.shields.io/badge/Stripe-635BFF?style=for-the-badge&logo=stripe&logoColor=white)
![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white)

> A robust, scalable RESTful API powering a full-featured blogging platform — with authentication, media uploads, payment processing, and order management built in.

---

## 📖 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Prerequisites](#-prerequisites)
- [Installation & Setup](#-installation--setup)
- [Environment Variables](#-environment-variables)
- [API Endpoints](#-api-endpoints)
- [Running the Project](#-running-the-project)
- [Project Structure](#-project-structure)
- [Contributing](#-contributing)
- [License](#-license)

---

## ✨ Features

- 🔐 **User Authentication** — Secure registration & login using JWT tokens
- 📝 **Post Management** — Full CRUD operations for blog posts with cursor-based pagination
- 🖼️ **Image Uploads** — Cloud-based image storage via Cloudinary
- 💳 **Payment Processing** — Stripe-powered payment intents and confirmations
- 📦 **Order Management** — Create and track user orders
- ☁️ **Cloud Database** — Hosted on MongoDB Atlas for reliability and scalability

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Runtime** | Node.js |
| **Framework** | Express.js |
| **Database** | MongoDB with Mongoose ODM |
| **Authentication** | JWT (JSON Web Tokens) |
| **File Storage** | Cloudinary |
| **Payments** | Stripe |
| **Cloud DB** | MongoDB Atlas |

---

## ✅ Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) v18+
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- A [MongoDB Atlas](https://www.mongodb.com/atlas) account
- A [Cloudinary](https://cloudinary.com/) account
- A [Stripe](https://stripe.com/) account

---

## ⚙️ Installation & Setup

1. **Clone the repository**

```bash
git clone https://github.com/your-username/blogify-api.git
cd blogify-api
```

2. **Install dependencies**

```bash
npm install
```

3. **Configure environment variables**

```bash
cp .env.example .env
# Then edit .env with your actual credentials
```

4. **Start the development server**

```bash
npm run dev
```

---

## 🔑 Environment Variables

Create a `.env` file in the root directory and populate it with the following:

```env
# Server
PORT=3000
NODE_ENV=development

# Database
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/blogify

# JWT
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRES_IN=7d

# Cloudinary
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Stripe
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key
```

> ⚠️ Never commit your `.env` file to version control. It's already listed in `.gitignore`.

---

## 📡 API Endpoints

**Base URL:** `http://localhost:3000/api`

### 🔐 Authentication

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|:---:|
| `POST` | `/auth/register` | Register a new user | ❌ |
| `POST` | `/auth/login` | Login and receive JWT | ❌ |

**Register Example:**
```json
POST /api/auth/register
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "password": "securepassword123"
}
```

---

### 📝 Posts

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|:---:|
| `GET` | `/posts` | Get all posts (cursor pagination) | ❌ |
| `GET` | `/posts/:id` | Get a single post by ID | ❌ |
| `POST` | `/posts` | Create a new post | ✅ |
| `PUT` | `/posts/:id` | Update an existing post | ✅ |
| `DELETE` | `/posts/:id` | Delete a post | ✅ |

**Pagination Example:**
```
GET /api/posts?cursor=<lastPostId>&limit=10
```

---

### 🖼️ Uploads

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|:---:|
| `POST` | `/upload` | Upload an image to Cloudinary | ✅ |

**Request:** `multipart/form-data` with field `image`

---

### 💳 Payments

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|:---:|
| `POST` | `/payments/create-payment-intent` | Create a Stripe payment intent | ❌ |
| `POST` | `/payments/confirm-payment` | Confirm a completed payment | ❌ |

**Create Payment Intent Example:**
```json
POST /api/payments/create-payment-intent
{
  "amount": 2999,
  "currency": "usd"
}
```

---

### 📦 Orders

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|:---:|
| `POST` | `/orders` | Create a new order | ✅ |
| `GET` | `/orders/my-orders` | Get all orders for logged-in user | ✅ |
| `GET` | `/orders/:id` | Get a specific order by ID | ✅ |

---

## ▶️ Running the Project

```bash
# Development (with hot reload)
npm run dev

# Production
npm start

# Run tests
npm test
```

The server will start at: `http://localhost:3000`

---

## 📁 Project Structure

```
blogify-api/
├── src/
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── postController.js
│   │   ├── uploadController.js
│   │   ├── paymentController.js
│   │   └── orderController.js
│   ├── middleware/
│   │   ├── authMiddleware.js
│   │   └── errorHandler.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Post.js
│   │   └── Order.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── posts.js
│   │   ├── upload.js
│   │   ├── payments.js
│   │   └── orders.js
│   ├── config/
│   │   ├── db.js
│   │   └── cloudinary.js
│   └── app.js
├── .env
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a Pull Request

Please make sure your code follows the existing style and all tests pass before submitting.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

<p align="center">Made with ❤️ using Node.js & Express</p>
