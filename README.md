## This is a book catalog backend site. It works as a online book store. You can create user. If you are a admin you can create category, create book. Only admins can update and delete operations. You can create order if you are a customer. A customers and admins can see all books. A customer can see his/her orders, on the other hand admins can see all orders. Lastly every user can see his/her profile info.

# live link: [https://book-catalog-chi.vercel.app]

## Authorization

### For Customer:

{authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQxMzc0YTM2LTRmMzAtNGFiNi04ZWNlLTFiZDc3YTYzOTM1NCIsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTY5Mzc1MzU2NSwiZXhwIjoxNzI1Mjg5NTY1fQ.6ubBeOjBLA_yCMDlwmcqzNlNsklYU5X_ibdqwPKvzeY }

### For Admin:

{authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjkwOWRmNzQyLWVhYjctNGU2My04YTkyLTQ5M2FkNzM3ZDIzMiIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY5Mzc1Mzc0NSwiZXhwIjoxNzI1Mjg5NzQ1fQ.ZaotZlrW9aFQdgN6gHwqVtPbMqXDqkAFKT0mUZNgpJM }

## USER

- Route: [https://book-catalog-chi.vercel.app/api/v1/auth/singup] (POST) Create users
- Route: [https://book-catalog-chi.vercel.app/api/v1/users] (GET) Only Admins can get all users
- Route: [https://book-catalog-chi.vercel.app/api/v1/users/909df742-eab7-4e63-8a92-493ad737d232] (Single GET) Only Admins can get single user
- Route: [https://book-catalog-chi.vercel.app/api/v1/users/c7582bd4-7f55-4f5c-a4d2-7422c5205a17] (PATCH)Only Admins can get update single user
- Route: [https://book-catalog-chi.vercel.app/api/v1/users/c7582bd4-7f55-4f5c-a4d2-7422c5205a17] (DELETE)
- Route: [https://book-catalog-chi.vercel.app/api/v1/profile] (GET) Only Admins can delete a user

## CATEGORY

- Route: [https://book-catalog-chi.vercel.app/api/v1/categories/create-category] (POST) Only Admin can create category
- Route: [https://book-catalog-chi.vercel.app/api/v1/categories] (GET) Everyone can see all categories
- Route: [https://book-catalog-chi.vercel.app/api/v1/categories/eaa2b9ba-2a0c-4080-afda-541a26dbadac] (Single GET)Everyone can see a Single category
- Route: [https://book-catalog-chi.vercel.app/api/v1/categories/4d854790-617f-41a7-9790-109bf4d23cb4] (PATCH) Only Admins can update single category
- Route: [https://book-catalog-chi.vercel.app/api/v1/categories/4d854790-617f-41a7-9790-109bf4d23cb4] (DELETE) Only Admins can delete single Category

## BOOKS

- Route: [https://book-catalog-chi.vercel.app/api/v1/books/create-book] (POST)Admin can create a book
- Route: [https://book-catalog-chi.vercel.app/api/v1/books?size=2&page=&sortBy=price&sortOrder=desc&minPrice=200&maxPrice=1000&category=eaa2b9ba-2a0c-4080-afda-541a26dbadac&search=programming] (GET) Everyone can see all books
- Route: [https://book-catalog-chi.vercel.app/api/v1/books/22a45a07-9065-445a-85cd-a3e6882acab8] (Single GET)Everyone can see a book details

- Route: [https://book-catalog-chi.vercel.app/api/v1/books/eaa2b9ba-2a0c-4080-afda-541a26dbadac/category] (GET)All users can get books useing category
- Route: [https://book-catalog-chi.vercel.app/api/v1/books/22a45a07-9065-445a-85cd-a3e6882acab8] (PATCH)Admin can update single book
- Route: [https://book-catalog-chi.vercel.app/api/v1/books/22a45a07-9065-445a-85cd-a3e6882acab8] (DELETE)Admin can delete single book

## ORDERS

- Route: [https://book-catalog-chi.vercel.app/api/v1/orders/create-order] (POST)User can create a order
- Route: [https://book-catalog-chi.vercel.app/api/v1/orders] (GET) Only for specific customer and admins
- Route: [https://book-catalog-chi.vercel.app/api/v1/orders/45ec3167-fa5c-4dac-bfa6-64c0b5819b40] (GET) Single order Only for specific customer and admins
