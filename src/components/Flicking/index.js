import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Flicking({ videos }) {
  return (
    <div style={{ height: '300px', maxWidth: '580px'}}>
      <Carousel showStatus={false}>
        {videos.map((video, index) => {
          return (
            <div
              key={`${video}-${index}`}
            >
              <iframe
                title={`${index}-video`}
                width="100%"
                height="250"
                src={video}
                frameBorder="0"
                allowFullScreen="allowfullscreen"
              >
              </iframe>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Flicking;