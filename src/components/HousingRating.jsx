import style from '../assets/styles/components/HousingRating.module.scss';
import starEmpty from '../assets/images/icons/star-empty-icon.svg';
import starActive from '../assets/images/icons/star-active-icon.svg';

export default function HousingRating({rating}){
    const scoreOn = 5;

    return(
        <div className={style.HousingRating}>
            {[...Array(scoreOn)].map((_, index) => 
                <img key={index} src={rating > index ? starActive : starEmpty} alt='Star icon' />
            )}
        </div>
    )
}