import Auth from "./components/auth";
import MainHome from "./components/mainHome";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import ReactrouterHome from "./components/reactrouter";
import { Redirect } from "react-router-dom";
import { useContext } from "react";
function App() {
  let isTrue = false;
  const { user } = useContext(AuthContext);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={user ? <ReactrouterHome/>: <Auth />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/profile/:username" element={<MainHome />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
