import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick=()=>{
        // console.log('Uppercase was clicked'+text)
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase","success")
    }
    const handleLowClick=()=>{
        // console.log('Uppercase was clicked'+text)
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase","success")
    }
    // const handleCapital = () => {
    //       let newText=text.toLowerCase()
    //       newText=text.split(' ')
    //       newText=text.map((text) => text.charAt(0).toUpperCase() + text.slice(1))
    //       setText(newText=text.join(' '));
    //   };
    //   const handleCapital=() =>{
    //     let newText=text.toLowerCase()
    //     text.charAt(0).toUpperCase() + text.slice(1);
    //     setText(newText)
    //   }
    
    const handleExtraClick=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed","success")
    }
    const handleCopyClick=()=>{
        // console.log('Uppercase was clicked'+text)
        let newText=document.getElementById("Mybox")
        newText.select();
        navigator.clipboard.writeText(newText.value);
        props.showAlert("Copy to Clipboard","success")
    }
    
    const handleOnChange=(event)=>{
        // console.log('On change')
        setText(event.target.value)
    }
    const handleClear = (event) => {
        setText(event.target.value);
        props.showAlert("All text cleared","success")
      };
    
    const [text, setText] = useState('');
        
  return (
    <>
    <div className="container my-3" style={{color: props.mode==='dark'? 'white' : 'black'}}>
        <h2>{props.heading}</h2>
      <div className="form-group"style={{color: props.mode==='dark'? 'white' : 'black'}}>
  <textarea className="form-control" id="Mybox" value={text} onChange={handleOnChange} rows="8" style={{ color: 'black'?'black': 'white' ,backgroundColor: props.mode==='dark'? 'grey' : 'white'}}></textarea>
    </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1"  onClick={handleUpClick} >Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
        {/* <button className="btn btn-primary mx-2" onClick={handleCapital}>Capitalize Each Word</button> */}
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraClick}>Remove Extra Spaces</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>Copy To clipboard</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClear}>Reset</button>
    </div>
    <div className="container" style={{color: props.mode==='dark'? 'white' : 'black'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
    </div>
    </>
  )
}
