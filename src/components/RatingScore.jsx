import style from './RatingScore.module.scss';
import starEmpty from '../assets/images/icons/star-empty-icon.svg';
import starActive from '../assets/images/icons/star-active-icon.svg';

export default function RatingScore({score}){
    const scoreOn = 5;

    return(
        <div className={style.RatingScore}>
            {[...Array(scoreOn)].map((_, index) => 
                <img key={index} src={score > index ? starActive : starEmpty} alt='Star icon' />
            )}
        </div>
    )
}