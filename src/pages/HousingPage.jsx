import style from './HousingPage.module.scss';
import HeroCarousel from '../components/HeroCarousel.jsx';
import TitleHousing from '../components/TitleHousing.jsx';
import TagHousing from '../components/TagHousing.jsx';
import OwnerProfilHousing from '../components/OwnerProfilHousing.jsx';
import RatingScore from '../components/RatingScore.jsx';
import Dropdown from '../components/Dropdown.jsx';
import { useParams } from 'react-router-dom';

export default function HousingPage() {
    let urlParams = useParams();
    console.log(urlParams.id);

    return (
        <div className={style.HousingPage}>
            <HeroCarousel />
            <section>
                <div className={style.HousingPage__titleAndTags}>
                    <TitleHousing titleMain={'blablablabla'} titleLocalize={'blablablabla blablablabla blablablabla'}/>
                    <div className={style.HousingPage__titleAndTags__tags}>
                        <TagHousing tagName={'tag name'}/>
                        <TagHousing tagName={'tag name'}/>
                        <TagHousing tagName={'tag name'}/>
                    </div>
                </div>
                <div className={style.HousingPage__ownerAndRating}>
                    <OwnerProfilHousing ownerName={'blabla'} ownerLastName={'blabla'} />
                    <RatingScore score={4}/>
                </div>
            </section>
            <div className={style.HousingPage__descriptionAndEquipment}>
                <Dropdown titleSection={'blabla'} textSection={'blabla'}/>
                <Dropdown titleSection={'blabla'} textSection={'blabla'}/>
            </div>
        </div>
    );
};