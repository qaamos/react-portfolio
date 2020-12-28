import React from "react"
import cvkuva from './cvkuva.jpg';

function Info(props) {
  return (
    <div>
      <h1>Info</h1>
      <img src={cvkuva} alt="me :)" id="cvkuva" />

      <div id="infobox">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi est est,
      consectetur a dapibus ut, lobortis non eros. Nunc vulputate ac dui eget
      eleifend. Suspendisse a posuere risus. Cras tincidunt, velit at porttitor
      suscipit, ex nunc tristique leo, commodo maximus mi nisl ac leo.
      Suspendisse vitae mauris et magna pharetra aliquet. Phasellus dignissim
      viverra nibh non ultrices. Ut a tortor sit amet diam auctor blandit. Ut
      pellentesque massa et volutpat pulvinar.
      </div>

    </div>
  )
}

export default Info;
