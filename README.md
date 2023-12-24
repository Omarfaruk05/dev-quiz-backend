## This is [Dev Quiz](https://dev-quiz-backend.vercel.app) backend site. Web applicatin developers can use this site for quiz test purpose.

# live link: [https://dev-quiz-backend.vercel.app]

## Authorization

### For admin:

email: mdomarfaruk@gmail.com
password:123456

## USER

- Route: [https://dev-quiz-backend.vercel.app/api/v1/users/] (POST) Create users
- Route: [https://dev-quiz-backend.vercel.app/api/v1/users] (GET) get all users
- Route: [https://dev-quiz-backend.vercel.app/api/v1/users/:id] (Single GET)
- Route: [https://dev-quiz-backend.vercel.app/api/v1/:id] (PATCH) update single user
- Route: [https://dev-quiz-backend.vercel.app/api/v1/users/:id] (DELETE) delete a user

## Quiz

- Route: [https://dev-quiz-backend.vercel.app/api/v1/quizs] (POST) Only Admin can create review
- Route: [https://dev-quiz-backend.vercel.app/api/v1/quizs] (GET) Everyone can see all reveiws
- Route: [https://dev-quiz-backend.vercel.app/api/v1/quizs/:id] (Single GET)Everyone can see a Single Quiz
- Route: [https://dev-quiz-backend.vercel.app/api/v1/quizs/:id] (PATCH) Only Admins can update single Quiz
- Route: [https://dev-quiz-backend.vercel.app/api/v1/quizs/:id] (DELETE) Only Admins can delete single Quiz

## Question

- Route: [https://dev-quiz-backend.vercel.app/api/v1/questions] (POST)Admin can create a question
- Route: [https://dev-quiz-backend.vercel.app/api/v1/questions] (GET) Everyone can see all questions
- Route: [https://dev-quiz-backend.vercel.app/api/v1/questions/:id] (GET)get single question
- Route: [https://dev-quiz-backend.vercel.app/api/v1/questions/:id] (PATCH)UPDATE single questions
- Route: [https://dev-quiz-backend.vercel.app/api/v1/questions/:id] (DELETE)Delete question

## Score

- Route: [https://dev-quiz-backend.vercel.app/api/v1/scores] (POST)Admin can create a question
- Route: [https://dev-quiz-backend.vercel.app/api/v1/scores] (GET) Everyone can see all scores
- Route: [https://dev-quiz-backend.vercel.app/api/v1/scores/:id] (GET)get single score
- Route: [https://dev-quiz-backend.vercel.app/api/v1/scores/:id] (PATCH)UPDATE single score
- Route: [https://dev-quiz-backend.vercel.app/api/v1/scores/:id] (DELETE)Delete score

## To run this project in your local PC Pleace follow this directions

#### Steps

1. git clone https://github.com/Omarfaruk05/dev-quiz-backend.git
2. yarn / npm install
3. In your terminal use 'npm run dev / yarn run dev' for run project
4. In your terminal use 'npm run build / yarn run build' for build project
5. In your terminal use 'npm run start / yarn run start' for start project
