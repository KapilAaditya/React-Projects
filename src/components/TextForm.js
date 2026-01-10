import React, { useState } from 'react'
export default function TextForm(props) {

    const handleclear = () => {
        settext('')
        props.makeAlert ('Text Cleared','success')
    }
    const handlelpClick = () => {
        let newText = text.toLowerCase();
        settext(newText)
        props.makeAlert('Converted to Lower case','success')

    }
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        settext(newText)
        props.makeAlert('Converted to Upper case','success')
    }
    const handleOnChnage = (event) => {
        settext(event.target.value)
    }
     const handleExtraSpace = (event) => {
        let newtext = text.split(/[ ]+/)
        settext(newtext.join(" "))
        props.makeAlert('Extra space removed ','success')
    }
    const [text, settext] = useState('Enter the value here')
    return (
        <>

            <div className="container" style={{color : props.mode==='dark'?'white':'rgb(9 18 30)'} }>
                <h1 className='container my-2'>Enter you text</h1>
                <div className="mb-3">
                    <textarea className="form-control border boder-1 boder-white my-2 ms-3 mt-2" value={text}  onChange={handleOnChnage} style={{backgroundColor : props.mode==='white'?'rgb(9 18 30)':'white', color : props.mode === 'white' ? 'rgb(9 18 30)' : 'light'}} id="myBox" rows="8"></textarea>
                    <button className="btn btn-primary my-3 ms-3" onClick={handleUpClick}>TO UPPERCASE</button>
                    <button className="btn btn-primary my-3 ms-3" onClick={handlelpClick}>TO LOWERCASE</button>
                    <button className="btn btn-primary my-3 ms-3" onClick={handleclear}>TO CLEAR</button>
                    <button className="btn btn-primary my-3 ms-3" onClick={handleExtraSpace}>EXTRA SPACE REMOVER</button>
                </div>
            </div>
            <div className="container my-3 .text-left" style={{color : props.mode==='dark'?'white':'rgb(9 18 30)'} } >
                <h2 className="container my-3" >Your Text Summary</h2>
                <p className='p ms-3'> {text.split(" ").length}  words and {text.length} character</p>
                <p  className='p ms-3'>{0.08 * text.split(" ").length.toFixed(0)} mintes read </p>
                <h3 className='p ms-3'>Preview</h3>
                <p className='p ms-3'>{text.length>0?text:"Enter your text in the text box Firts !!"}</p>
            </div>
        </>
    )
}
