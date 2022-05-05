import React from 'react';

const SingleArticle = ({
  tempElementId,
  imageUrl,
  url,
  title,
  width,
  rowIndex,
  articleIndex,
  changeTitle,
  handleEdit,
}) => {
  return (
    <article key={articleIndex} className={`col-${width} `}>
      {tempElementId === `${rowIndex}-${articleIndex}` ? (
        <>
          <form className="form-control">
            <input
              type="text"
              placeholder="Set title"
              onChange={(e) => changeTitle(e)}
            />
          </form>
          <figure>
            <picture>
              <img
                src={`${imageUrl}${width < 5 ? '&height=300' : '&height=300'}`}
                alt="description"
              />
            </picture>
          </figure>
        </>
      ) : (
        <>
          <a href={`${url}`} target="_blank" rel="noreferrer">
            <h3>{title}</h3>
            <figure>
              <picture>
                <img
                  src={`${imageUrl}${
                    width < 5 ? '&height=300' : '&height=300'
                  }`}
                  alt="description"
                />
              </picture>
            </figure>
          </a>
        </>
      )}

      <button
        id={`${rowIndex}-${articleIndex}`}
        onClick={(e) => handleEdit(e, rowIndex, articleIndex)}
      >
        Edit
      </button>
    </article>
  );
};

export default SingleArticle;
