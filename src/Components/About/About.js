import React from 'react';
import './About.scss';

function About() {
  return(
    <div className='landing-body'>
      <header>
        <div className='container container-flex'>
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

      <div className='container container-flex'>
        <main>

          <img src='https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80' alt='profile pic'/>

          <div>
            <h2 className='featured-title'>My name is John and living the simple life saved my life</h2>
            <p><strong>I used to be a pack rat.</strong> I had so many things that I thought that I loved, but the truth was I couldn't even appreciate any of it because there was too much.</p>
            <p>Things were terrible. I had a job that I hated, a home that I didn't want to live in, and I couldn't hold a relationship.</p>
          </div>

          <div>
            <h3>How I turned things around</h3>
            <p><strong>I was on the verge of a breakdown when I got rid of everything.</strong> I literally put 90% of my possessions in the garbage, sold my place and moved into a smaller apartment, and I quit my job.</p>
            <p>It wasn't easy at all, but everything around me was in such a bad place, I didn't know what else to do. And it worked.</p>
          </div>

          <div>
            <h3>Now I live the simple life</h3>
            <p>Now that I'm living a simple life, things are so much better. I'm less stressed, enjoy life and work more, and I have more free time to enjoy.</p>
            <p>With how much it turned my life around, <strong>I felt like I had no choice but to start sharing how I did it</strong>, and how others can benefit from living a simple life as well, which is why I started this site!</p>
          </div>

        </main>

        <aside className='sidebar'>

          <div className='sidebar-widget'>
           <h2 className='widget-title'>Recent Posts</h2>
           <div className='widget-recent-posts'>
             <h3 className='widget-recent-posts-title'>Keeping Cooking Simple</h3>
             <img className='widget-image' src='https://images.unsplash.com/photo-1496116218417-1a781b1c416c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80' alt='dumplings'/>
           </div>
           <div className='widget-recent-posts'>
             <h3 className='widget-recent-posts-title'>Simplicity and Work</h3>
             <img className='widget-image' src='https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80' alt='desk'/>
           </div>
           <div className='widget-recent-posts'>
             <h3 className='widget-recent-posts-title'>Simple Decorations</h3>
             <img className='widget-image' src='https://images.unsplash.com/photo-1557337996-6785a501a815?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80' alt='desk plant'/>
           </div>
          </div>
        </aside>

      </div>

      <footer>
        <p><strong>Living The Simple Life</strong></p>
        <p>Copyright 2019</p>
      </footer>

    </div>
  )
}

export default About;