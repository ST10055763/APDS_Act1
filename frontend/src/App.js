// import logo from './logo.svg';
import './App.css';
import React from "react";
// we use route in order to define the routes of our application
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// we import all the components we need for our app
import Navbar from "./components/navbar";
import PostList from "./components/postList";
import EditPost from "./components/postEdit";
import CreatePost from "./components/postCreate";
import Register from "./components/register";
import Login from "./components/login";

const App = () => {
  return(
    // <Router>
    <nav>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<PostList />} />
        <Route exact path="/edit/:id" element={<EditPost />} />
        <Route exact path="/create" element={<CreatePost />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
      </Routes></nav>
    // </Router>
  );
};

/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          /* Edit <code>src/App.js</code> and save to reload. 
          Welcome to APDS
        </p>
        <a
          /* className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer" 
        >
          We are using React for the Frontend.
        </a>
      </header>
    </div>
  );
} */

export default App;