import './navbar.css';
import  logo  from '../../assets/Logo.png';
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {

    return (
    <>
        <nav className="navbar navbar-expand-lg bg-body-transparent navbar-dark navbar-fixed-top navbar__Container">
            <div className="container-fluid ">
                <Link className="navbar-brand" to="#Header">
                    <img className='navbar__Logo' src={logo} alt='Logo'/>    
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse navbar__Links-Container" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0 ms-auto navbar__Links-List">
                        <li className="nav-item">
                            <Link className="nav-link navbar__Link" aria-current="page" to='#Experience'>EXPERIENCE</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link navbar__Link" aria-current="page" to='#Projects'>PROJECTS</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link navbar__Link" aria-current="page" to='#About'>ABOUT</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link navbar__Link" aria-current="page" to='#Contact' smooth >CONTACT</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link navbar__Link' aria-current='page' to='https://drive.google.com/file/d/1ISd-6ZxrK4GKYNduZlMLMooR9QoY4pzB/view?usp=drive_link'><i className="bi bi-file-person navbar__CVBtn"></i></Link>
                        </li>                        
                        {/* <li className='nav-item'>
                            <a className='nav-link navbar__Link' aria-current='page' href='#'><i className="bi bi-toggle-on navbar__LangBtn"></i></a>
                        </li>                         */}
                    </ul>
      
                </div>
            </div>  
        </nav>

    </>

    )
}

export default Navbar