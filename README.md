# 📋 Kanban Board MERN Stack Web App

A minimal kanban board web app made with MERN stack. Manage all your projects and tasks at one place.

Purpose of this project was to get more practice with MERN stack, creating a RESTFUL Api and backend with ExpressJs. Working with mongodb
to add CRUD functionalities to the application, and adding user authentication with JsonWebToken.

This repo contains the frontend of the app. Backend repo is [here.](https://github.com/scarface68/kanban-server)

### [🚀 View Demo](https://digital-kanban-board-react.vercel.app/home)

### 🧪 Features

- Create new boards, lists and card.
- Easily edit your boards, lists and cards.
- Responsive and minimal interface.
- User authentication using JWT.
- RESTFUL Api to interact with the server.
- Dark/Light theme.
- Password salting.
- Server side validation for data.

<details>
  <summary><h3>🌈Screenshots</h3></summary>
  
  ![alt text](https://imgur.com/WNHdOFY.png)
  ![alt text](https://imgur.com/z5GvyXL.png)
  ![alt text](https://imgur.com/XUYG21E.png)
  ![alt text](https://imgur.com/tqsljl2.png)
  
</details>

### 👨‍🎓 Tech Stack
- ReactJS
- Redux state management
- NodeJS
- ExpressJs framework
- MongoDB
- Mongoose
- React Router v6
- BcryptJs
- JsonWebToken
- Emotion (Styled Component)
- Axios to handle HTTP requests
- Helmetg HTTP headers
- HTML, CSS, JSX

## How to run the project locally

Clone the frontend

```bash
  git clone https://github.com/scarface68/kanban-client.git
```

Start the frontend server

```bash
  npm install
  npm start
```

Clone the backend

```bash
  git clone https://github.com/scarface68/kanban-server.git
```

Start the backend server

```bash
  npm install
  node app.js
```

Generate .env files for both client and server

In frontend add

```bash
  REACT_APP_BACKEND_URL=http://localhost:5000/
```

In backend add

```bash
  MONGODB_URI= add the url here
```