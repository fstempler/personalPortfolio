import './navbar.css';
import  logo  from '../../assets/Logo.png';

const Navbar = () => {

    return (
    <>
        <nav className="navbar navbar-expand-lg bg-body-transparent navbar-dark navbar-fixed-top navbar__Container">
            <div className="container-fluid ">
                <a className="navbar-brand" href="#">
                    <img className='navbar__Logo' src={logo} alt='Logo'/>    
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse navbar__Links-Container" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0 ms-auto navbar__Links-List">
                        <li className="nav-item">
                            <a className="nav-link navbar__Link" aria-current="page" href="#">EXPERIENCE</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link navbar__Link" aria-current="page" href="#">PROJECTS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link navbar__Link" aria-current="page" href="#">ABOUT</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link navbar__Link" aria-current="page" href="#">CONTACT</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link navbar__Link' aria-current='page' href='#'><i className="bi bi-file-person navbar__CVBtn"></i></a>
                        </li>                        
                        <li className='nav-item'>
                            <a className='nav-link navbar__Link' aria-current='page' href='#'><i className="bi bi-toggle-on navbar__LangBtn"></i></a>
                        </li>                        
                    </ul>
      
                </div>
            </div>  
        </nav>

    </>

    )
}

export default Navbar