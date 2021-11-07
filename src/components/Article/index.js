import React from "react";

import Flicking from "../Flicking";

function Article({ date, description, path, imageType, images, videos }) {
  console.log(images);
  return (
    <article>
      {(videos || images) && (
        <Flicking
          images={images}
          path={path}
          imageType={imageType}
          videos={videos}
        />
      )}
      {/* <h3>{date}</h3>
      <p>{description}</p> */}
    </article>
  );
}

export default Article;
