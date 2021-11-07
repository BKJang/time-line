import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function Flicking({ videos, images }) {
  return (
    <>
      {videos && (
        <div style={{ height: "300px", maxWidth: "580px" }}>
          <Carousel showStatus={false}>
            {videos.map((video, index) => {
              return (
                <div key={`${video}-${index}`}>
                  <iframe
                    title={`${index}-video`}
                    width="100%"
                    height="250"
                    src={video}
                    frameBorder="0"
                    allowFullScreen="allowfullscreen"
                  ></iframe>
                </div>
              );
            })}
          </Carousel>
        </div>
      )}
      {images &&
        images.map((image, index) => {
          return (
            <div key={`${image}-${index}`}>
              <div>
                <img src={image} alt={`${image}-${index}`} />
              </div>
            </div>
          );
        })}
    </>
  );
}

export default Flicking;
