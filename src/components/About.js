// import React, { useState} from 'react'


export default function About(props) {

    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // }

    // )
    // const [btnText, setBtnText] = useState("Enable Dark Mode ")

    // const handlestyle = () => {
    //     if (myStyle.color === 'black') {
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: 'black',
    //             border: '2px solid white'
    //         })
    //         setBtnText('Enable Light Mode')
    //     } else {
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setBtnText('Enable Dark Mode')
    //     }
    // }
    //  useEffect(() => {
    //     document.body.style.backgroundColor = myStyle.backgroundColor
    //     document.body.style.color = myStyle.color
    // }, [myStyle])



    return (
        <div className={`app-container`} >
            <div className="accordion accordion-flush" id="accordionFlushExample" >
                <h1 className={`app-container bg-${props.mode} text-${props.mode === 'dark' ? 'light' : 'dark'}`}
                >About us</h1>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed border rounded-pill" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">This application is a personal React project focused on building a clean, efficient, and responsive user interface. It uses modern React practices such as functional components and state management to deliver a smooth user experience. </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed border rounded-pill" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">The application includes a theme-toggle system that allows switching between dark and light modes in real time. The UI is styled using Bootstrap components combined with custom logic to maintain consistency, accessibility, and visual clarity across different themes..</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed border rounded-pill" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">This project emphasizes practical React development, including dynamic styling, component reusability, and controlled state updates. It reflects an approach focused on writing maintainable code and implementing features that enhance usability rather than basic demonstrations.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
