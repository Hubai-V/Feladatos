import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import BookSearch from "./pages/BookSearch";
import MovieSearch from "./pages/MovieSearch";

export default function App() {
  return (
    <Router>
      <nav className="p-4 bg-gray-200 flex gap-4">
        <Link to="/">Nyitólap</Link>
        <Link to="/books">Könyv kereső</Link>
        <Link to="/movies">Film kereső</Link>
      </nav>

      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<BookSearch />} />
          <Route path="/movies" element={<MovieSearch />} />
        </Routes>
      </div>
    </Router>
  );
}
