import { combineReducers } from 'redux';
import filterRuducer from './filters';
import pizzasRuducer from './pizzas';

const rootReducer = combineReducers({
  filter: filterRuducer,
  pizzas: pizzasRuducer,
});

export default rootReducer;
