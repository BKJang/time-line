import React from 'react';

import Flicking from '../Flicking';

function Article({ date, description, imgLink, videos }) {
  console.log('afadf', videos)
  return (
    <article>
      {videos && (
        <Flicking videos={videos} />
      )}
      <h3>{date}</h3>
      <p>{description}</p>
    </article >
  );
}

export default Article;
