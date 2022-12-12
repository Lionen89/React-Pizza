import React from 'react';
import { Categories, SortPopup, PizzaBlock, PizzaLoadingBlock } from '../../components';
import { useSelector, useDispatch } from 'react-redux';
import { setCategiry, setSortBy } from '../../redux/actions/filters';
import { fetchPizzas } from '../../redux/actions/pizzas';
const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [
  { name: 'популярности', type: 'popular' },
  { name: 'цене', type: 'price' },
  { name: 'алфавиту', type: 'name' },
];

function Home() {
  const dispatch = useDispatch();

  const items = useSelector(({ pizzas }) => pizzas.items);
  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategiry(index));
  }, []);

  const onChangeSortType = React.useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);

  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);

  React.useEffect(() => {
    dispatch(fetchPizzas(category, sortBy));
  }, [category, sortBy]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={category}
          onClickItem={onSelectCategory}
          items={categoryNames}
        />
        <SortPopup activeSortType={sortBy} items={sortItems} onChangeSortType={onChangeSortType} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? items.map((obj) => <PizzaBlock {...obj} key={obj.id} />)
          : Array(12)
              .fill(0)
              .map((_, index) => <PizzaLoadingBlock key={index} />)}
      </div>
    </div>
  );
}

export default Home;
