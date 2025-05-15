import style from './HousingPage.module.scss';
import HeroCarousel from '../components/HeroCarousel.jsx';
import TitleHousing from '../components/TitleHousing.jsx';
import TagHousing from '../components/TagHousing.jsx';
import OwnerProfilHousing from '../components/OwnerProfilHousing.jsx';
import RatingScore from '../components/RatingScore.jsx';

export default function HousingPage() {
    return (
        <div className={style.HousingPage}>
            <HeroCarousel />
            <div>
                <TitleHousing titleMain={'blablablabla'} titleLocalize={'blablablabla blablablabla blablablabla'}/>
                <div>
                    <TagHousing tagName={'tag name'}/>
                    <TagHousing tagName={'tag name'}/>
                    <TagHousing tagName={'tag name'}/>
                </div>
            </div>
            <div>
                <OwnerProfilHousing ownerName={'blabla'} ownerLastName={'blabla'} />
                <RatingScore score={2}/>
            </div>
        </div>
    );
};