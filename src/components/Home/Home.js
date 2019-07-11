import React from 'react';

class Home extends React.Component {
  render() {
    return (
      // eslint-disable max-len
      <div className="Home">
        <h2>Austin Casey's Personal Bio Site</h2>
        <p>Bio:
          I've always had an affinity for computers.
        </p>
        <h2>Programs, tools, and other technologies that I have experience in:</h2>
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
        <h2>Some projects that I'm proud of:</h2>
        <ul>
          <li><a href='https://walnut-fe6c5.firebaseapp.com/'>Firebase Group Project</a></li>
          <li><a href='https://classtracker.zoeames.com/calendar'>Chatroom Group Project</a></li>
          <li><a href='https://classtracker.zoeames.com/calendar'>Sandwich Maker</a></li>
          <li><a href='https://classtracker.zoeames.com/calendar'>Fish Store</a></li>
        </ul>
        <h3>Contact Me</h3>
        <p>Email: austinhcasey@gmail.com</p>
        <p>Linkedin: <a href='https://www.linkedin.com/in/austin-casey-49a863174'>https://www.linkedin.com/in/austin-casey-49a863174/</a></p>
        <p>GitHub Profile: <a href='https://github.com/acasey98'>https://github.com/acasey98</a></p>
      </div>
    );
  }
}

export default Home;
