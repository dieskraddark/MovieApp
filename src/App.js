import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/home/Home';
import Moviedetail from './components/moviedetail/Moviedetail';
import Pagenotfound from './components/pageNotFound/Pagenotfound';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header></Header>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:imdbID" element={<Moviedetail />} />
            <Route path='*' element={<Pagenotfound />} />
          </Routes>
        </div>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
