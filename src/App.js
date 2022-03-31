import React from 'react'
import './App.scss';

const App = () => {
  let endPointX, endPointY
  let slice = "false";
  const ChickenSlices = [
    {id: 'cutting-area1'},
    {id: 'cutting-area2'},
    {id: 'cutting-area3'},
  ]

  const segment = 4

  console.log(ChickenSlices.length);

  const move = (e) => {
    const cuttingArea = document.getElementById(e.target.id);

    document.getElementById("coordinate-x").innerText = e.clientX
    document.getElementById("coordinate-y").innerText = e.clientY

    if((e.clientY <= cuttingArea.getBoundingClientRect().top || e.clientY >= (cuttingArea.getBoundingClientRect().top + cuttingArea.clientHeight)))
    {      
      console.log(false)
      endPointX = null;
    }

    if((e.clientX <= cuttingArea.getBoundingClientRect().left || e.clientX >= (cuttingArea.getBoundingClientRect().left + cuttingArea.clientWidth)))
    // if((e.clientX <= cuttingArea.getBoundingClientRect().left || e.clientX >= (cuttingArea.getBoundingClientRect().left+cuttingArea.clientWidth)) ||
    //   (e.clientY <= cuttingArea.getBoundingClientRect().top || e.clientY >= (cuttingArea.getBoundingClientRect().top+cuttingArea.clientHeight)))
        // if((e.clientY <= cuttingArea.getBoundingClientRect().top || e.clientY >= (cuttingArea.getBoundingClientRect().top+cuttingArea.clientHeight)))
    {      
      console.log(false)
      endPointY = null;
    }    

    if(endPointX === null && 
      (e.clientX === cuttingArea.getBoundingClientRect().left || e.clientX <= (cuttingArea.getBoundingClientRect().left + (cuttingArea.clientWidth) / segment)))
    {
      console.log(cuttingArea.getBoundingClientRect().left + (cuttingArea.clientWidth) / segment)
      endPointX = cuttingArea.getBoundingClientRect().left + cuttingArea.clientWidth;
      console.log("End Point: " + endPointX);
    }
    else if(endPointX === null && 
      (e.clientX === (cuttingArea.getBoundingClientRect().left + cuttingArea.clientWidth) || e.clientX >= (cuttingArea.getBoundingClientRect().left + (cuttingArea.clientWidth) * (segment - 1) / segment)))
    {
      console.log((cuttingArea.getBoundingClientRect().left) + (cuttingArea.clientWidth) * (segment - 1) / segment)
      endPointX = cuttingArea.getBoundingClientRect().left;
      console.log("End Point: " + endPointX);
    }

    if(endPointY === null && 
      (e.clientY === cuttingArea.getBoundingClientRect().top || e.clientY <= (cuttingArea.getBoundingClientRect().top + (cuttingArea.clientHeight) / segment)))
    {
      console.log(cuttingArea.getBoundingClientRect().top + (cuttingArea.clientHeight) / segment)
      endPointY = cuttingArea.getBoundingClientRect().top + cuttingArea.clientHeight;
      console.log("End Point: " + endPointY);
    }
    else if(endPointY === null && 
      (e.clientY === (cuttingArea.getBoundingClientRect().top + cuttingArea.clientHeight) || e.clientY >= (cuttingArea.getBoundingClientRect().top + (cuttingArea.clientHeight) * (segment - 1) / segment)))
    {
      console.log((cuttingArea.getBoundingClientRect().top) + (cuttingArea.clientHeight) * (segment - 1) / segment)
      endPointY = cuttingArea.getBoundingClientRect().top;
      console.log("End Point: " + endPointY);
    }


    if(endPointX === e.clientX || endPointY === e.clientY)
    {
      slice = "true";
      document.getElementById("cutting-result").innerText = slice;
    }
  }

  const add = (e) => {
    endPointX = null;
    endPointY = null;
    slice = "false"
    document.getElementById("cutting-result").innerText = slice;
    document.getElementById(e.target.id).addEventListener('mousemove',move)

  }

  const remove = (e) => {
    document.getElementById(e.target.id).removeEventListener('mousemove',move);

  }

  return (
    <>
      <div id="chopping-board" onMouseDown={add} onMouseUp={remove}>
        <div id="ingredient">
          {ChickenSlices.map((Slice)=>(<div className="cutting-area" key={Slice.id} id={Slice.id}></div>))}
        </div>
        
      </div>
      
      <label>Coordinate:</label>
      <label>(X):</label>
      <label id="coordinate-x"></label>
      &nbsp;
      <label>(Y):</label>
      <label id="coordinate-y"></label><br/>
      <label>Sliced: <span id="cutting-result">{slice}</span></label>
    </>
  );
}

export default App;
