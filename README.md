# Tastigo — Food Ordering Frontend

Tastigo is a frontend-only academic food ordering and delivery website prototype.

## What is included?

- Attractive responsive UI/UX
- Tastigo branding
- Hero search
- Food mood selection:
  - Anything
  - Comfort
  - Spicy
  - Healthy
  - Sweet
  - Quick bite
  - Party time
- **Unique Smart Filter:** maximum food price/budget
- Cuisine filters
- Vegetarian / non-vegetarian filter
- Search by food, restaurant or cuisine
- Food cards with ratings, price and delivery time
- Food details popup
- Add to cart
- Quantity increase/decrease
- Cart total and delivery fee calculation
- Favourite/heart button
- Login demo modal
- Location selector demo
- First-order coupon demo
- Mock order tracking
- Responsive design for desktop/tablet/mobile
- LocalStorage for cart and favourites
- No backend required

## How to run in VS Code

### Method 1 — Live Server (recommended)

1. Install VS Code.
2. Open the `Tastigo` folder in VS Code.
3. Install the **Live Server** extension by Ritwick Dey.
4. Open `index.html`.
5. Right-click inside the file.
6. Select **Open with Live Server**.
7. Your browser will open Tastigo.

### Method 2 — Without any extension

You can also double-click `index.html` and open it in a browser. Most features will work, but Live Server is recommended for development.

## Project structure

Tastigo/
├── index.html
├── styles.css
├── script.js
└── README.md

## Current architecture

This version intentionally has no backend.

Frontend:
- HTML
- CSS
- Vanilla JavaScript
- LocalStorage for demo cart/favourites

## Backend can be added later

When you are ready, the frontend can be connected to:

- User authentication
- MySQL / PostgreSQL / MongoDB
- Restaurant database
- Menu database
- Orders
- Payment gateway
- Delivery tracking
- Admin dashboard
- Restaurant dashboard
- Recommendation engine
- Real API-based Smart Filter

Suggested future stack:

Frontend:
HTML/CSS/JavaScript or React

Backend:
Node.js + Express

Database:
MySQL or MongoDB

Authentication:
JWT / session authentication

Payments:
Razorpay / Stripe

## Important

Food images are loaded from Unsplash URLs, so an internet connection is recommended while running the prototype.

The restaurant names and food data in this project are demo data for the academic frontend prototype.
