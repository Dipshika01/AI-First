# Claude CRUD Wizard

This is a simple fullstack web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js).
It lets you create, read, update, and delete (CRUD) books.

## Features
- Add a book with title, author, genre, and published year
- View the list of all books
- Edit and update book details
- Delete a book from the list

## Technologies Used
- **Frontend:** React, CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB using Mongoose

## Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/your-username/claude-crud-wizard.git
cd claude-crud-wizard
```

### 2. Set up the backend
```bash
cd backend
npm install
```
Create a `.env` file inside the `backend/` folder:
```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/claude_crud_wizard
```
Start the backend server:
```bash
node server.js
```

### 3. Set up the frontend
```bash
cd ../frontend
npm install
npm start
```

## Folder Structure
```
ClaudeCrudWizard/
├── backend/
│   ├── models/
│   ├── routes/
│   └── server.js
├── frontend/
│   ├── src/
│   └── components/
└── .gitignore
```

## Notes
- No authentication is added.
- This app is designed as a simple demo to showcase fullstack functionality.

## License
Free to use for learning and showcasing AI-assisted development.