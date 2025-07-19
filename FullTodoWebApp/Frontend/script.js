const BASE_URL = "http://localhost:3000";

function signup() {
  const username = document.getElementById("signup-username").value;
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  axios.post(`${BASE_URL}/auth/signup`, {
    username,
    email,
    password,
  })
    .then((res) => {
      alert(res.data.message || "SignUp Successful");
    })
    .catch((err) => {
      alert(err.response?.data?.message || "SignUp Failed");
    });
}

function login() {
  const email = document.getElementById("login-email").value; // ✅ fixed typo here
  const password = document.getElementById("login-password").value;

  axios.post(`${BASE_URL}/auth/login`, {
    email,
    password,
  })
    .then((res) => {
      const token = res.data.token;
      localStorage.setItem("token", token);

      document.getElementById("auth-section").style.display = "none";
      document.getElementById("todo-section").style.display = "block";

      fetchTodos(); // ✅ fixed typo here too (was fetchTodos written as fetchtodos before in your older message)
    })
    .catch((err) => {
      alert(err.response?.data?.message || "Login Failed"); // ✅ fixed err.res to err.response
    });
}

function addTodo() {
  const description = document.getElementById("todo-input").value;
  const token = localStorage.getItem("token");

  axios.post(`${BASE_URL}/api/todo`, {
    description,
  }, {
    headers: {
      token: token,
    },
  })
    .then((res) => {
      alert(res.data.message || "Todo added");
      document.getElementById("todo-input").value = "";
      fetchTodos();
    })
    .catch((err) => {
      alert("Failed to add todo");
    });
}

function fetchTodos() {
  const token = localStorage.getItem("token");

  axios.get(`${BASE_URL}/api/todos`, {
    headers: {
      token: token,
    },
  })
    .then((res) => {
      const todos = res.data.todos;
      const list = document.getElementById("todo-list");
      list.innerHTML = "";

      todos.forEach((todo) => {
        const li = document.createElement("li");
        li.textContent = todo.description + (todo.status ? " ✅" : "");
        list.appendChild(li);
      });
    })
    .catch((err) => {
      alert("Failed to fetch todos");
    });
}

function logout() {
  localStorage.removeItem("token");
  document.getElementById("auth-section").style.display = "block";
  document.getElementById("todo-section").style.display = "none";
}
