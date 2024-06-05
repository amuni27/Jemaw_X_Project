import {useState} from 'react'
import Home from "./page/Home.jsx";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from "./page/Login.jsx";


function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Router basename="/Jemaw_X_Project">
                <Routes>
                    <Route path="/" element={<Login/>}></Route>
                    <Route path="/home" element={<Home/>}></Route>
                </Routes>
            </Router>

        </>
    )
}

export default App
