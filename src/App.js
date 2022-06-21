import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Movie from './Pages/Movie';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="movie" element={<Movie />} />
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
