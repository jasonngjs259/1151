import './App.css';

const App = () => {
  let offsetX, offsetY
  const move = (e) => {
    const el = e.target
    el.style.left = `${e.pageX - offsetX}px`
    el.style.top = `${e.pageY - offsetY}px`
    document.getElementById("coordinate-x").innerText = e.clientX
    document.getElementById("coordinate-y").innerText = e.clientY
    // document.getElementById("coordinate-x").innerText = el.style.left
    // document.getElementById("coordinate-y").innerText = el.style.top

    if((e.clientX <= 1231 && e.clientX >= 229) && (e.clientY >= 170 && e.clientY <= 775))
    {
      console.log(true)
    }
    else{
      console.log(false)
      el.removeEventListener('mousemove',move)
    }

    // if(e.clientX === document.getElementById("cutting-area").getBoundingClientRect().left || e.clientX === ((document.getElementById("cutting-area").getBoundingClientRect().left)+(document.getElementById("cutting-area").clientWidth)))
    // {
    //   console.log("start")
    // }
  }

  const add = (e) => {
    const el = e.target
    
    offsetX = e.clientX - el.getBoundingClientRect().left
    offsetY = e.clientY - el.getBoundingClientRect().top
    el.addEventListener('mousemove',move)

    console.log("getBoundingClientRect Top:" + el.getBoundingClientRect().top)
    console.log("getBoundingClientRect Left:" + el.getBoundingClientRect().left)
    console.log("ClientX:" + e.clientX)
    console.log("ClientY:" + e.clientY)
  }

  // const remove = (e) => {
  //   const el = e.target    
  //   el.removeEventListener('mousemove',move)

  //   console.log(document.getElementById("cutting-area").clientWidth);
  //   console.log(document.getElementById("cutting-area").getBoundingClientRect().left)
  //   console.log((document.getElementById("cutting-area").getBoundingClientRect().left)+(document.getElementById("cutting-area").clientWidth))
  // }

  return (
    <>
      <div id="chopping-board">
        <div id="cutting-area"></div>
        {/* <div id="ball" onMouseDown={add} onMouseUp={remove}></div>         */}
        <div id="ball" onMouseMove={add}></div>
      </div>
      <label>Coordinate:</label>
      <label>(X):</label>
      <label id="coordinate-x"></label>
      &nbsp;
      <label>(Y):</label>
      <label id="coordinate-y"></label>  
    </>
  );
}

export default App;
