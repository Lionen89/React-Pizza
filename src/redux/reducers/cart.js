const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};
const getTotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0);
const getAllPizzas = (object) => {
  const items = Object.values(object).map((obj) => obj.items);
  return [].concat.apply([], items);
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TOTAL_PRICE':
      return {
        ...state,
        totalPrice: action.payload,
      };

    case 'SET_TOTAL_COUNT':
      return {
        ...state,
        totalCount: action.payload,
      };

    case 'ADD_PIZZA_CART': {
      const currentPizzaItems = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].items, action.payload];
      const newItems = {
        ...state.items,
        [action.payload.id]: {
          items: currentPizzaItems,
          totalPrice: getTotalPrice(currentPizzaItems),
        },
      };
      const totalPrice = getTotalPrice(getAllPizzas(newItems));
      return {
        ...state,
        items: newItems,
        totalCount: getAllPizzas(newItems).length,
        totalPrice,
      };
    }
    case 'CLEAR_CART': {
      return {
        items: {},
        totalPrice: 0,
        totalCount: 0,
      };
    }
    case 'REMOVE_CART_ITEM': {
      const newItems = structuredClone(state.items);
      const currentTotalPrice = newItems[action.payload].totalPrice;
      const currentTotalCount = newItems[action.payload].items.length;
      delete newItems[action.payload];
      return {
        ...state,
        items: newItems,
        totalPrice: state.totalPrice - currentTotalPrice,
        totalCount: state.totalCount - currentTotalCount,
      };
    }
    case 'PLUS_CART_ITEM': {
      const newObjItems = [
        ...state.items[action.payload].items,
        state.items[action.payload].items[0],
      ];
      const newItems = {
        ...state.items,
        [action.payload]: {
          items: newObjItems,
          totalPrice: getTotalPrice(newObjItems),
        },
      };

      const totalPrice = getTotalPrice(getAllPizzas(newItems));
      return {
        ...state,
        items: newItems,
        totalPrice,
        totalCount: getAllPizzas(newItems).length,
      };
    }
    case 'MINUS_CART_ITEM': {
      const oldItems = state.items[action.payload].items;
      const newObjItems =
        oldItems.length > 1 ? state.items[action.payload].items.slice(1) : oldItems;
      const newItems = {
        ...state.items,
        [action.payload]: {
          items: newObjItems,
          totalPrice: getTotalPrice(newObjItems),
        },
      };

      const totalPrice = getTotalPrice(getAllPizzas(newItems));

      return {
        ...state,
        items: newItems,
        totalCount: getAllPizzas(newItems).length,
        totalPrice,
      };
    }
    default:
      return state;
  }
};

export default cart;
