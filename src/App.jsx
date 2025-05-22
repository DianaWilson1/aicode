import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Chat from './components/ChatScreen';
import Home from "./pages/Home";

function App() {



  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </Router>
  );
}

export default App;
