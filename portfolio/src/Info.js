import React from "react"
import cvkuva from './cvkuva.jpg';

function Info(props) {
  return (
    <div>
      <h1>Welcome to my home page!</h1>
      <img src={cvkuva} alt="me :)" id="cvkuva" />

      <div id="infobox">
      Hello!
      <br></br><br></br>
      My name is Aamos Riihinen. I am a university student living in Tampere,
      Finland. I study information technology at Tampere University.
      <br></br><br></br>
      This is my home page. At the moment it functions as
      an online résumé of sorts. Other features might appear in the future.
      Enjoy your stay!
      <br></br><br></br>
      - Aamos
      </div>

    </div>
  )
}

export default Info;
