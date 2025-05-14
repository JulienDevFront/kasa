import style from './HousingPage.module.scss';
import HeroCarousel from '../components/HeroCarousel.jsx';
import TitleHousing from '../components/TitleHousing.jsx';
import OwnerProfilHousing from '../components/OwnerProfilHousing.jsx';

export default function HousingPage() {
    return (
        <div className={style.HousingPage}>
            <HeroCarousel />
            <div>
                <TitleHousing titleMain={'blablablabla'} titleLocalize={'blablablabla blablablabla blablablabla'}/>
                <OwnerProfilHousing ownerName={'blabla'} ownerLastName={'blabla'} />
            </div>
        </div>
    );
};