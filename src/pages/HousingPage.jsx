import style from '../assets/styles/pages/HousingPage.module.scss';
import HeroCarousel from '../components/HeroCarousel.jsx';
import Slide from '../components/HousingSlide.jsx';
import TitleHousing from '../components/HousingTitle.jsx';
import TagHousing from '../components/HousingTag.jsx';
import OwnerProfilHousing from '../components/HousingProfile.jsx';
import RatingScore from '../components/HousingRating.jsx';
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
                {data.pictures.map((item) => <Slide key={item} img={item} alt={`Housing picture of ${data.title}`}/>)}
            </HeroCarousel>
            <section>
                <div className={style.HousingPage__titleAndTags}>
                    <TitleHousing title={data.title} localize={data.location}/>
                    <div className={style.HousingPage__titleAndTags__tags}>
                        {data.tags.map((tag, index) => <TagHousing key={index} name={tag}/>)}
                    </div>
                </div>
                <div className={style.HousingPage__ownerAndRating}>
                    <OwnerProfilHousing hostName={data.host.name} hostPicture={data.host.picture} />
                    <RatingScore rating={data.rating}/>
                </div>
            </section>
            <div className={style.HousingPage__descriptionAndEquipment}>
                <Dropdown title='Description' text={data.description}/>
                <DropdownList title='Équipements' lists={data.equipments}/>
            </div>
        </div>
    );
};