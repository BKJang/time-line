
import React, { Fragment } from 'react';

import Article from '../components/Article';

import { DANGJIN_1 } from './constants';

function Dangjin1() {
  return (
    <main>
      <h1>2021타경51698</h1>
      {DANGJIN_1?.map(item => {
        return (
          <Fragment key={`${item.mainTitle}`}
          >
            <section>
              <h2>{item.mainTitle}</h2>
              <div className="grid-wrapper">
                <Article
                  date={item.dateStr}
                  description={item.description}
                  images={item.images}
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

export default Dangjin1;