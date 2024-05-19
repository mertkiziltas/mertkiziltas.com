import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Blog from "./pages/Blog";
import Post from "./pages/Post";
import Search from "./pages/Search";
import TestPage from "./pages/test";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/Admin" element={<Admin></Admin>}></Route>
        <Route path="/Blog" element={<Blog></Blog>}></Route>
        <Route path="/test" element={<TestPage></TestPage>}></Route>
        <Route path="/Blog/Search/:search" element={<Search></Search>}></Route>
        <Route path="/Blog/Post/:id" element={<Post></Post>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
