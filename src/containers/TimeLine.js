
import React, { Fragment } from 'react';

import Article from '../components/Article';

import { ARTICLE_LIST } from './constants';

function TimeLine() {
  return (
    <main>
      <h1>대제목(Main Title)</h1>
      {ARTICLE_LIST?.map(item => {
        return (
          <Fragment key={`${item.mainTitle}`}
          >
            <section>
              <h2>{item.mainTitle}</h2>
              <div className="grid-wrapper">
                <Article
                  date={item.dateStr}
                  description={item.description}
                  imgLink={item.imgLink}
                  videos={item.videos}
                />
              </div>
            </section>
          </Fragment>
        )
      })}
    </main>
  );
}

export default TimeLine;