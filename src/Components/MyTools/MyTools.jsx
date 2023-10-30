import './myTools.css';
import SkillCard from './components/SkillCard';
import html from '../../assets/Skills/html.png'
import css from '../../assets/Skills/css.png'
import js from '../../assets/Skills/js.png'
import react from '../../assets/Skills/react.png'
import reactNative from '../../assets/Skills/reactNative.png'
import git from '../../assets/Skills/git.png'
import figma from '../../assets/Skills/figma.png'
import firebase from '../../assets/Skills/firebase.png'
import illustrator from '../../assets/Skills/illustrator.png'
import photoshop from '../../assets/Skills/photoshop.png'
import bootstrap from '../../assets/Skills/bootstrap.png'
import sass from '../../assets/Skills/sass.png'
import tailwind from '../../assets/Skills/tailwind.png'
import github from '../../assets/Skills/github.png'

const MyTools = () => {
    return (
        <>
        <div className='myTools__Container'>
            <div className='myTools__Title-Container'>
                <h1 className='myTools__Title myToolsTitle-Hr-Line'>
                    My Tools
                </h1>
            </div>
                <div className='row myTools__Tools-Container'>                    
                    <SkillCard
                    imageUrl={html}
                    title={"HTML"}
                    text={"HTML, my creative canvas online, shapes ideas into interactive web wonders. With precision and passion, I craft seamless digital experiences, bridging imagination with reality."}
                    />
                    <SkillCard
                    imageUrl={css}
                    title={"CSS"}
                    text={"CSS, my digital paintbrush, adds style to web wonders. I blend colors, fonts, and layouts to create visually stunning, user-friendly masterpieces, turning visions into vibrant online realities."}
                    />
                    <SkillCard
                    imageUrl={js}
                    title={"JS"}
                    text={"JavaScript, my code sorcery, breathes life into websites. I craft dynamic, interactive experiences, making pages responsive and engaging. With every line, I enhance user journeys, creating seamless, immersive digital adventures."}
                    />
                    <SkillCard
                    imageUrl={react}
                    title={"REACT JS"}
                    text={"React.js, my dynamic toolkit, revolutionizes web experiences. I build responsive, high-performance interfaces with its modular brilliance, creating immersive and lightning-fast websites that captivate users."}
                    />
                    <SkillCard
                    imageUrl={reactNative}
                    title={"APP DEVELOPING"}
                    text={"React Native, my app alchemy, transforms ideas into mobile marvels. With a single codebase, I craft sleek, cross-platform applications, delivering seamless user experiences on both iOS and Android platforms."}
                    />
                    <SkillCard
                    imageUrl={sass}
                    title={"SASS"}
                    text={"Sass, my style enhancer, elevates web design. With its power, I create efficient, maintainable stylesheets, infusing projects with elegance and speed. It's my secret to crafting visually appealing and responsive websites with a touch of magic."}
                    />
                    <SkillCard
                    imageUrl={bootstrap}
                    title={"BOOTSTRAP"}
                    text={"Bootstrap, my design ally, simplifies elegance. With its responsive grid and components, I craft visually appealing, user-friendly websites swiftly, ensuring seamless experiences across devices. It's the key to turning concepts into captivating digital realities."}                    
                    />
                    <SkillCard
                    imageUrl={tailwind}
                    title={"TAILWIND"}
                    text={"Tailwind CSS, my intuitive toolkit, crafts sleek designs effortlessly. With utility classes, I build efficient, responsive interfaces, translating concepts into visually stunning web experiences with speed and precision."}                                        
                    />
                    <SkillCard
                    imageUrl={firebase}
                    title={"FIREBASE"}
                    text={"Firebase, my data sorcerer, empowers seamless apps. From real-time databases to robust authentication, I harness its magic to create secure, responsive, and dynamic web and mobile experiences, ensuring users always stay connected."}                                        
                    />
                    <SkillCard
                    imageUrl={git}
                    title={"GIT"}
                    text={"Git, my code time-travel, ensures collaboration harmony. With version control, I navigate coding landscapes confidently, preserving work at every step. It's the cornerstone for seamless teamwork, transforming ideas into digital masterpieces."}                                        
                    />
                    <SkillCard
                    imageUrl={github}
                    title={"GITHUB"}
                    text={"GitHub, my code sanctuary, fosters collaboration. I version, share, and innovate with a global community. It's where ideas thrive, code evolves, and projects transform into meaningful digital solutions."}                                        
                    />
                    <SkillCard
                    imageUrl={photoshop}
                    title={"PHOTOSHOP"}
                    text={"Photoshop, my digital canvas, paints dreams into reality. With its creative tools, I blend artistry and technology, crafting visually stunning graphics and designs that leave a lasting impression."}                                        
                    />
                    <SkillCard
                    imageUrl={illustrator}
                    title={"ILLUSTRATOR"}
                    text={"Illustrator, my vector virtuoso, shapes ideas with precision. With its versatile tools, I create stunning graphics, logos, and illustrations, turning concepts into visually captivating digital masterpieces."}                                        
                    />
                    <SkillCard
                    imageUrl={figma}
                    title={"FIGMA"}
                    text={"Figma, my collaborative canvas, redefines design. With real-time collaboration and prototyping, I craft interactive user interfaces seamlessly. It's where creativity meets collaboration, transforming visions into engaging digital experiences."}                                        
                    />
                </div>
            </div>            
        
        </>
    )
}

export default MyTools 