import style from '../assets/styles/pages/AboutPage.module.scss';
import img from '../assets/images/pictures/mountainRiver.jpg'
import HeroHeader from '../components/HeroHeader.jsx';
import Dropdown from '../components/Dropdown.jsx';
import aboutDatas from '../data/aboutDatas.json'; 

export default function AboutPage() {
    
    return (
        <div className={style.AboutPage}>
            <HeroHeader title={null} img={img}/>
            <section>
                { aboutDatas.map(data => 
                    <Dropdown 
                        key={data.id} 
                        title={data.title} 
                        text={data.description} 
                    />
                )}
            </section>
        </div>
    );
};