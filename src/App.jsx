import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import PostData from "./components/PostData/PostData";
import Login from "./components/loginError/Login";
import PostList from "./components/PostList/PostList";
import Footer from "./components/Footer/Footer";

function App() {
  const [user, setUser] = useState(null);
  return (
    <>
      <div className="mainContent">
        <Navbar user={user} setUser={setUser} />
        <hr />
        {user ? <PostData user={user} /> : <Login />}
        <hr />
        <div className="postList">
          <PostList />
        </div>
        <hr />
        <div className="footer">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
