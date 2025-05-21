import { NavLink } from "react-router-dom";
import style from '../assets/styles/components/HousingCard.module.scss';

export default function HousingCard({title, img, link}){
    return (
        <article className={style.HousingCard}>
            <NavLink to={link}>
                <img src={img} alt={`Image of ${title}`} />   
                <h2>{title}</h2>
            </NavLink>
        </article>
    );
};