# Food Ordering System API Documentation

## Base URL

```txt
http://localhost:5000
```

---

# 1. Health API

## Check Server Status

**Method:** `GET`
**Endpoint:**

```txt
/
```

**Full URL:**

```txt
http://localhost:5000/
```

**Success Response:**

```json
{
  "success": true,
  "message": "Food Ordering API Running Successfully"
}
```

---

# 2. Authentication APIs

## 2.1 Register User

**Method:** `POST`
**Endpoint:**

```txt
/api/auth/register
```

**Full URL:**

```txt
http://localhost:5000/api/auth/register
```

**Request Body:**

```json
{
  "name": "Vedika",
  "email": "vedika@gmail.com",
  "password": "123456"
}
```

**Success Response:**

```json
{
  "success": true,
  "message": "User Registered Successfully",
  "user": {
    "_id": "USER_ID",
    "name": "Vedika",
    "email": "vedika@gmail.com"
  }
}
```

---

## 2.2 Login User

**Method:** `POST`
**Endpoint:**

```txt
/api/auth/login
```

**Full URL:**

```txt
http://localhost:5000/api/auth/login
```

**Request Body:**

```json
{
  "email": "vedika@gmail.com",
  "password": "123456"
}
```

**Success Response:**

```json
{
  "success": true,
  "message": "Login Successful",
  "token": "JWT_TOKEN"
}
```

---

## 2.3 Get User Profile

**Method:** `GET`
**Endpoint:**

```txt
/api/auth/profile
```

**Full URL:**

```txt
http://localhost:5000/api/auth/profile
```

**Headers:**

```txt
Authorization: Bearer JWT_TOKEN
```

**Success Response:**

```json
{
  "_id": "USER_ID",
  "name": "Vedika",
  "email": "vedika@gmail.com"
}
```

---

# 3. Category APIs

## 3.1 Add Category

**Method:** `POST`
**Endpoint:**

```txt
/api/category/add-category
```

**Full URL:**

```txt
http://localhost:5000/api/category/add-category
```

**Request Body:**

```json
{
  "categoryName": "Street Food"
}
```

**Success Response:**

```json
{
  "success": true,
  "message": "Category Added Successfully",
  "category": {
    "_id": "CATEGORY_ID",
    "categoryName": "Street Food"
  }
}
```

---

## 3.2 Get All Categories

**Method:** `GET`
**Endpoint:**

```txt
/api/category/get-categories
```

**Full URL:**

```txt
http://localhost:5000/api/category/get-categories
```

**Success Response:**

```json
[
  {
    "_id": "CATEGORY_ID",
    "categoryName": "Street Food"
  }
]
```

---

## 3.3 Update Category

**Method:** `PUT`
**Endpoint:**

```txt
/api/category/update-category/:id
```

**Full URL:**

```txt
http://localhost:5000/api/category/update-category/CATEGORY_ID
```

**Request Body:**

```json
{
  "categoryName": "Fast Food"
}
```

**Success Response:**

```json
{
  "success": true,
  "category": {
    "_id": "CATEGORY_ID",
    "categoryName": "Fast Food"
  }
}
```

---

## 3.4 Delete Category

**Method:** `DELETE`
**Endpoint:**

```txt
/api/category/delete-category/:id
```

**Full URL:**

```txt
http://localhost:5000/api/category/delete-category/CATEGORY_ID
```

**Success Response:**

```json
{
  "success": true,
  "message": "Category Deleted"
}
```

---

# 4. Food Item APIs

## 4.1 Add Food Item

**Method:** `POST`
**Endpoint:**

```txt
/api/food/add-food
```

**Full URL:**

```txt
http://localhost:5000/api/food/add-food
```

**Request Body:**

```json
{
  "foodName": "Vada Pav",
  "price": 25,
  "category": "CATEGORY_ID",
  "description": "Mumbai Special",
  "availability": true
}
```

**Success Response:**

```json
{
  "success": true,
  "message": "Food Added Successfully",
  "food": {
    "_id": "FOOD_ID",
    "foodName": "Vada Pav",
    "price": 25,
    "category": "CATEGORY_ID",
    "description": "Mumbai Special",
    "availability": true
  }
}
```

---

## 4.2 Get All Food Items

**Method:** `GET`
**Endpoint:**

```txt
/api/food/get-foods
```

**Full URL:**

```txt
http://localhost:5000/api/food/get-foods
```

**Success Response:**

```json
[
  {
    "_id": "FOOD_ID",
    "foodName": "Vada Pav",
    "price": 25,
    "category": {
      "_id": "CATEGORY_ID",
      "categoryName": "Street Food"
    },
    "description": "Mumbai Special",
    "availability": true
  }
]
```

---

## 4.3 Get Food Item By ID

**Method:** `GET`
**Endpoint:**

```txt
/api/food/:id
```

**Full URL:**

```txt
http://localhost:5000/api/food/FOOD_ID
```

**Success Response:**

```json
{
  "_id": "FOOD_ID",
  "foodName": "Vada Pav",
  "price": 25,
  "category": {
    "_id": "CATEGORY_ID",
    "categoryName": "Street Food"
  },
  "description": "Mumbai Special",
  "availability": true
}
```

---

## 4.4 Update Food Item

**Method:** `PUT`
**Endpoint:**

```txt
/api/food/update-food/:id
```

**Full URL:**

```txt
http://localhost:5000/api/food/update-food/FOOD_ID
```

**Request Body:**

```json
{
  "price": 30,
  "availability": false
}
```

**Success Response:**

```json
{
  "success": true,
  "message": "Food Updated Successfully",
  "food": {
    "_id": "FOOD_ID",
    "foodName": "Vada Pav",
    "price": 30,
    "availability": false
  }
}
```

---

## 4.5 Delete Food Item

**Method:** `DELETE`
**Endpoint:**

```txt
/api/food/delete-food/:id
```

**Full URL:**

```txt
http://localhost:5000/api/food/delete-food/FOOD_ID
```

**Success Response:**

```json
{
  "success": true,
  "message": "Food Deleted Successfully"
}
```

---

# 5. Order APIs

## 5.1 Place Order

**Method:** `POST`
**Endpoint:**

```txt
/api/orders/place-order
```

**Full URL:**

```txt
http://localhost:5000/api/orders/place-order
```

**Request Body:**

```json
{
  "user": "USER_ID",
  "foodItems": [
    "FOOD_ID"
  ],
  "totalPrice": 25
}
```

**Success Response:**

```json
{
  "success": true,
  "message": "Order Placed Successfully",
  "order": {
    "_id": "ORDER_ID",
    "user": "USER_ID",
    "foodItems": [
      "FOOD_ID"
    ],
    "totalPrice": 25,
    "status": "Pending"
  }
}
```

---

## 5.2 Get All Orders

**Method:** `GET`
**Endpoint:**

```txt
/api/orders/get-orders
```

**Full URL:**

```txt
http://localhost:5000/api/orders/get-orders
```

**Success Response:**

```json
[
  {
    "_id": "ORDER_ID",
    "user": {
      "_id": "USER_ID",
      "name": "Vedika",
      "email": "vedika@gmail.com"
    },
    "foodItems": [
      {
        "_id": "FOOD_ID",
        "foodName": "Vada Pav",
        "price": 25
      }
    ],
    "totalPrice": 25,
    "status": "Pending"
  }
]
```

---

## 5.3 Get Order By ID / Track Order

**Method:** `GET`
**Endpoint:**

```txt
/api/orders/:id
```

**Full URL:**

```txt
http://localhost:5000/api/orders/ORDER_ID
```

**Success Response:**

```json
{
  "_id": "ORDER_ID",
  "user": {
    "name": "Vedika",
    "email": "vedika@gmail.com"
  },
  "foodItems": [
    {
      "foodName": "Vada Pav",
      "price": 25
    }
  ],
  "totalPrice": 25,
  "status": "Pending"
}
```

---

## 5.4 Update Order Status

**Method:** `PUT`
**Endpoint:**

```txt
/api/orders/update-order/:id
```

**Full URL:**

```txt
http://localhost:5000/api/orders/update-order/ORDER_ID
```

**Request Body:**

```json
{
  "status": "Preparing"
}
```

**Allowed Status Values:**

```txt
Pending
Preparing
Out for Delivery
Delivered
Cancelled
```

**Success Response:**

```json
{
  "success": true,
  "message": "Order Updated Successfully",
  "order": {
    "_id": "ORDER_ID",
    "status": "Preparing"
  }
}
```

---

## 5.5 Cancel Order

**Method:** `DELETE`
**Endpoint:**

```txt
/api/orders/cancel-order/:id
```

**Full URL:**

```txt
http://localhost:5000/api/orders/cancel-order/ORDER_ID
```

**Success Response:**

```json
{
  "success": true,
  "message": "Order Cancelled Successfully"
}
```

---

# Database Collections

```txt
Users
Categories
FoodItems
Orders
```

# Technologies Used

```txt
Node.js
Express.js
MongoDB
Mongoose
JWT Authentication
bcrypt Password Hashing
Postman
```
