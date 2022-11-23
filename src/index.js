import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { App } from "./components/App";
import { Login } from './components/Login'
import { Register } from "./components/Register";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BrowserRouter>
    <Routes>
        <Route path="/" element={<App/>}>
            <Route path="login" element={<Login/>}/>
            <Route path="register" element={<Register/>}/>
        </Route>
    </Routes>
</BrowserRouter>);
