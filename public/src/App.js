import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Chat from "./pages/Chat";
import SetAvatar from "./components/SetAvatar";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/Register" element={<Register />} />
                <Route path="/setavatar" element={<SetAvatar />} />
                <Route path="/" element={<Chat />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
