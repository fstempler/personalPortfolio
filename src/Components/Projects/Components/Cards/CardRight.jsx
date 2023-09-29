import './cardRight.css';

const CardRight = ({backgroundImage, title, text, linkGithub, linkContent, tools}) => {

    const cardStyle = {
        backgroundImage: `url(${backgroundImage})`,
    };

    return (
        <>      
        <div className='container card_Container'>
            <div className='row card__Row-Container'>
                <div style={cardStyle} className='col-md-6 card__Img-Container'>

                </div>
                <div className='col-md-5 card__Info-Container'>
                    <h4 className='card__Info-Title'>{title}</h4>
                    <div className='card__Info-Text-Container'>
                        <p className='card__Info-Text'>
                            {text}
                        </p>
                    </div>
                    <div className='card__Info-Icons-Container'>
                        <a href={linkGithub} target="_blank" rel="noreferrer"><i className="bi bi-github card__Info-Icon"></i></a>
                        <a href={linkContent} target="_blank" rel="noreferrer"><i className="bi bi-box-arrow-up-right card__Info-Icon"></i></a>
                    </div>
                    <div className='card__Info-Tools-Container'>
                        <p className='card__Info-Tools'>
                            {tools} 
                        </p>
                    </div>
                </div>                
            </div>
        </div>
        </>
    )
}

export default CardRight