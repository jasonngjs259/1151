import React, {useEffect} from 'react'
import './App.css';



const App = () => {
  let offsetX, offsetY
  let startPointX, startPointY, endPointX, endPointY

  useEffect(() => {
    const move = (e) => {
      const el = e.target
      const cuttingArea = document.getElementById("cutting-area");
      el.style.left = `${e.pageX - offsetX}px`
      el.style.top = `${e.pageY - offsetY}px`
      document.getElementById("coordinate-x").innerText = e.clientX
      document.getElementById("coordinate-y").innerText = e.clientY
      // document.getElementById("coordinate-x").innerText = el.style.left
      // document.getElementById("coordinate-y").innerText = el.style.top
  
      if((e.clientX <= cuttingArea.getBoundingClientRect().left || e.clientX >= (cuttingArea.getBoundingClientRect().left+cuttingArea.clientWidth)) ||
        (e.clientY <= cuttingArea.getBoundingClientRect().top || e.clientY >= (cuttingArea.getBoundingClientRect().top+cuttingArea.clientHeight)))
          // if((e.clientY <= cuttingArea.getBoundingClientRect().top || e.clientY >= (cuttingArea.getBoundingClientRect().top+cuttingArea.clientHeight)))
      {      
        console.log(false)
      }
      else{
        console.log(true)
        startPointX = e.clientX;
        startPointY = e.clientY;
      }
  
      console.log(startPointX);
  
      // if(e.clientX === document.getElementById("cutting-area").getBoundingClientRect().left || e.clientX === ((document.getElementById("cutting-area").getBoundingClientRect().left)+(document.getElementById("cutting-area").clientWidth)))
      // {
      //   console.log("start")
      // }
    }
  },[])

  

  const add = (e) => {

    const el = e.target
    const cuttingArea = document.getElementById("cutting-area");

    console.log("ClientX:" + e.clientX)
    console.log("ClientY:" + e.clientY)   

    console.log(cuttingArea.getBoundingClientRect().left);
    console.log(cuttingArea.getBoundingClientRect().left+cuttingArea.clientWidth);
    console.log(cuttingArea.getBoundingClientRect().top);    
    console.log(cuttingArea.clientHeight);
    console.log(cuttingArea.getBoundingClientRect().top+cuttingArea.clientHeight);

    el.addEventListener('mousemove',move)
  }

  const remove = (e) => {
    const el = e.target
    console.log("ClientX:" + e.clientX)
    console.log("ClientY:" + e.clientY)
    el.removeEventListener('mousemove',move)
  }

  return (
    <>
      <div id="chopping-board" onMouseDown={add} onMouseUp={remove} onTouchStart={add} onTouchEnd={remove}>
        <div id="cutting-area"></div>
        {/* <div id="ball" onMouseDown={add} onMouseUp={remove}></div>         */}
        {/* <div id="ball" onMouseMove={add}></div> */}
      </div>
      <label>Coordinate:</label>
      <label>(X):</label>
      <label id="coordinate-x"></label>
      &nbsp;
      <label>(Y):</label>
      <label id="coordinate-y"></label><br/>
      <label>Sliced: <span id="cut-result"></span></label>
    </>
  );
}

export default App;
