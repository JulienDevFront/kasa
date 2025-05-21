import style from '../assets/styles/pages/AboutPage.module.scss';
import HeroHeader from '../components/HeroHeader.jsx';
import Dropdown from '../components/Dropdown.jsx';
import aboutDatas from '../data/aboutDatas.json'; 

export default function AboutPage() {
    
    return (
        <div className={style.AboutPage}>
            <HeroHeader title={null} imgPath='mountainRiver.jpg'/>
            <section>
                { aboutDatas.map(data => 
                    <Dropdown 
                        key={data.id} 
                        titleSection={data.title} 
                        textSection={data.description} 
                    />
                )}
            </section>
        </div>
    );
};