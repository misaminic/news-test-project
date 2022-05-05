import React from 'react';

const ArticleImage = ({ imageUrl }) => {
  return (
    <figure>
      <picture>
        <img src={`${imageUrl}&height=300`} alt="description" />
      </picture>
    </figure>
  );
};

export default ArticleImage;
