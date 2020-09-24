import React from 'react';
import '../Landing/Landing.scss';

function Posts() {
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

          <article className='article-recent'>
            <div className='article-recent-main'>
              <h2 className='article-title'>Finding simplicity in life</h2>
              <p className='article-body'>Life can get complicated really quickly, but it doesn't have to be! There are many ways to simplify your life, a few of which we've explored in the past.  This week we're taking a bit of a approach though, in how you can find simplicity in the life you already living.</p>
              <a className='article-read-more'>continue reading</a>
            </div>
            <div className='article-recent-secondary'>
              <img className='article-image' src ='https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80' alt='desk'/>
              <p className='article-info'>July 23, 2019 | 3 comments</p>
            </div>
          </article>

          <article className='article-recent'>
            <div className='article-recent-main'>
              <h2 className='article-title'>Keeping Cooking Simple</h2>
              <p className='article-body'>Food is a very important part of everyone's life. If you want to be healthy, you have to eat healthy. One of the easiest ways to do that is to keep your cooking nice and simple.</p>
              <a className='article-read-more'>continue reading</a>
            </div>
            <div className='article-recent-secondary'>
              <img className='article-image' src ='https://images.unsplash.com/photo-1496116218417-1a781b1c416c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80' alt='dumplings'/>
              <p className='article-info'>July 19, 2019 | 3 comments</p>
            </div>
          </article>

          <article className='article-recent'>
            <div className='article-recent-main'>
              <h2 className='article-title'>Simplicity and Work</h2>
              <p className='article-body'>Work is often a major source of stress. People get frustrated, it ruins their relationship with others and it leads to burnout. By keeping your work life as simple as possible, it will help balance everything out.</p>
              <a className='article-read-more'>continue reading</a>
            </div>
            <div className='article-recent-secondary'>
              <img className='article-image'  src ='https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80' alt='desk'/>
              <p className='article-info'>July 12, 2019 | 3 comments</p>
            </div>
          </article>
          
          <article className='article-recent'>
            <div className='article-recent-main'>
              <h2 className='article-title'>Simple Decorations </h2>
              <p className='article-body'>A home isn't a home until you've decorated a little. People either don't decorate, or they go overboard and it doesn't have the impact they were hoping for. Staying simple will help draw the eye where you want it to and make things pop like never before.</p>
              <a className='article-read-more'>continue reading</a>
            </div>
            <div className='article-recent-secondary'>
              <img className='article-image'  src ='https://images.unsplash.com/photo-1557337996-6785a501a815?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80' alt='desk plant'/>
              <p className='article-info'>July 3, 2019 | 3 comments</p>
            </div>
          </article>

        </main>

        <aside className='sidebar'>

          <div className='sidebar-widget'>
            <h2 className='widget-title'>About Me</h2>
            <img src='https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80' alt='profile pic'/>
            <p className='widget-body'>I find life better, and I'm happier, when things are nice and simple.</p>
          </div>

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

export default Posts;