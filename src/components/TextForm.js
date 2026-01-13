import React, { useState } from 'react'
export default function TextForm(props) {

    const handleClear = () => {
        settext('')
        props.makeAlert('Text Cleared', 'success')
    }
    const handlelpClick = () => {
        let newText = text.toLowerCase();
        settext(newText)
        props.makeAlert('Converted to Lower case', 'success')

    }
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        settext(newText)
        props.makeAlert('Converted to Upper case', 'success')
    }
    const handleOnChnage = (event) => {
        settext(event.target.value)
    }
    const handleExtraSpace = (event) => {
        let newtext = text.split(/[ ]+/)
        settext(newtext.join(" "))
        props.makeAlert('Extra space removed ', 'success')
    }
    const [text, settext] = useState('')
    return (
        <>

            <div className="container text-center" style={{ color: props.mode === 'dark' ? 'white' : 'rgb(9, 18 ,30)' }}>
                <h1  className='container my-4'><strong>ENTER YOUR TEXT</strong></h1>
                <div className="mb-3 ">
                    <textarea className="form-control border boder-1 boder-white my-2 ms-3 mt-2" value={text} onChange={handleOnChnage} style={{ backgroundColor: props.mode === 'white' ? 'rgb(9 18 30)' : 'white', color: props.mode === 'white' ? 'rgb(9 18 30)' : 'light' }} id="myBox" rows="8"></textarea>
                    <button disabled={text.length === 0} className="new btn btn-primary my-3 ms-3" onClick={handlelpClick}>TO LOWERCASE</button>
                    <button disabled={text.length === 0} className="new btn btn-primary my-3 ms-3" onClick={handleUpClick}>TO UPPERCASE</button>
                    <button disabled={text.length === 0} className="new btn btn-primary my-3 ms-3" onClick={handleExtraSpace}>EXTRA SPACE REMOVER</button>
                    <button disabled={text.length === 0} className="new btn btn-danger my-3 ms-3" onClick={handleClear}>TO CLEAR</button>
                </div>
            </div>
            <div className="container my-3 .text-left" style={{ color: props.mode === 'dark' ? 'white' : 'rgb(9, 18, 30)' }} >
                <h2 className="container my-3" ><strong>   Your Text Summary</strong></h2>
                <p  className='p ms-3'> {text.split(" ").filter((element) => { return element.length !== 0 }).length}  words and {text.length} character</p>
                <p  className='time ms-3'>{0.08 * text.split(" ").filter((element) => { return element.length !== 0 }).length.toFixed(0)} mintes read </p>
                <h3 className='p ms-3'><strong>
                    Preview </strong></h3>
                <p  className='p ms-3'>{text.length > 0 ? text : "Enter your text in the text box Firts !!"}</p>
            </div>
        </>
    )
}
