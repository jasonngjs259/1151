import React, { useState } from "react";
import "./App.scss";
import { Icon } from "@iconify/react";

const App = () => {
    let startPointX, startPointY, endPointX, endPointY;
    const [sliced, setSliced] = useState(false);
    const Slices = [
        { id: "cutting-area1" },
        { id: "cutting-area2" },
        { id: "cutting-area3" },
    ];
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

    let i = Slices.length - 1;

    const move = (e) => {
        const cuttingArea = document.getElementById("cutting-area" + (Slices.length - i));
        document.getElementById("catchEvent").innerText = "cutting-area" + (Slices.length - i);

        document.getElementById("coordinate-x").innerText = e.clientX;
        document.getElementById("coordinate-y").innerText = e.clientY;

        document.getElementById("startPointX").innerText = startPointX;
        document.getElementById("startPointY").innerText = startPointY;

        if (cuttingArea.clientWidth >= cuttingArea.clientHeight) {
            if (endPointX === null &&
                (e.clientX <= cuttingArea.getBoundingClientRect().left + (cuttingArea.clientWidth / segment)))
            {
                endPointX = cuttingArea.getBoundingClientRect().left + cuttingArea.clientWidth;

                document.getElementById("endPointX").innerText = endPointX;
            } 
            else if (endPointX === null &&
                (e.clientX >= cuttingArea.getBoundingClientRect().left + (cuttingArea.clientWidth * (segment - 1)) / segment)) 
            {
                endPointX = cuttingArea.getBoundingClientRect().left;

                document.getElementById("endPointX").innerText = endPointX;          
            }

            if (startPointX !== null && 
                ((Math.round(e.clientX).toFixed(0) - startPointX) >= (Math.round(cuttingArea.clientWidth).toFixed(0)) || 
                (startPointX - Math.round(e.clientX).toFixed(0)) >= (Math.round(cuttingArea.clientWidth).toFixed(0)) || 
                endPointX === e.clientX
                ))
            {
                console.log("Sliced: true");
                startPointX = null;
                startPointY = null;
                console.log("Start Point X: " + startPointX);
                document.getElementById("cutting-area" + (Slices.length - i)).style.display = "none";
    
                if (i !== 0) 
                {
                    i -= 1;
                    document.getElementById("cutting-area" + (Slices.length - i)).style.display = "block";
                } 
                else 
                {
                    setSliced(true);
                }
            }
            // else
            // {
            //     startPointX = null;
            // }
            // if (e.clientX < cuttingArea.getBoundingClientRect().left ||
            //      e.clientX > cuttingArea.getBoundingClientRect().left + cuttingArea.clientWidth) 
            // {
            //     console.log("Y: " + false);
            //     endPointY = null;
            // }

            // if (endPointX === null &&
            //     (e.clientX <= cuttingArea.getBoundingClientRect().left + (cuttingArea.clientWidth / segment)))
            // {
            //     //   console.log("Segment: " + (cuttingArea.getBoundingClientRect().left + (cuttingArea.clientWidth / segment)))
            //     endPointX =
            //         cuttingArea.getBoundingClientRect().left +
            //         cuttingArea.clientWidth;
            //     // console.log("End Point: " + endPointX);

            //     condition = 1;

            //     document.getElementById("endPointX").innerText = endPointX;
            // } 
            // else if (endPointX === null &&
            //     (e.clientX >= cuttingArea.getBoundingClientRect().left + (cuttingArea.clientWidth * (segment - 1)) / segment)) 
            // {
            //     //   console.log("Segment: " + (cuttingArea.getBoundingClientRect().left + (cuttingArea.clientWidth * (segment - 1) / segment)))
            //     endPointX = cuttingArea.getBoundingClientRect().left;
            //     // console.log("End Point: " + endPointX);
                
            //     condition = 2;

            //     document.getElementById("endPointX").innerText = endPointX;          
            // }

            // if(condition === 1 && e.clientX >= endPointX)
            // {
            //     console.log("Sliced: true");
            //     document.getElementById("cutting-area" + (Slices.length - i)).style.display = "none";

            //     if (i !== 0) {
            //         remove();
            //         i -= 1;
            //         document.getElementById("cutting-area" + (Slices.length - i)).style.display = "block";
            //     } else {
            //         setSliced(true);
            //         // document.getElementById("cutting-result").innerText = sliced;
            //     }
            // }
            // else if (condition === 2 && e.clientX <= endPointX)
            // {
            //     console.log("Sliced: true");
            //     document.getElementById("cutting-area" + (Slices.length - i)).style.display = "none";

            //     if (i !== 0) {
            //         remove();
            //         i -= 1;
            //         document.getElementById("cutting-area" + (Slices.length - i)).style.display = "block";
            //     } else {
            //         setSliced(true);
            //         // document.getElementById("cutting-result").innerText = sliced;
            //     }
            // }
        } 
        else if (cuttingArea.clientWidth <= cuttingArea.clientHeight) 
        {
            if (endPointY === null && 
                (e.clientY === cuttingArea.getBoundingClientRect().top || e.clientY <= cuttingArea.getBoundingClientRect().top + cuttingArea.clientHeight / segment)) 
            {
                endPointY = cuttingArea.getBoundingClientRect().top + cuttingArea.clientHeight;

                document.getElementById("endPointY").innerText = endPointY;
            } 
            else if (endPointY === null &&
                (e.clientY === cuttingArea.getBoundingClientRect().top + cuttingArea.clientHeight || 
                e.clientY >= cuttingArea.getBoundingClientRect().top + (cuttingArea.clientHeight * (segment - 1)) / segment)) 
            {
                endPointY = cuttingArea.getBoundingClientRect().top;

                document.getElementById("endPointY").innerText = endPointY; 
            }

            if (startPointY !== null && 
                ((Math.round(e.clientY).toFixed(0) - startPointY) >= (Math.round(cuttingArea.clientHeight).toFixed(0)) || 
                (startPointY - Math.round(e.clientY).toFixed(0)) >= (Math.round(cuttingArea.clientHeight).toFixed(0)) ||
                endPointY === e.clientY))
            {
                console.log("Sliced: true");
                startPointX = null;
                startPointY = null;
                console.log("Start Point Y: " + startPointY);
                document.getElementById("cutting-area" + (Slices.length - i)).style.display = "none";                

                if (i !== 0)
                {
                    i -= 1;
                    document.getElementById("cutting-area" + (Slices.length - i)).style.display = "block";
                } else {
                    setSliced(true);
                }
            }
            // // if (e.clientY < cuttingArea.getBoundingClientRect().top || e.clientY > cuttingArea.getBoundingClientRect().top + cuttingArea.clientHeight) 
            // // {
            // //     console.log("X: " + false)
            // //     endPointX = null;
            // // }

            // if (endPointY === null && 
            //     (e.clientY === cuttingArea.getBoundingClientRect().top || e.clientY <= cuttingArea.getBoundingClientRect().top + cuttingArea.clientHeight / segment)) 
            // {
            //     //   console.log("Segment: " + (cuttingArea.getBoundingClientRect().top + (cuttingArea.clientHeight / segment)))
            //     endPointY = cuttingArea.getBoundingClientRect().top + cuttingArea.clientHeight;
            //     // console.log("End Point: " + endPointY);
                
            //     condition = 1;

            //     document.getElementById("endPointY").innerText = endPointY;
            // } 
            // else if (endPointY === null &&
            //     (e.clientY === cuttingArea.getBoundingClientRect().top + cuttingArea.clientHeight || 
            //     e.clientY >= cuttingArea.getBoundingClientRect().top + (cuttingArea.clientHeight * (segment - 1)) / segment)) 
            // {
            //     //   console.log("Segment: " + (cuttingArea.getBoundingClientRect().top + (cuttingArea.clientHeight * (segment - 1) / segment)))
            //     endPointY = cuttingArea.getBoundingClientRect().top;
            //     // console.log("End Point: " + endPointY);
                
            //     condition = 2;

            //     document.getElementById("endPointY").innerText = endPointY; 
            // }

            // if (condition === 1 && e.clientY >= endPointY)
            // {
            //     console.log("Sliced: true");
            //     document.getElementById("cutting-area" + (Slices.length - i)).style.display = "none";

            //     if (i !== 0) {
            //         remove();
            //         i -= 1;
            //         document.getElementById("cutting-area" + (Slices.length - i)).style.display = "block";
            //     } else {
            //         setSliced(true);
            //         // document.getElementById("cutting-result").innerText = sliced;
            //     }
            // }
            // else if (condition === 2 && e.clientY <= endPointY)
            // {
            //     console.log("Sliced: true");
            //     document.getElementById("cutting-area" + (Slices.length - i)).style.display = "none";

            //     if (i !== 0) {
            //         remove();
            //         i -= 1;
            //         document.getElementById("cutting-area" + (Slices.length - i)).style.display = "block";
            //     } else {
            //         setSliced(true);
            //         // document.getElementById("cutting-result").innerText = sliced;
            //     }
            // }
        }
        
    };   

    const add = (e) => {
        document.body.style.overflow = "hidden";
        if(e.target.id === "cutting-area" + (Slices.length - i))
        {
            startPointX = e.clientX;
            startPointY = e.clientY;
        }        
        endPointX = null;
        endPointY = null;        
        setSliced(false);
        document.getElementById("chopping-board").addEventListener("mousemove", move);
    };    

    const remove = () => {  
        document.getElementById("chopping-board").removeEventListener("mousemove", move);
    };

    const touchMove = (e) => {
        const cuttingArea = document.getElementById("cutting-area" + (Slices.length - i));
        document.getElementById("catchEvent").innerText = "cutting-area" + (Slices.length - i);

        document.getElementById("coordinate-x").innerText = Math.round(e.touches[0].clientX).toFixed(0);
        document.getElementById("coordinate-y").innerText = Math.round(e.touches[0].clientY).toFixed(0);

        document.getElementById("startPointX").innerText = startPointX;
        document.getElementById("startPointY").innerText = startPointY;

        if (cuttingArea.clientWidth >= cuttingArea.clientHeight) {
            if (startPointX !== null && ((Math.round(e.touches[0].clientX).toFixed(0) - startPointX) >= (Math.round(cuttingArea.clientWidth).toFixed(0)) || 
                (startPointX - Math.round(e.touches[0].clientX).toFixed(0)) >= (Math.round(cuttingArea.clientWidth).toFixed(0))))
            {
                console.log("Sliced: true");
                startPointX = null;
                startPointY = null;
                console.log("Start Point X: " + startPointX);
                document.getElementById("cutting-area" + (Slices.length - i)).style.display = "none";
    
                if (i !== 0) 
                {
                    i -= 1;
                    document.getElementById("cutting-area" + (Slices.length - i)).style.display = "block";
                } 
                else 
                {
                    setSliced(true);
                }
            }
        } 
        else if (cuttingArea.clientWidth <= cuttingArea.clientHeight)
        {
            if (startPointY !== null && ((Math.round(e.touches[0].clientY).toFixed(0) - startPointY) >= (Math.round(cuttingArea.clientHeight).toFixed(0)) || 
                (startPointY - Math.round(e.touches[0].clientY).toFixed(0)) >= (Math.round(cuttingArea.clientHeight).toFixed(0))))
            {
                console.log("Sliced: true");
                startPointX = null;
                startPointY = null;
                console.log("Start Point Y: " + startPointY);
                document.getElementById("cutting-area" + (Slices.length - i)).style.display = "none";                
    
                if (i !== 0)
                {
                    i -= 1;
                    document.getElementById("cutting-area" + (Slices.length - i)).style.display = "block";
                } else {
                    setSliced(true);
                }
            }
        }       
    };

    const touchAdd = (e) => {
        document.getElementById("chopping-board").style.overflow = "hidden";
        startPointX = Math.round(e.touches[0].clientX).toFixed(0);
        startPointY = Math.round(e.touches[0].clientY).toFixed(0);
        setSliced(false);
    };

    const touchRemove = () => {  
        document.body.style.overflow = "auto";
    };

    return (
        <>
            <div id="chopping-board" onMouseDown={add} onMouseUp={remove} onTouchStart={touchAdd} onTouchEnd={touchRemove}>
                <div className="ingredient" id="chicken">
                    {Slices.map((Slice) => (
                        <div className="cutting-area" key={Slice?.id} id={Slice?.id} onTouchMove={touchMove}></div>
                    ))}
                </div>
            </div>
            <div>
                <button>Chicken</button>
                <button>Fish</button>
                <button>Lettuce</button>
            </div>
            <br />
            <label>Coordinate:</label>
            <label>(X): </label>
            <label id="coordinate-x"></label>
            &nbsp;
            <label>(Y): </label>
            <label id="coordinate-y"></label>
            <br />
            <label>Start Point:</label>
            <label>(X): </label>
            <label id="startPointX"></label>
            <label>, </label>
            <label>(Y): </label>
            <label id="startPointY"></label>
            <br/>
            <label>End Point:</label>
            <label>(X): </label>
            <label id="endPointX"></label>
            <label>, </label>
            <label>(Y): </label>
            <label id="endPointY"></label>
            <br/>
            <label>Event: </label>
            <label id="catchEvent"></label>
            <br />
            <label>
                Sliced:{" "}
                <span id="cutting-result" style={{ color: "lime" }}>
                    {sliced && <Icon icon="teenyicons:tick-circle-solid" />}
                </span>
            </label>
        </>
    );
};

export default App;
