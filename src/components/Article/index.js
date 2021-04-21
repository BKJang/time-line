import React from 'react';

function Article({ title, description, imgLink, video }) {
  return (
    <article>
      <h3>{title}</h3>
      <p>{description}</p>
      {imgLink && <img src={imgLink} alt={`${title}-img`} />}
      {video && (
        <iframe
          title={`${title}-video`}
          width="100%"
          height="250"
          src={video}
          frameBorder="0"
          allowFullScreen="allowfullscreen"
        >
        </iframe>
      )}


    </article >
  );
}

export default Article;
