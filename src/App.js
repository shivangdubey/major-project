import React, {useState} from "react";
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import Navbar from "./components/navbar";
import Blocks from "./src/blocks";
import Console from "./src/console";

import "./css/background.css";
import "./index.css";

export const UserContext = React.createContext("");

const App = () => {
    const [json, setJson] = useState("");
    const [javascriptCode, setJavascriptCode] = useState("");
    const [pythonCode, setPythonCode] = useState("");

    return (
        <Router>
            <div className="paper-background">
                <UserContext.Provider
                    value={{json, setJson, javascriptCode, setJavascriptCode, pythonCode, setPythonCode}}>
                    <Navbar/>
                    <div
                        className="mainBody"
                        style={{marginTop: "55px", height: "calc(100vh - 55px)"}}
                    >
                        <Routes>
                            <Route path="/" element={<Navigate to="/blocks"/>}/>
                            <Route path="/blocks" element={<Blocks/>}/>
                            <Route path="/console" element={<Console/>}/>
                        </Routes>
                    </div>
                </UserContext.Provider>
            </div>
        </Router>
    );
};

export default App;
