import style from './TagHousing.module.scss';

export default function HousingPage({tagName}){

    return(
        <div className={style.HousingPage}>{tagName}</div>
    )
}