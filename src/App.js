import React from 'react'
import './App.css';

const App = () => {
  let endPointX, endPointY

  const move = (e) => {
    const cuttingArea = document.getElementById("cutting-area");

    document.getElementById("coordinate-x").innerText = e.clientX
    document.getElementById("coordinate-y").innerText = e.clientY

    if((e.clientY <= cuttingArea.getBoundingClientRect().top || e.clientY >= (cuttingArea.getBoundingClientRect().top+cuttingArea.clientHeight)))
    // if((e.clientX <= cuttingArea.getBoundingClientRect().left || e.clientX >= (cuttingArea.getBoundingClientRect().left+cuttingArea.clientWidth)) ||
    //   (e.clientY <= cuttingArea.getBoundingClientRect().top || e.clientY >= (cuttingArea.getBoundingClientRect().top+cuttingArea.clientHeight)))
        // if((e.clientY <= cuttingArea.getBoundingClientRect().top || e.clientY >= (cuttingArea.getBoundingClientRect().top+cuttingArea.clientHeight)))
    {      
      console.log(false)
      endPointX = null;
      // endPointY = null;
    }
    else
    {
      console.log(true)
    }

    if(endPointX === null && (e.clientX === cuttingArea.getBoundingClientRect().left || e.clientX <= (cuttingArea.getBoundingClientRect().left + (cuttingArea.clientWidth) / 4)))
    {
      console.log(cuttingArea.getBoundingClientRect().left + (cuttingArea.clientWidth) / 4)
      endPointX = cuttingArea.getBoundingClientRect().left+cuttingArea.clientWidth;
      console.log("End Point: " + endPointX);
    }
    else if(endPointX === null && (e.clientX === (cuttingArea.getBoundingClientRect().left+cuttingArea.clientWidth) || e.clientX >= (cuttingArea.getBoundingClientRect().left + (cuttingArea.clientWidth) * 3 / 4)))
    {
      console.log((cuttingArea.getBoundingClientRect().left) + (cuttingArea.clientWidth) * 3 / 4)
      endPointX = cuttingArea.getBoundingClientRect().left;
      console.log("End Point: " + endPointX);
    }

    if(endPointX === e.clientX)
    {
      document.getElementById("cutting-result").innerText = "true";
    }
  }
  
  const add = () => {
    endPointX = null;
    endPointY = null;
    document.getElementById("cutting-result").innerText = "false";
    document.getElementById("chopping-board").addEventListener('mousemove',move)
    document.getElementById("cutting-area").addEventListener('mousemove',move)
  }

  const remove = () => {
    document.getElementById("chopping-board").removeEventListener('mousemove',move);
    document.getElementById("cutting-area").removeEventListener('mousemove',move);
  }

  return (
    <>
      <div id="chopping-board" onMouseDown={add} onMouseUp={remove}>
        <div id="cutting-area"></div>
      </div>
      <label>Coordinate:</label>
      <label>(X):</label>
      <label id="coordinate-x"></label>
      &nbsp;
      <label>(Y):</label>
      <label id="coordinate-y"></label><br/>
      <label>Sliced: <span id="cutting-result">false</span></label>
    </>
  );
}

export default App;
