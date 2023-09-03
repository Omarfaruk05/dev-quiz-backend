This is a book catalog backend site. I works as a book store. You can create, update, delete user. You can create order if you are a customer. If you are a admin you can create category, create book. Only admins can update and delete operations.

# live link: [https://book-catalog-chi.vercel.app]

## Authorization

### For Customer:

{authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQxMzc0YTM2LTRmMzAtNGFiNi04ZWNlLTFiZDc3YTYzOTM1NCIsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTY5Mzc1MzU2NSwiZXhwIjoxNzI1Mjg5NTY1fQ.6ubBeOjBLA_yCMDlwmcqzNlNsklYU5X_ibdqwPKvzeY }

### For Admin:

{authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQxMzc0YTM2LTRmMzAtNGFiNi04ZWNlLTFiZDc3YTYzOTM1NCIsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTY5Mzc1MzU2NSwiZXhwIjoxNzI1Mjg5NTY1fQ.6ubBeOjBLA_yCMDlwmcqzNlNsklYU5X_ibdqwPKvzeY }

## USER

- Route: [https://book-catalog-chi.vercel.app/api/v1/auth/singup] (POST) Create users
- Route: [https://book-catalog-chi.vercel.app/api/v1/users] (GET) All users
- Route: [https://book-catalog-chi.vercel.app/api/v1/users/909df742-eab7-4e63-8a92-493ad737d232] (Single GET) Single user
- Route: [https://book-catalog-chi.vercel.app/api/v1/users/c7582bd4-7f55-4f5c-a4d2-7422c5205a17] (PATCH)
- Route: [https://book-catalog-chi.vercel.app/api/v1/users/c7582bd4-7f55-4f5c-a4d2-7422c5205a17] (DELETE)
- Route: [https://book-catalog-chi.vercel.app/api/v1/profile] (GET)

## CATEGORY

- Route: [https://book-catalog-chi.vercel.app/api/v1/categories/create-category] (POST)
- Route: [https://book-catalog-chi.vercel.app/api/v1/categories] (GET) All categories
- Route: [https://book-catalog-chi.vercel.app/api/v1/categories/eaa2b9ba-2a0c-4080-afda-541a26dbadac] (Single GET) Single category
- Route: [https://book-catalog-chi.vercel.app/api/v1/categories/4d854790-617f-41a7-9790-109bf4d23cb4] (PATCH) Update single category
- Route: [https://book-catalog-chi.vercel.app/api/v1/categories/4d854790-617f-41a7-9790-109bf4d23cb4] (DELETE) Delete single Category

## BOOKS

- Route: [https://book-catalog-chi.vercel.app/api/v1/books/create-book] (POST)Admin can create a book
- Route: [https://book-catalog-chi.vercel.app/api/v1/books?size=2&page=&sortBy=price&sortOrder=desc&minPrice=200&maxPrice=1000&category=eaa2b9ba-2a0c-4080-afda-541a26dbadac&search=programming] (GET) All users can get all books
- Route: [https://book-catalog-chi.vercel.app/api/v1/books/22a45a07-9065-445a-85cd-a3e6882acab8] (Single GET)All users can get a book details

- Route: [https://book-catalog-chi.vercel.app/api/v1/books/eaa2b9ba-2a0c-4080-afda-541a26dbadac/category] (GET)All users can get books useing category
- Route: [https://book-catalog-chi.vercel.app/api/v1/books/22a45a07-9065-445a-85cd-a3e6882acab8] (PATCH)Admin can update single book
- Route: [https://book-catalog-chi.vercel.app/api/v1/books/22a45a07-9065-445a-85cd-a3e6882acab8] (DELETE)Admin can delete single book

## ORDERS

- Route: [https://book-catalog-chi.vercel.app/api/v1/orders/create-order] (POST)User can create a order
- Route: [https://book-catalog-chi.vercel.app/api/v1/orders] (GET) Only for specific customer and admins
- Route: [https://book-catalog-chi.vercel.app/api/v1/orders/45ec3167-fa5c-4dac-bfa6-64c0b5819b40] (GET) Single order Only for specific customer and admins
