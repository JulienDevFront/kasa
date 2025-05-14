import style from './AboutPage.module.scss';
import HeroHeader from '../components/HeroHeader.jsx';
import AboutDropdown from '../components/AboutDropdown.jsx';
import aboutDatas from '../data/aboutDatas.json'; 

export default function AboutPage() {
    
    return (
        <div className={style.AboutPage}>
            <HeroHeader title={null} imgPath='mountainRiver.jpg'/>
            <section>
                { aboutDatas.map(data => 
                    <AboutDropdown 
                        key={data.id} 
                        titleSection={data.title} 
                        textSection={data.description} 
                    />
                )}
            </section>
        </div>
    );
};