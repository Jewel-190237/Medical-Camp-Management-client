# MediCare - Medical Camp Management System

A comprehensive full-stack medical camp management system built with React.js, Node.js, Express.js, MongoDB, and Firebase. Features role-based access control for admin and users, secure payments, and camp management.

## Features

- **Camp Management:** Add, update, and delete medical camps
- **User Authentication:** Email/password and Google OAuth login
- **Role-Based Access:** Admin and user dashboards
- **Payment System:** Secure card payment integration
- **Search & Filter:** Find camps by name, location, and date
- **Responsive Design:** Mobile-friendly interface
- **JWT Authentication:** Secure API endpoints
- **Real-time Updates:** Dynamic content updates

## Live Demo

- **Frontend:** https://medical-camp-management-6978c.web.app/
- **Backend:** https://github.com/Jewel-190237/Medical-Camp-Management-server

## Admin Credentials

- **Email:** jewel@12.com
- **Password:** Jewel190237

## Technologies Used

### Frontend
- React.js
- Tailwind CSS
- Axios
- React Router
- Firebase Authentication

### Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication
- CORS

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB database
- Firebase project

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Jewel-190237/Medical-Camp-Management-client.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file with the following variables:
   ```env
   VITE_API_URL=your_backend_api_url
   VITE_FIREBASE_API_KEY=your_firebase_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and visit `http://localhost:5173`

## Project Structure

```
Medical-Camp-Management-client/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   ├── context/
│   ├── utils/
│   ├── App.jsx
│   └── main.jsx
├── .env
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## Functionality

### Camp Management (AddCamp)
- Private/protected routes for users to manage their medical details
- Add new camps with images, descriptions, and schedules

### Update/Delete Functionality
- Allows admin to update or delete camps
- Ensures database accuracy and camp management

### User Registration and Login
- User-friendly registration form with validation
- Login functionality with email/password
- Google OAuth integration for social login

### Search and Sort
- Facilitates easy navigation through medical camps
- Search by camp name, location, and date

### Payment Method
- Secure card payment methods
- Trust and reliability in transactions

### Confirmation System
- Users make payment first
- Admin confirms the transaction
- Final confirmation after admin approval

## Special Features

- **Multi-Dashboard Control:** Efficient camp oversight with separate admin and user dashboards
- **Secure Payments:** Payment system with booking, cancellation, and update functionality
- **JWT Authentication:** Secure private routes with JSON Web Tokens
- **Popular Camps:** Users can find popular camps by searching
- **Upgraded Confirmation:** Payment-first, then admin confirmation workflow

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `POST /api/auth/google` - Google OAuth login

### Camps
- `GET /api/camps` - Get all camps
- `GET /api/camps/:id` - Get single camp
- `POST /api/camps` - Create new camp (Admin)
- `PUT /api/camps/:id` - Update camp (Admin)
- `DELETE /api/camps/:id` - Delete camp (Admin)

### Payments
- `POST /api/payments` - Process payment
- `GET /api/payments` - Get payment history

### Users
- `GET /api/users` - Get all users (Admin)
- `PUT /api/users/:id` - Update user role (Admin)

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Contributing

Feel free to fork this project and create pull requests for any improvements.

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

**Jewel-190237**
- GitHub: [Jewel-190237](https://github.com/Jewel-190237)
- Email: jewel190237@gmail.com
