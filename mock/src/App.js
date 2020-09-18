import React from "react";
import "./App.css";
import BlogContainer from "./BlogContainer";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <a className="nav" href="https://kirschbaumdevelopment.com">
            Back To Kirschbaum Development
          </a>
          <img
            src="https://d11r87y54pwjy9.cloudfront.net/99fa9912-6d86-4bb0-9344-e5312f84611f/images/stack.svg"
            alt="pyramid"
          ></img>
        </div>
        <h1 className="title">Kirschbaum Developer Chronicles</h1>
        <h3 className="subtitle">
          <em>A day in the life of an aspiring developer</em>
        </h3>
        <BlogContainer />
      </div>
    </div>
  );
}

export default App;
