import style from './HousingPage.module.scss';
import HeroCarousel from '../components/HeroCarousel.jsx';
export default function HousingPage() {
    return (
        <div className={style}>
            <HeroCarousel />
        </div>
    );
};