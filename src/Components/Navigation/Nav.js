import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import '../Landing/Landing.scss';

function Nav() {
  return(
      <header>
        <div className='container container-flex'>
          <div className='site-title'>
            <h1>Living The Social Life</h1>
            <p className='subtitle'>A blog exploring minimalism in life</p>
          </div>
          <nav>
            <ul>
              <Link to="section1" smooth={true} offset={-190} duration={1000}>
                <li><a href='#' className='current-page'>Home</a></li>
              </Link>
              <Link to="section2" smooth={true} offset={-150} duration={1000}>
                <li><a href='#' className='current-page'>About Me</a></li>
              </Link>
              <Link to="section3" smooth={true} offset={-150} duration={1000}>
                <li><a href='#' className='current-page'>Recent Posts</a></li>
              </Link>
            </ul>
          </nav>
        </div>{/* nav container  */}
      </header>
  )
}

export default Nav;