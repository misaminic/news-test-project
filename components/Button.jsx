import React from 'react';

const Button = ({
  rowIndex,
  articleIndex,
  handleEdit,
  save,
  edit,
  tempElementId,
}) => {
  return (
    <button
      id={`${rowIndex}-${articleIndex}`}
      onClick={(e) => handleEdit(e, rowIndex, articleIndex)}
    >
      {tempElementId === `${rowIndex}-${articleIndex}` ? save : edit}
    </button>
  );
};

export default Button;
