import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser'
import 'react-toastify/dist/ReactToastify.css';
import './contact.css';
import { HashLink as Link } from 'react-router-hash-link';


const Contact = () => {
    
    const [formData, setFormData] = useState({
        Name: '',
        Email: '',
        Message: ''
      });
      
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value
        }));
      };
      
      const handleSubmit = (e) => {
        e.preventDefault();
      
        // Validación de datos por si no funcionara Bootstrap
        if (formData.Name === '' || formData.Email === '' || formData.Message === '') {
          toast.error('Please fill out all fields');
        
          return;
        }
      
        // Lógica para enviar el formulario (puedes usar aquí tu lógica de enviar datos a un servidor o enviar un correo electrónico)
        emailjs.sendForm('service_cugd3lr', 'template_n7mkcbn', e.target, 'sZsJy-M6uveQyxuIa')
        // Limpiar el formulario después del envío
        

        setFormData({
          Name: '',
          Email: '',
          Message: '',
        });

        // Mensaje de éxito
        toast.success('Thank you!', {
          position: 'top-center',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light'
        });        
        
      };       
      

    return (
        <>
        <div className='contact__Main-Container' id='Contact'>
            <div className='contact__Title-Container'>
                <h1 className='contact__Title contactTitle-Hr-Line'>
                    Contact
                </h1>
            </div>
            <div className='contact__Form-Container container'>
            <form className='contact__Form' onSubmit={handleSubmit}>
                <div className="mb-3">                    
                    <input 
                    type="text" 
                    className="form-control" 
                    id="exampleInputEmail1" 
                    aria-describedby="Name" 
                    placeholder='Name'
                    name='Name'
                    value={formData.Name}
                    onChange={handleChange}
                    required/>                    
                </div>  
                <div className="mb-3">                    
                    <input 
                    type="email" 
                    className="form-control" 
                    id="exampleInputEmail1" 
                    aria-describedby="email" 
                    placeholder='Email'
                    name='Email'
                    value={formData.Email}
                    onChange={handleChange}
                    required/>                    
                </div> 
                <div className="mb-3">                    
                    <textarea 
                    className="form-control" 
                    id="exampleFormControlTextarea1" 
                    rows="3"
                    placeholder='Message'
                    name='Message'
                    value={formData.Message}
                    onChange={handleChange}
                    required></textarea>
                </div>
                <button type="submit" className=" contact__Form-Btn">Send Message</button>
            </form>
            </div>
               
            <div className='contact__Rrss-Container'>
                <div className='contact__TopBtn'>
                  <a href='#' className='contact__Top-Btn'>Back to Top <span className='arrowIcon'><i className="bi bi-arrow-90deg-up"></i></span></a>
                </div>  
                <div className='contact__Rrss contactRrss-Hr-Line'>
                  <Link to='https://www.linkedin.com/in/federico-stempler/' target='_blank'><i className="bi bi-linkedin icon"></i></Link>
                  <Link to='https://github.com/fstempler' target='_blank'><i className="bi bi-github icon"></i></Link>
                  <Link to='https://www.instagram.com/fmstempler/'target='_blank'><i className="bi bi-instagram icon"></i></Link>
                  <Link to='mailTo:fmstempler@gmail.com'><i className="bi bi-envelope-at icon"></i></Link>
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