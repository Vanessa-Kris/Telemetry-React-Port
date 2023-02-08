import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import Navbar from './Layout/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Help from './Pages/Help';
import Support from "./Pages/Support";

export default function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navbar />}>
                    <Route path="Help" element={<Help />}/>
                    <Route path="Support" element={<Support/>}/>
                </Route>
            </Routes>
        </BrowserRouter> 
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);