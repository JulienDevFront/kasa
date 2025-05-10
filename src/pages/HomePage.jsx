import HeroHeader from '../components/HeroHeader.jsx';
import HouseCard from '../components/HouseCard.jsx';
import style from './HomePage.module.scss';

export default function HomePage() {
    

    return (
        <div className={style.HomePage}>
            <HeroHeader title='Chez vous, partout et ailleurs' imgPath='rockyBeach.jpg' />
            <main>
                <HouseCard houseTitle='Name of the house' houseImg='null' houseLink='/housing/id'/>
                <HouseCard houseTitle='Name of the house' houseImg='null' houseLink='/housing/id'/>
                <HouseCard houseTitle='Name of the house' houseImg='null' houseLink='/housing/id'/>
                <HouseCard houseTitle='Name of the house' houseImg='null' houseLink='/housing/id'/>
                <HouseCard houseTitle='Name of the house' houseImg='null' houseLink='/housing/id'/>
                <HouseCard houseTitle='Name of the house' houseImg='null' houseLink='/housing/id'/>
            </main>
        </div>
    );
};
