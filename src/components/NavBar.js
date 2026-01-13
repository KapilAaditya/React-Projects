import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';



export default function Navbar(props) {

    const change = (color) => {
        document.body.style.backgroundColor = color;
        props.makeAlert(`Color converted to ${color}`, 'success')


    }

    return (

        <>
            <nav className={`navbar navbar-expand-lg border boder-2 border-white navbar-${props.mode} bg-${props.mode}`} >
                <div className="container-fluid">
                    {/* <Link className="navbar-brand" to="/TextForm">
                        {props.title}
                    </Link> */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/TextForm">
                                    TextForm
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/About">
                                    About
                                </Link>
                            </li>
                        </ul>
                        {/* <form   className="d-flex" role="search">
                            <input  className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-primary me-2" type="submit">Search</button>
                        </form> */}
                        <div className="dropdown">
                            <button className="btn btn-primary dropdown-toggle  me-3" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Select change
                            </button>
                            <ul className="dropdown-menu">
                                <button type="button" className="btn btn-outline-primary w-100 " onClick={() => change('blue')} >Blue</button>
                                <button type="button" className="btn btn-outline-secondary w-100" onClick={() => change('grey')} >Grey</button>
                                <button type="button" className="btn btn-outline-success w-100" onClick={() => change('green')} >Green</button>
                                <button type="button" className="btn btn-outline-danger w-100" onClick={() => change('red')} >Red</button>
                                <button type="button" className="btn btn-outline-warning w-100" onClick={() => change('yellow')}>Yellow</button>
                            </ul>
                        </div>
                        <div className={`form-check form-switch text-${props.mode === 'dark' ? 'light' : 'dark'}`}>

                            <input className="form-check-input" type="checkbox" onClick={props.tooglemode} role="switch" id="switchCheckDefault" />
                            <label className="form-check-label" htmlFor="switchCheckDefault">Dark mode </label>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )

}
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    AboutText: PropTypes.string.isRequired
};
Navbar.defaultProps = {
    title: 'set it here',
    AboutText: 'its also here'
};

