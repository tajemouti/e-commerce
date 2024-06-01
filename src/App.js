import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/men" element={<ShopCategory />} />
          <Route path="/women" element={<ShopCategory />} />
          <Route path="/kids" element={<ShopCategory />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
