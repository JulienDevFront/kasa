import style from './HousingPage.module.scss';
import HeroCarousel from '../components/HeroCarousel.jsx';
import Slide from '../components/Slide.jsx';
import TitleHousing from '../components/TitleHousing.jsx';
import TagHousing from '../components/TagHousing.jsx';
import OwnerProfilHousing from '../components/OwnerProfilHousing.jsx';
import RatingScore from '../components/RatingScore.jsx';
import Dropdown from '../components/Dropdown.jsx';
import DropdownList from '../components/DropdownList.jsx';
import { useParams } from 'react-router-dom';
import housingDatas from '../data/housingDatas.json';

export default function HousingPage() {
    const { id } = useParams();
    const data = housingDatas.find(item => item.id === id);

    return (
        <div className={style.HousingPage}>
            <HeroCarousel>
                { data.pictures.map((item) => <Slide key={item} img={item} alt={`Housing picture of ${data.title}`}/>)}
            </HeroCarousel>
            <section>
                <div className={style.HousingPage__titleAndTags}>
                    <TitleHousing titleMain={data.title} titleLocalize={data.location}/>
                    <div className={style.HousingPage__titleAndTags__tags}>
                        {data.tags.map((tag, index) => <TagHousing key={index} tagName={tag}/>)}
                    </div>
                </div>
                <div className={style.HousingPage__ownerAndRating}>
                    <OwnerProfilHousing hostName={data.host.name} hostPicture={data.host.picture} />
                    <RatingScore score={data.rating}/>
                </div>
            </section>
            <div className={style.HousingPage__descriptionAndEquipment}>
                <Dropdown titleSection='Description' textSection={data.description}/>
                <DropdownList title='Équipements' lists={data.equipments}/>
            </div>
        </div>
    );
};