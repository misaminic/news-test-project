import React from 'react';
import Grid from '@mui/material/Grid';
import ArticleImage from './ArticleImage';
import Button from './Button';

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
  save,
  edit,
}) => {
  const titleCharacterLimit = 25;
  const buttonProps = { rowIndex, articleIndex, handleEdit, save, edit };

  return (
    <Grid key={articleIndex} item lg={width} md={12} sm={12} xs={12}>
      <article className={'article-card'}>
        {tempElementId === `${rowIndex}-${articleIndex}` ? (
          <>
            <form className="form-control">
              <input
                type="text"
                placeholder="Set title"
                onChange={(e) => changeTitle(e)}
              />
            </form>
            <ArticleImage imageUrl={imageUrl} />
          </>
        ) : (
          <>
            <a href={`${url}`} target="_blank" rel="noreferrer">
              <h3>
                {title.length > titleCharacterLimit
                  ? title.slice(0, 25) + '...'
                  : title}
              </h3>
              <ArticleImage imageUrl={imageUrl} />
            </a>
          </>
        )}
        <Button {...buttonProps} />
      </article>
    </Grid>
  );
};

export default SingleArticle;
