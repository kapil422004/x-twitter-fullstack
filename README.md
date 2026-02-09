# X-Twitter Fullstack

A full-stack Twitter/X clone built with the MERN stack (MongoDB, Express.js, React.js, Node.js) featuring real-time social media functionality. This application provides a complete Twitter-like experience with user authentication, tweet management, social interactions, and a modern UI optimized for laptop/desktop viewing.

🔗 **Live Demo:** [https://x-twitter-fullstack.vercel.app/](https://x-twitter-fullstack.vercel.app/)

## Features

### User Management
- **User Registration** - Secure account creation with validation
- **User Authentication** - JWT-based login and session management
- **User Profiles** - View and manage user profiles
- **Follow/Unfollow System** - Connect with other users
- **User Discovery** - Explore and find other users

### Tweet Features
- **Create Tweets** - Post updates and thoughts
- **Delete Tweets** - Remove your own tweets
- **Like/Unlike Tweets** - Interact with other users' content
- **Bookmark Tweets** - Save tweets for later viewing
- **View All Tweets** - Browse through timeline
- **Individual Tweet View** - Detailed tweet display

### Security & Performance
- **JWT Authentication** - Secure token-based authentication
- **HTTP-Only Cookies** - Enhanced security against XSS attacks
- **Password Encryption** - Bcrypt hashing for secure password storage
- **Protected Routes** - Authentication middleware for secure endpoints
- **State Management** - Redux Toolkit with Redux Persist for efficient state handling
- **Desktop Optimized** - Designed specifically for laptop and desktop viewing

## Tech Stack

**Frontend:**
- React.js
- Redux Toolkit (State Management)
- Redux Persist (Persistent State)
- React Router DOM (Navigation)
- Axios (HTTP Client)
- Tailwind CSS (Styling)
- React Icons
- React Avatar
- React Toastify (Notifications)
- Vite (Build Tool)

**Backend:**
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT (JSON Web Tokens)
- Bcrypt (Password Hashing)
- Cookie Parser
- CORS

**Development Tools:**
- Nodemon (Auto-restart)
- ESLint (Code Quality)

## Prerequisites

Before running this project, ensure you have the following installed:
- Node.js (v14 or higher)
- MongoDB (local or MongoDB Atlas account)
- npm or yarn package manager

## Installation & Setup

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd x-twitter-fullstack
```

### 2. Backend Setup

Navigate to the backend directory and install dependencies:

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` directory:

```env
PORT=3000
DB_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
NODE_ENV=production
```

**Important:**
- Replace `your_mongodb_connection_string` with your actual MongoDB connection string
- Generate a strong random string for `JWT_SECRET`
- For local development, you can set `NODE_ENV=development`

### 3. Frontend Setup

Navigate to the frontend directory and install dependencies:

```bash
cd frontend
npm install
```

Create a `.env` file in the `frontend` directory:

```env
VITE_BACKEND_USER_URL=http://localhost:3000/api/v1/user
VITE_BACKEND_TWEET_URL=http://localhost:3000/api/v1/tweet
```

**For Production:**
Update these URLs to your deployed backend URL when deploying to production.

### 4. Configure CORS

In `backend/server.js`, configure CORS to allow your frontend URL:

```javascript
app.use(cors({
  origin: 'http://localhost:5173', // Your frontend URL
  credentials: true
}));
```

## Running the Application

### Development Mode

**Start the backend server:**
```bash
cd backend
npm run dev
```
The server will run on `http://localhost:3000`

**Start the frontend:**
```bash
cd frontend
npm run dev
```
The client will run on `http://localhost:5173`

### Production Mode

**Backend:**
```bash
cd backend
npm start
```

**Frontend:**
```bash
cd frontend
npm run build
npm run preview
```

## Project Structure

```
x-twitter-fullstack/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── node_modules/
│   ├── routes/
│   ├── .env
│   ├── .gitignore
│   ├── package-lock.json
│   ├── package.json
│   └── server.js
└── frontend/
    ├── node_modules/
    ├── public/
    ├── src/
    ├── .env
    ├── .gitignore
    ├── eslint.config.js
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── README.md
    ├── vercel.json
    └── vite.config.js
```

## API Endpoints

### User Routes (`/api/v1/user`)

| Method | Endpoint | Description | Authentication |
|--------|----------|-------------|----------------|
| POST | `/register` | Register new user | No |
| POST | `/login` | User login | No |
| GET | `/logout` | User logout | No |
| GET | `/profile/:id` | Get user profile | Required |
| GET | `/otherusers/:id` | Get other users (excluding current user) | Required |
| POST | `/follow/:id` | Follow a user | Required |
| POST | `/unfollow/:id` | Unfollow a user | Required |

### Tweet Routes (`/api/v1/tweet`)

| Method | Endpoint | Description | Authentication |
|--------|----------|-------------|----------------|
| POST | `/createtweet` | Create a new tweet | Required |
| DELETE | `/delete/:id` | Delete a tweet | Required |
| PUT | `/like/:id` | Like or unlike a tweet | Required |
| PUT | `/bookmark/:id` | Bookmark or remove bookmark | Required |
| GET | `/getTweet/:id` | Get a specific tweet | Required |
| GET | `/getAllTweets` | Get all tweets (timeline) | Required |

## Key Features Explained

### Authentication Flow
1. User registers with email and password
2. Password is hashed using bcrypt
3. Upon login, JWT token is generated and stored in HTTP-only cookie
4. Protected routes verify JWT token via middleware
5. Redux Toolkit manages authentication state across the application

### State Management
- **Redux Toolkit** - Simplified Redux logic with less boilerplate
- **Redux Persist** - Maintains user state across browser sessions
- **Slices** - Organized state management for users and tweets

### Tweet Interactions
- **Real-time Updates** - Immediate UI feedback on likes and bookmarks
- **Optimistic Updates** - UI updates before server confirmation for better UX
- **User-specific Actions** - Users can only delete their own tweets

## Security Features

- **JWT Authentication** - Secure token-based authentication system
- **HTTP-Only Cookies** - Protects against XSS attacks
- **Bcrypt Password Hashing** - Industry-standard encryption (10 salt rounds)
- **Protected API Routes** - Middleware verification on sensitive endpoints
- **CORS Configuration** - Controlled cross-origin resource sharing
- **Environment Variables** - Sensitive data stored securely

## Available Scripts

### Backend
| Command | Description |
|---------|-------------|
| `npm start` | Run production server |
| `npm run dev` | Run development server with nodemon |

### Frontend
| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint for code quality |


**Note:** This application is optimized for laptop and desktop screens. Mobile responsiveness is not currently supported.


## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For support, please open an issue in the GitHub repository or contact through the application.

## Acknowledgments

- Built with [React](https://reactjs.org/)
- Powered by [Express.js](https://expressjs.com/)
- Database by [MongoDB](https://www.mongodb.com/)
- State Management by [Redux Toolkit](https://redux-toolkit.js.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Deployed on [Vercel](https://vercel.com/)

---

**Built with 🚀 using MERN Stack**
