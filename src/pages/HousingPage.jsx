import style from './HousingPage.module.scss';
import HeroCarousel from '../components/HeroCarousel.jsx';
import TitleHousing from '../components/TitleHousing.jsx';
export default function HousingPage() {
    return (
        <div className={style}>
            <HeroCarousel />
            <div>
                <TitleHousing titleMain={'blablablabla'} titleLocalize={'blablablabla blablablabla blablablabla'}/>
            </div>
        </div>
    );
};