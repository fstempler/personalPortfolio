import './project.css';
import klhome from '../../assets/Cards/cards__klhome.jpg';
import klventures from '../../assets/Cards/cards__klventures.jpg';
import silmar from '../../assets/Cards/cards_silmar.jpg';
import memoryTest from '../../assets/Cards/cards__MemoryTest.jpg';
import spincity from '../../assets/Cards/cards__spincity.jpg'

import CardRight from './Components/Cards/CardRight';


const Project = () => {
    return (
        <>
        <div className='project__Container'>
            <div className='project__Title-Container'>
                <h1 className='project__Title Title-Hr-Line'>
                    Projects
                </h1>
            </div>
            <div className='project__Cards-Container'>

                <CardRight 
                backgroundImage={klhome}
                title='KRAUSS & LIVIC'
                text='A Home Page for a international 
                management company. 
                
                Available in Vercel to see on-line.'
                tools='HTML | CSS | BOOTSTRAP | REACT JS | GIT '/>

                <CardRight
                backgroundImage={klventures}
                title='KRAUSS & LIVIC VENTURES'
                text='A home page for an engineering venture 
                capital firm with its own software 
                development company, focused on 
                propelling the growth of early-stage tech start-ups.'
                tools='HTML | CSS | BOOTSTRAP | REACT JS | GIT '/>

                <CardRight
                backgroundImage={silmar}
                title='SILMAR SALE APP'
                text='A sales app built for a local bakery that needed 
                a better tool to instantly give their 
                prices to their clients.'
                tools='HTML | CSS | BOOTSTRAP | JS | GIT '/>

                <CardRight
                backgroundImage={memoryTest}
                title='MEMORY TEST V0.1'
                text='A simple EMOJI memory test game in synthwave style. 
                
                Available in Vercel to see on-line.'
                tools='HTML | CSS | BOOTSTRAP | JS | GIT '/>

                <CardRight
                backgroundImage={spincity}
                title='SPIN CITY RECORDS'
                text='A record store e-commerce. Built with React Js  
                available  on my GitHub profile.
                
                Available in Vercel to see on-line.'
                tools='HTML | CSS | BOOTSTRAP | REACT JS | GIT '/>

            </div>

        </div>
        </>
    )
}

export default Project