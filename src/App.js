import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components';
import { Cart, Home } from './components/pages';
import { useDispatch } from 'react-redux';
import { fetchPizzas, setPizzas } from './redux/actions/pizzas';

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchPizzas());
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
