import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components';
import { Cart, Home } from './components/pages';
import axios from 'axios';
import { connect } from 'react-redux';
import store from './redux/store';
import { setPizzas } from './redux/actions/pizzas';

function App() {
  React.useEffect(() => {
    axios
      .get('http://localhost:3000/db.json')
      .then(({ data }) => store.dispatch(setPizzas(data.pizzas)));
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Home items={[]} />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    items: state.pizzas.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setPizzas: (items) => dispatch(setPizzas(items)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
