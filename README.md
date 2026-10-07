# ZOR

## Contemporary Menswear E-commerce

ZOR is a full-stack contemporary menswear e-commerce web application built as a portfolio project. It combines a React frontend with a Java Spring Boot backend, Hibernate/JPA, and MySQL to deliver a complete product browsing, shopping bag, checkout, and order workflow.

## Live Demo

https://zor-clothing.onrender.com

## Tech Stack

### Frontend

- React
- JavaScript
- Vite
- React Router
- CSS
- Responsive design

### Backend

- Java 21
- Spring Boot 4.1.1
- Spring Web
- Spring Data JPA
- Hibernate
- Maven

### Database

- MySQL 8
- JPA/Hibernate ORM

## Features

- Editorial-style responsive homepage
- Contemporary menswear product catalogue
- Product category browsing
- Product detail pages
- Search with live product filtering
- Wishlist
- Recently viewed products
- Product size selection
- Persistent shopping bag
- Cart quantity updates
- Cart item removal
- Backend-backed cart persistence
- Checkout page
- Customer and delivery details
- Order creation through REST API
- Order confirmation
- Responsive mobile experience

## Architecture

```text
React Frontend
      ↓
Spring Boot REST API
      ↓
Hibernate / JPA
      ↓
MySQL Database
```

## Main Shopping Flow

```text
Home
  ↓
Shop
  ↓
Product
  ↓
Add to Bag
  ↓
Bag
  ↓
Checkout
  ↓
Place Order
  ↓
Spring Boot Order API
  ↓
MySQL
  ↓
Order Confirmation
```

## Backend API

### Products

```text
GET     /api/products
GET     /api/products/{id}
POST    /api/products
PUT     /api/products/{id}
DELETE  /api/products/{id}
```

### Cart

```text
POST    /api/cart
GET     /api/cart/{cartId}
POST    /api/cart/{cartId}/items
PUT     /api/cart/{cartId}/items/{itemId}
DELETE  /api/cart/{cartId}/items/{itemId}
DELETE  /api/cart/{cartId}
```

### Orders

```text
POST    /api/orders/from-cart/{cartId}
GET     /api/orders/{id}
```

## Database Entities

- `Product`
- `Cart`
- `CartItem`
- `Order`
- `OrderItem`

Hibernate/JPA manages the relationships between these entities, while MySQL stores the persistent application data.

## Project Structure

```text
zor/
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── public/
│   ├── zor-left.png
│   ├── zor-middle.png
│   └── zor-right.png
│
└── backend/
    ├── pom.xml
    └── src/
        └── main/
            ├── java/
            │   └── zor_backend/
            │       ├── BackendApplication.java
            │       ├── Product.java
            │       ├── ProductRepository.java
            │       ├── ProductController.java
            │       ├── DataSeeder.java
            │       ├── Cart.java
            │       ├── CartItem.java
            │       ├── CartRepository.java
            │       ├── CartController.java
            │       ├── Order.java
            │       ├── OrderItem.java
            │       ├── OrderRepository.java
            │       └── OrderController.java
            └── resources/
                └── application.properties
```

## Running the Project Locally

### 1. Start MySQL

Make sure MySQL is running and create a database named `zor`.

### 2. Start the Backend

Open a terminal inside the `backend` directory and run:

```bash
mvn spring-boot:run
```

The backend runs on:

```text
http://localhost:8080
```

### 3. Start the Frontend

Open another terminal in the project root and run:

```bash
npm install
npm run dev
```

The frontend runs on:

```text
http://localhost:5173
```

## Database Configuration

Create a MySQL database named:

```sql
CREATE DATABASE zor;
```

Configure the local MySQL username and password in:

```text
backend/src/main/resources/application.properties
```

Do not commit real database passwords, API keys, or other secrets to a public repository. For production deployments, sensitive configuration should be supplied through environment variables or another secure configuration method.

## Portfolio Highlights

This project demonstrates:

- Component-based React development
- Client-side routing
- REST API integration
- CRUD operations
- Persistent cart state
- Relational database design
- JPA entity relationships
- Spring Boot REST controllers
- Hibernate ORM
- MySQL persistence
- Responsive UI development
- End-to-end checkout and order flow
- Frontend and backend deployment

## Current Scope

Payment processing is simulated for this portfolio build. Orders are created with a `PENDING` status.

Potential future improvements include:

- Real payment gateway integration
- Authentication and user accounts
- Inventory management
- Order history
- Admin dashboard
- Product image storage
- Environment-based configuration

## Deployment

The application is deployed using Render.

### Frontend

https://zor-clothing.onrender.com

### Backend API

https://zor-1108.onrender.com/api/products

## Author

**Fida Sathar**