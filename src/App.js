import logo from './logo.svg';
import Users from "./components/Users";
import './App.css';
import {useEffect, useState} from "react";
import Posts from "./components/Posts";
import Comments from "./components/Comments";

function App() {






  return (
    <div className="App">
    <Users/>
        <hr/>
       <Posts/>
        <hr/>
<Comments/>
    </div>
  );
}

export default App;
