import React from 'react';

import './Home.scss';

class Home extends React.Component {
  render() {
    return (
      // eslint-disable max-len
      <div className="Home">
        <div id='biocard' className='card d-flex flex-wrap align-center col-7'>
        <h2>Austin Casey's Personal Bio Site</h2>
        <img className='card-img-top' src='https://imgur.com/ZvYNnXi.jpg' alt='Austin Casey'/>
        <p id='biotxt'>Bio:
          I've always had an affinity for computers, and even more so for games.
          While my dream is to ultimately ascend to game development, I'm savvy
          enough to realize that it isn't realistic to attempt to do so without
          extensive experience in other forms of software development. So, here
          I am. In truth, software development isn't just a means to an end;
          I receive legitimate satisfaction from coding, something I can't say
          about any other career work I've considered in the past. There's
          something exquisitely fulfilling about piecing together a complex
          web of functions and objects to construct a final product. The freedom that
          coding gives an individual to achieve an end product is unlike any other work I've
          explored.

          I believe my greatest strengths as a developer lie in my ability to learn
          from experience and my problem-solving skills; no error is without a solution, and each
          mistake is a lesson. I may not be the most social person, but I work well in a
          group, and am more than willing to, and capable of assisting colleagues with
          concepts they are struggling to grasp or bugs they cannot squash (real AND
          digital!).
        </p>
        </div>
        <div id='experience' className='card d-flex flex-wrap align-center col-7'>
        <h2>Programs, tools, and other technologies that I have experience in:</h2>
        <div id='tech' className='card-text'>
        <ul>
          <li>Javascript</li>
          <li>React</li>
          <li>HTML5</li>
          <li>Github</li>
          <li>VS Code</li>
          <li>Bootstrap 4</li>
          <li>Firebase</li>
          <li>eslint</li>
          <li>RPG Maker VX Ace</li>
          <li>Gamebyro (Bethesda Game Studios Engine)</li>
          <li>Sony Vegas Pro 11 & 13</li>
        </ul>
        </div>
        </div>
        <div id='projects' className='card d-flex flex-wrap align-center col-7'>
          <div className='card-header'>
          <h2>Some projects that I'm proud of</h2>
          </div>
          <div className='card-text'>
        <ul>
          <li><a href='https://walnut-fe6c5.firebaseapp.com/'>Firebase Group Project</a>
            <p>On this particular group project, I was responsible for the Username and
              "Diary" functionality, in which full CRUD is implemented.
            </p>
          </li>
          <li><a href='https://chatty-proj.firebaseapp.com/'>Chatroom Group Project</a>
          <p>Another group project. I was responsible for the "chatbot", the clear
            message functionality, and the navBar.
            </p>
          </li>
          <li><a href='https://sandwich-maker-24291.firebaseapp.com/'>Sandwich Maker</a>
          <p>This project showcases my ability to use basic vanilla Javascript, and
            print to the DOM.
            </p>
          </li>
          <li><a href='https://fish-store-55093.firebaseapp.com/'>Fish Store</a>
          <p>This project displays my ability to properly utilize firebase for
            full CRUD, in addition to basic React.
            </p>
          </li>
        </ul>
        </div>
        </div>
        <div id='contact' className='card d-flex flex-wrap align-center col-4'>
          <div className='card-header'>
            <h3>Contact Me</h3>
          </div>
          <p>Email: austinhcasey@gmail.com</p>
          <p>Linkedin: <a href='https://www.linkedin.com/in/austin-casey-49a863174'>https://www.linkedin.com/in/austin-casey-49a863174/</a></p>
          <p>GitHub Profile: <a href='https://github.com/acasey98'>https://github.com/acasey98</a></p>
        </div>
      </div>
    );
  }
}

export default Home;
