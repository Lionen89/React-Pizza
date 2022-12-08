import React from 'react';
import ContentLoader from 'react-content-loader';

function PizzaLoadingBlock(props) {
  return (
    <ContentLoader
      speed={2}
      width={280}
      height={467}
      viewBox="0 0 280 467"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}>
      <circle cx="138" cy="138" r="120" />
      <rect x="0" y="285" rx="6" ry="6" width="280" height="24" />
      <rect x="0" y="323" rx="6" ry="6" width="280" height="84" />
      <rect x="2" y="427" rx="6" ry="6" width="75" height="30" />
      <rect x="95" y="420" rx="22" ry="22" width="180" height="44" />
    </ContentLoader>
  );
}

export default PizzaLoadingBlock;
