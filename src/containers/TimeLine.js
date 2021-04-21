
import React, { Fragment } from 'react';

import Article from '../components/Article';

import { ARTICLE_LIST_LEFT, ARTICLE_LIST_RIGHT } from './constants';

function TimeLine() {
  return (
    <main>
      <h1>Events</h1>
      <section>
        <h2>2 December</h2>
        <div class="grid-wrapper">
          {ARTICLE_LIST_LEFT?.map(item => {
            return (
              <Fragment key={item.title}
              >
                <Article
                  title={item.title}
                  description={item.description}
                  imgLink={item.imgLink}
                  video={item.video}
                />
              </Fragment>
            )
          })}

        </div>
      </section>
      <section>
        <h2>3 Jan</h2>
        <div class="grid-wrapper">
          {ARTICLE_LIST_RIGHT?.map(item => {
            return (
              <Fragment key={item.title}
              >
                <Article
                  title={item.title}
                  description={item.description}
                  imgLink={item.imgLink}
                  video={item.video}
                />
              </Fragment>
            )
          })}
        </div>
      </section>
      {/* <p class="footer-note">Design by <a href="https://dribbble.com/shots/8576480-Book-Festival-Responsive-Website">tubik</a></p> */}
    </main>
  );
}

export default TimeLine;