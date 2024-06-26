import './header.css';



const Header = () => {
    return (
        <>
        <div className='header__Container' id='Header'>
            <div className='header__Text-Container row'>
                <p className='header__Text-First'>Hello! My name is</p>
                <h1 className='header__Text-Name'>Federico M. Stempler</h1>
                <p className='header__Text-Subtext'>I am a front-end and mobile app developer, specialized in building great digital experiences.</p>
                <a href='#Contact'><h6 className='header__Text-Subtitle hr-line'>Let's work together!</h6></a>
            </div>
        </div>
        </>
    )
}

export default Header