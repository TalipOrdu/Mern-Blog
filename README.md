# Mern-Blog App
I made a Mern Blog page using with MongoDB, Express.js, React.js, Node.js.

## [DEMO LINK](https://mern-blog-78gw.onrender.com/)
![ss2](https://github.com/user-attachments/assets/31b7dffd-8e75-45e1-8ce1-66d36e262219)
![ss3](https://github.com/user-attachments/assets/a092b5de-9178-4d21-a4c9-5c3e72f01701)

# Key Features:
User Authentication: Sign up, login, and Google OAuth.
Role-Based Access Control: Admin privileges for creating, editing, and deleting posts.
Post Management: Full CRUD functionality for blog posts.
Dark Mode: Toggle between light and dark themes.
Image Upload: Firebase storage integration for profile and post images.
Responsive Design: Built using React and Tailwind CSS for modern UI/UX.
Dashboard: Admin and user dashboards for managing content.

#Installation Guide:
To run this project locally, follow these steps:

# 1. Clone the repository:
   git clone https://github.com/TalipOrdu/Mern-Blog.git
   cd Mern-Blog
# Install frontend dependencies
cd client
npm install
# Install backend dependencies
cd ../server
npm install

# Set Up Environment Variables
MONGO_URI=your_mongo_db_connection_string
JWT_SECRET=your_jwt_secret
FIREBASE_API_KEY=your_firebase_api_key
FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
FIREBASE_PROJECT_ID=your_firebase_project_id

# Start frontend server
npm start
# Start backend server
cd ../server
npm start

#What You Can Do

#Users:
Sign up and log in to the platform.
Create, read, edit, and delete blog posts.
Customize their profile and upload a profile picture.
Toggle between light and dark modes.
#Admins:
Manage all user-generated content.
Create, edit, and delete posts made by any user.
Access the admin dashboard for enhanced management features.
