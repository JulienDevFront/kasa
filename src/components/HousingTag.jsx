import style from '../assets/styles/components/HousingTag.module.scss';

export default function HousingTag({name}){
    return(
        <div className={style.HousingTag}>{name}</div>
    )
}