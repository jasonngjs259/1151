import React from 'react'
import './App.scss';

const App = () => {
  let endPointX, endPointY
  let slice = "false";
  const Slices = [
    {id: 'cutting-area1'},
    {id: 'cutting-area2'},
    {id: 'cutting-area3'},    
  ]
  // const Slices = [
  //   {
  //     name: 'chicken', 
  //     values:[
  //       {id: 'cutting-area1'},
  //       {id: 'cutting-area2'},
  //       {id: 'cutting-area3'},
  //     ]
  //   },
  //   {
  //     name: 'fish',
  //     values:[
  //       {id: 'cutting-area1'},
  //       {id: 'cutting-area2'},
  //     ]
  //   }
  // ]

  const segment = 4;

  let i = Slices.length - 1

  const move = (e) => {
    const cuttingArea = document.getElementById("cutting-area"+(Slices.length - i));
    document.getElementById("catchEvent").innerText = "cutting-area"+(Slices.length - i);

    document.getElementById("coordinate-x").innerText = e.clientX
    document.getElementById("coordinate-y").innerText = e.clientY

    if((e.clientY <= cuttingArea.getBoundingClientRect().top || e.clientY >= (cuttingArea.getBoundingClientRect().top + cuttingArea.clientHeight)))
    {      
      console.log("X: " + false)
      endPointX = null;
    }

    if((e.clientX <= cuttingArea.getBoundingClientRect().left || e.clientX >= (cuttingArea.getBoundingClientRect().left + cuttingArea.clientWidth)))
    // if((e.clientX <= cuttingArea.getBoundingClientRect().left || e.clientX >= (cuttingArea.getBoundingClientRect().left+cuttingArea.clientWidth)) ||
    //   (e.clientY <= cuttingArea.getBoundingClientRect().top || e.clientY >= (cuttingArea.getBoundingClientRect().top+cuttingArea.clientHeight)))
        // if((e.clientY <= cuttingArea.getBoundingClientRect().top || e.clientY >= (cuttingArea.getBoundingClientRect().top+cuttingArea.clientHeight)))
    {      
      console.log("Y: " + false)
      endPointY = null;
    }    

    if(endPointX === null && 
      (e.clientX === cuttingArea.getBoundingClientRect().left || e.clientX <= (cuttingArea.getBoundingClientRect().left + (cuttingArea.clientWidth / segment))))
    {
      console.log("Segment: " + (cuttingArea.getBoundingClientRect().left + (cuttingArea.clientWidth / segment)))
      endPointX = cuttingArea.getBoundingClientRect().left + cuttingArea.clientWidth;
      console.log("End Point: " + endPointX);
    }
    else if(endPointX === null && 
      (e.clientX === (cuttingArea.getBoundingClientRect().left + cuttingArea.clientWidth) || e.clientX >= (cuttingArea.getBoundingClientRect().left + (cuttingArea.clientWidth * (segment - 1) / segment))))
    {
      console.log("Segment: " + (cuttingArea.getBoundingClientRect().left + (cuttingArea.clientWidth * (segment - 1) / segment)))
      endPointX = cuttingArea.getBoundingClientRect().left;
      console.log("End Point: " + endPointX);
    }
    
    if(endPointY === null && 
      (e.clientY === cuttingArea.getBoundingClientRect().top || e.clientY <= (cuttingArea.getBoundingClientRect().top + (cuttingArea.clientHeight / segment))))
    {
      console.log("Segment: " + (cuttingArea.getBoundingClientRect().top + (cuttingArea.clientHeight / segment)))
      endPointY = cuttingArea.getBoundingClientRect().top + cuttingArea.clientHeight;
      console.log("End Point: " + endPointY);
    }
    else if(endPointY === null && 
      (e.clientY === (cuttingArea.getBoundingClientRect().top + cuttingArea.clientHeight) || e.clientY >= (cuttingArea.getBoundingClientRect().top + (cuttingArea.clientHeight * (segment - 1) / segment))))
    {
      console.log("Segment: " + (cuttingArea.getBoundingClientRect().top + (cuttingArea.clientHeight * (segment - 1) / segment)))
      endPointY = cuttingArea.getBoundingClientRect().top;
      console.log("End Point: " + endPointY);
    }


    if(endPointX === e.clientX || endPointY === e.clientY)
    {      
      document.getElementById("cutting-area"+(Slices.length - i)).style.display = "none";

      if(i != 0)
      {
        i -= 1;
        document.getElementById("cutting-area"+(Slices.length - i)).style.display = "block";        
      }
      else
      {
        slice = "true";
        document.getElementById("cutting-result").innerText = slice;
      }
    }
  }

  const add = () => {
    endPointX = null;
    endPointY = null;
    document.getElementById("cutting-result").innerText = slice;
    document.getElementById("chopping-board").addEventListener('mousemove',move)

  }

  const remove = () => {
    document.getElementById("chopping-board").removeEventListener('mousemove',move);
  }

  return (
    <>
      <div id="chopping-board" onMouseDown={add} onMouseUp={remove}>        
        <div className="ingredient" id="chicken">
          {Slices.map((Slice)=>(
              <div className="cutting-area" key={Slice?.id} id={Slice?.id}></div>            
          ))}
        </div>
        
      </div>
      
      <label>Coordinate:</label>
      <label>(X): </label>
      <label id="coordinate-x"></label>
      &nbsp;
      <label>(Y): </label>
      <label id="coordinate-y"></label><br/>
      <label>Event: </label>
      <label id="catchEvent"></label><br/>
      <label>Sliced: <span id="cutting-result">{slice}</span></label>
    </>
  );
}

export default App;
