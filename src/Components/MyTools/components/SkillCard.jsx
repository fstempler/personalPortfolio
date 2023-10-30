import './skillCard.css'

const SkillCard = ({ imageUrl, text, title }) => {
    return (        
        
            <div className="card" >
                <img src={imageUrl} className="card-img-top skillCard__Img" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{text}</p>    
                    </div>
            </div>
        
    )
}

export default SkillCard