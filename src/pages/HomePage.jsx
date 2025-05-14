import style from './HomePage.module.scss';
import HeroHeader from '../components/HeroHeader.jsx';
import HouseCard from '../components/HouseCard.jsx';
import housingDatas from '../data/housingDatas.json';

export default function HomePage() {
    
    return (
        <div className={style.HomePage}>
            <HeroHeader title='Chez vous, partout et ailleurs' imgPath='rockyBeach.jpg' />
            <main>
                {housingDatas.map(data => 
                    <HouseCard 
                        key={data.id} 
                        houseTitle={data.title} 
                        houseImg={data.cover} 
                        houseLink={`/housing?id=${data.id}`} 
                    />
                )}
            </main>
        </div>
    );
};
