import React from "react";

import Flicking from "../Flicking";

function Article({ date, description, images, videos }) {
  console.log("afadf", videos);
  return (
    <article>
      {(videos || images) && <Flicking images={images} videos={videos} />}
      {/* <h3>{date}</h3>
      <p>{description}</p> */}
    </article>
  );
}

export default Article;
