import React from 'react';
import './Landing.scss';

function Landing() {
  return(
    <div className='landing-body'>
      <header>
        <div className='container container-nav'>
          <div className='site-title'>
            <h1>Living The Social Life</h1>
            <p className='subtitle'>A blog exploring minimalism in life</p>
          </div>
          <nav>
            <ul>
              <li><a href='#' className='current-page'>Home</a></li>
              <li><a href='#' className='current-page'>About Me</a></li>
              <li><a href='#' className='current-page'>Recent Posts</a></li>
            </ul>
          </nav>
        </div>{/* nav container  */}
      </header>
    </div>
  )
}

export default Landing;