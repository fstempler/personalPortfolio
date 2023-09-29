import './contact.css';

const Contact = () => {
    return (
        <>
        <div className='contact__Main-Container'>
            <div className='contact__Title-Container'>
                <h1 className='contact__Title contactTitle-Hr-Line'>
                    Contact
                </h1>
            </div>
            <div className='contact__Form-Container container'>
            <form className='contact__Form'>
                <div className="mb-3">                    
                    <input 
                    type="email" 
                    className="form-control" 
                    id="exampleInputEmail1" 
                    aria-describedby="emailHelp" 
                    placeholder='Name'/>                    
                </div>  
                <div className="mb-3">                    
                    <input 
                    type="email" 
                    className="form-control" 
                    id="exampleInputEmail1" 
                    aria-describedby="emailHelp" 
                    placeholder='Email'/>                    
                </div> 
                <div className="mb-3">                    
                    <textarea 
                    className="form-control" 
                    id="exampleFormControlTextarea1" 
                    rows="3"
                    placeholder='Message'></textarea>
                </div>
                <button type="submit" className="btn contact__Form-Btn">Send Message</button>
            </form>
            </div>     
            <div className='contact__Rrss-Container'>
                <div className='contact__Rrss contactRrss-Hr-Line'>
                <i className="bi bi-linkedin icon"></i>
                <i className="bi bi-github icon"></i>
                <i className="bi bi-instagram icon"></i>
                <i className="bi bi-envelope-at icon"></i>
                </div>
            </div>
            <div className='contact__Copyright-Container'>
                <p className='contact__Copyright'>
                © 2023 Federico M. Stempler - All rights reserved
                </p>
            </div>
        </div>
        </>
    )
}

export default Contact