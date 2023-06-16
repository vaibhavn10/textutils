import React, {useState} from 'react'

export default function Textform(props){
    // const bgchange = () => {
    //     if(bg.color === "black")
    //     {
    //         setbg({
    //             backgroundColor: "rgba(35,35,35)",
    //             color: "white"
    //         })
    //     }
    //     else{
    //         setbg({
    //             backgroundColor: "white",
    //             color: "black"
    //         })
    //     }

    // }
    const upper = () =>{
        setText(text.toUpperCase());
        setcount(count+1);
        props.showalert("Converting to upper case...","success");
    }
    const lower = () =>{
        setText(text.toLowerCase());
        setcount(count+1);
        props.showalert("Converting to lower case...","success");
    }
    const italic = () =>{
        document.getElementById("preview").style.fontStyle="italic";
        setcount(count+1);
        props.showalert("Italic text","success");
    }
    const selectall = async () =>{
        const input = document.getElementById("txtbox").innerHTML;
        try {
            await navigator.clipboard.writeText(input);
            props.showalert("Copied to clipboard...","success");
        } catch (err) {
            props.showalert("Failed to copy...","success");
          }
        setcount(count+1);
    }
    const reset = () =>{
        setText("");
        setcount(0);
    }

    const handlechange = (event) =>{
        console.log("change value event occurred");
        setText(event.target.value);
    }
    
    const [count,setcount] = useState(0);
    const [text, setText] = useState("");
    // const [bg,setbg] = useState({
    //     backgroundColor: "white",
    //     color: "black"
    // });

    const theme = {
        backgroundColor: (props.mode==="light")?"white":"#15121e",
        color: (props.mode==="light")?"black":"white"
    } //this is an object
    return (
        <>
        
        <div className="container" style={theme}>

        <div className="form" style={theme}>
            <div className="mb-3" style={theme}>
                <h5>{props.heading}</h5>
  <textarea className="form-control" id="txtbox" placeholder="Enter text here..." value={text} onChange={handlechange} rows="8" style={{backgroundColor: (props.mode==="light")?"white":"darkgrey",color: (props.mode==="light")?"black":"#3a3a3a"}}></textarea>
</div>


<button  className={`btn btn-${(props.mode==="light")? "primary":"light"} mx-2`} onClick={upper}>{props.btname}</button>
<button  className={`btn btn-${(props.mode==="light")? "primary":"light"} mx-2`} onClick={lower}>Convert to lowercase</button>
<button  className={`btn btn-${(props.mode==="light")? "primary":"light"} mx-2`} onClick={italic}>Italic</button>
<button className="butun mx-2" onClick={selectall}>Select all</button>
<button className="butun mx-2" onClick={reset}>Reset</button>

        </div>

        <div className='summary my-2' style={theme}>
                <h5>your text summary</h5>
                <p>number of times buttons were clicked = {count}</p>
                <p>{(text.length===0)?0:text.split(" ").length} words {text.length} characters</p> {/*number of words is equal to number of blankspaces */}
                <p>time taken to read the sentence : {(text.split(" ").length*(1/125))} min</p>
                <h5>preview</h5>
                <p id="preview">{text}</p>
        </div>
</div>
        </>
    );
}