import './App.css';
import { Routes, Route } from 'react-router-dom';
import Card from './Pages/card';
import Detail from './Pages/detail';
import Cart from './Pages/cart';
import TopNavbar from './Components/topNavbar';
import NotExistPage from './Pages/notExistPage';

function App() {
  return (
    <div className="App">
      <TopNavbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Card></Card>}></Route>
          <Route path="/detail/:id" element={<Detail></Detail>}></Route>
          <Route path="/cart" element={<Cart></Cart>}></Route>
          <Route path="*" element={<NotExistPage></NotExistPage>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
