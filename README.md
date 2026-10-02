# ZOR

## Contemporary Menswear E-commerce

ZOR is a full-stack contemporary menswear e-commerce web application built as a portfolio project. It combines a React frontend with a Java Spring Boot backend, Hibernate/JPA, and MySQL for persistent product, cart, and order data.

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
- Product categories
- Product detail pages
- Search overlay with live product filtering
- Quick View
- Wishlist
- Recently viewed products
- Size selection
- Persistent shopping bag
- Quantity updates and item removal
- Backend-backed cart persistence
- Checkout page
- Customer and delivery details
- Order creation through REST API
- Order confirmation page
- Responsive mobile layout

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
GET    /api/products
GET    /api/products/{id}
POST   /api/products
PUT    /api/products/{id}
DELETE /api/products/{id}
```

### Cart

```text
POST   /api/cart
GET    /api/cart/{cartId}
POST   /api/cart/{cartId}/items
PUT    /api/cart/{cartId}/items/{itemId}
DELETE /api/cart/{cartId}/items/{itemId}
DELETE /api/cart/{cartId}
```

### Orders

```text
POST   /api/orders/from-cart/{cartId}
GET    /api/orders/{id}
```

## Database Entities

- `Product`
- `Cart`
- `CartItem`
- `Order`
- `OrderItem`

Hibernate/JPA manages the relationships between these entities and MySQL stores the persistent data.

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

## Running the Project

### 1. Start MySQL

Make sure MySQL is running and the `zor` database exists.

### 2. Start the backend

Open a terminal in:

```text
backend/
```

Run:

```bash
mvn spring-boot:run
```

The backend runs on:

```text
http://localhost:8080
```

### 3. Start the frontend

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

Do not commit real database passwords or secrets to a public repository. For a production version, these values should be supplied through environment variables.

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

## Current Scope

Payment processing is simulated for this portfolio build. Orders are created with a `PENDING` status.

Future production improvements could include:

- Real payment gateway integration
- Authentication and user accounts
- Inventory management
- Order history
- Admin dashboard
- Product image storage
- Environment-based configuration
- Deployment

## Author

**Fida Sathar**
