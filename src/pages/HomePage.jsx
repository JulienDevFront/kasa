import style from '../assets/styles/pages/HomePage.module.scss';
import img from '../assets/images/pictures/rockyBeach.jpg';
import HeroHeader from '../components/HeroHeader.jsx';
import HousingCard from '../components/HousingCard.jsx';
import housingDatas from '../data/housingDatas.json';

export default function HomePage() {
    
    return (
        <div className={style.HomePage}>
            <HeroHeader title='Chez vous, partout et ailleurs' img={img} />
            <div>
                {housingDatas.map(data => 
                    <HousingCard 
                        key={data.id} 
                        title={data.title} 
                        img={data.cover} 
                        link={`/housing/${data.id}`} 
                    />
                )}
            </div>
        </div>
    );
};
