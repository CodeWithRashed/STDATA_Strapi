import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import BlogsPage from "./pages/BlogsPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <HomePage />}></Route>
        <Route path="blogs" element={  <BlogsPage />}></Route>
        <Route path="blog/:id" element={  <BlogPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
