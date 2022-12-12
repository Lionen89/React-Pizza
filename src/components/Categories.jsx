import React from 'react';
import PropTypes from 'prop-types';

const Categories = React.memo(function Categories({ activeCategory, items, onClickItem }) {
  const onSelectItem = (item) => {
    onClickItem(item);
  };

  return (
    <div className="categories">
      <ul>
        <li
          onClick={() => {
            onSelectItem(null);
          }}
          className={activeCategory === null ? 'active' : ''}>
          Все
        </li>
        {items &&
          items.map((name, index) => (
            <li
              onClick={() => {
                onSelectItem(index);
              }}
              key={`${name}_${index}`}
              className={activeCategory === index ? 'active' : ''}>
              {name}
            </li>
          ))}
      </ul>
    </div>
  );
});

Categories.propTypes = {
  // activeCategory: PropTypes.number,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickItem: PropTypes.func,
};

Categories.defaultProps = {
  activeCategory: null,
  items: [],
};

export default Categories;
