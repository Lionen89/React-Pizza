import React from 'react';

const Categories = React.memo(function Categories({ items, onClickItem }) {
  const [activeItem, setActiveItem] = React.useState(null);

  const onSelectItem = (item) => {
    setActiveItem(item);
    onClickItem(item);
  };

  return (
    <div className="categories">
      <ul>
        <li
          onClick={() => {
            onSelectItem(null);
          }}
          className={activeItem === null ? 'active' : ''}>
          Все
        </li>
        {items &&
          items.map((name, index) => (
            <li
              onClick={() => {
                onSelectItem(index);
              }}
              key={`${name}_${index}`}
              className={activeItem === index ? 'active' : ''}>
              {name}
            </li>
          ))}
      </ul>
    </div>
  );
});

export default Categories;
