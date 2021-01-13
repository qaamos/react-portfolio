import React from "react"

function About(props) {
  return (
    <div>
      <h1>About me</h1>

      <ul id="aboutsections">

      <div class="section">
      <h2>General</h2>
      <div class="textbox">
      My name is Aamos Riihinen. I was born in the city of Jyväskylä, Finland,
      and although I have since moved to Tampere in pursuit of studies my heart
      will always remain in Central Finland. <br></br><br></br>
      I'm a calm and easy-going person who doesn't stress too much about things.
      Although I enjoy solitude, I get along well with all kinds of people.
      I'm observant and I have a good eye for details.<br></br><br></br>
      I'm a practical person who enjoys finding creative solutions to problems. New challenges and
      experiences excite me: I like using my skills and knowledge to achieve results.
      Unfamiliar and sudden situations don't bother me, and I perform well under
      pressure.
      </div>
      </div>

      <div class="section">
      <h2>Education</h2>
      <div class="textbox">
      I graduated upper secondary school from Jyväskylän normaalikoulun lukio in 2017.
      <br></br><br></br>I started my information technology studies in Tampere University (previously Tampere
      University of Technology) in 2018. I'm currently working on my bachelor's degree, after which
      I will move on to a master's degree.<br></br>
      I'm majoring in software engineering and minoring in industrial management.
      </div>
      </div>

      <div class="section">
      <h2>Work experience</h2>
      <div class="textbox">
      2020<br></br>Postal delivery worker at Posti Palvelut Oy
      <br></br><br></br>

      2017-2018<br></br>Laboratory assistant at University of
      Jyväskylä (civilian service)<br></br><br></br>

      2013<br></br>Work experience training at computer store
      Kampus Data (Multitronic)
      <br></br><br></br>

      2012<br></br>Work experience training at Jyväskylä Main Library
      <br></br><br></br>
      2011<br></br>Work experience training at pet store Faunatar
      </div>
      </div>

      <div class="section">
      <h2>Skills and interests</h2>
      <div class="textbox">

      I have proficient programming skills in Python, C++ and JavaScript.
      I'm familiar with full stack web development using Node.js and React.
      I can make graphical user interfaces (Qt). I'm familiar with GNU/Linux and
      all major operating systems. I can use Git version control in individual
      and multiple-user project arrangements.
      <br></br><br></br>
      Some of my interests include: technology, cars, video games, investing.

      </div>
      </div>

      </ul>

    </div>
  )
}

export default About;
