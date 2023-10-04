import './about.css';
import profilePic from '../../assets/About/about__profile.png'

const About = () => {
    return (
        <>
        <div className='about__Main-Container' id='About'>
            <div className='about__Title-Container'>
                <h1 className='about__Title aboutTitle-Hr-Line'>
                    About Me
                </h1>
            </div>
            <div className='about__Info-Container'>
                <div className='row'>
                    <div className='col-lg-6 about__ProfilePic-Container'>
                        <img src={profilePic} className='about__ProfilePic' alt='Federico Stempler Profile Picture' />
                    </div>
                    <div className='col-lg-5 about__Text-Container'>
                        <p className='about__Text'>
                        My name is Federico M. Stempler and I enjoy creating front-end applications, coding and learning new stuff constantly. I became interested in web development in 2005 at the age of 17 trying to edit custom Blogger themes, that thought me a lot about HTML and CSS. 
                        For many years my love for web developing and coding was only a hobby as I developed my career as an account manager and sales rep. for game companies such as Domo Sur and Devir. Then I became interested in marketing and I started a carrer as a freelance marketing consultant for different companies and worked with different marketing agencies as Wow Marketing & Comunicación, Luz Digital and One Love. 
                        Today I perfected my skills in front-end developing in CoderHouse, where I learned HTML, CSS, JS, React and every tool needed to build accesible, inclusive products and digital experiences for a variety of clients. 
                        I'm open to job opportunities where I can contribute, learn and grow. 
                        <br/>
                        <span className='about__Text-Strong'>Let's work together!</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default About