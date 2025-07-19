 
📝 Todo Web App
A full-stack Todo Web Application built with HTML, CSS, and JavaScript on the frontend and Node.js, Express, MongoDB on the backend.

🔧 Features
🔐 User Authentication (Sign up & Login)

✅ Add todos

❌ Delete todos

✏️ Mark todos as completed (coming soon!)

💾 All data saved securely in MongoDB

🔄 Real-time updates via API

🖥️ Responsive and user-friendly interface

📁 Project Structure
pgsql
Copy code
FullTodoWebApp/
├── Frontend/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── .gitignore
├── Backend/
│   ├── server.js
│   ├── models/
│   │   └── User.js
│   │   └── Todo.js
│   ├── routes/
│   │   └── auth.js
│   │   └── todos.js
│   └── .gitignore
🚀 Getting Started
Prerequisites
Node.js & npm

MongoDB running locally or MongoDB Atlas

Backend Setup
bash
Copy code
cd FullTodoWebApp/Backend
npm install
node server.js
Frontend Setup
Just open index.html in your browser
(Or run with Live Server if using VS Code)

🔗 API Endpoints
Method	Route	Description
POST	/signup	Register new user
POST	/login	Login user
GET	/todos	Get all todos
POST	/todos	Add new todo
DELETE	/todos/:id	Delete a todo

📷 Screenshot
(You can add an image of your app UI here if you want)

markdown
Copy code
![Todo Web App](./screenshot.png)
💡 Future Improvements
Add Edit functionality

Add categories/tags to todos

Add due dates/reminders

Enable dark mode

🧑‍💻 Author
Ashish Joshi