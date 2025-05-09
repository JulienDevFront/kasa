import { NavLink } from "react-router-dom";
import style from './HouseCard.module.scss';

export default function HouseCard({houseTitle, houseImg, houseLink}){
    return (
        <article className={style.HouseCard}>
            <NavLink to={houseLink}>
                <img src={houseImg} alt={`Image of ${houseTitle}`} />   
                <h2>{houseTitle}</h2>
            </NavLink>
        </article>
    );
};