import style from '../assets/styles/components/HousingSlide.module.scss';

export default function HousingSlide({img, alt}){
    return (
        <img className={style.HousingSlide} src={img} alt={`Housing picture of ${alt}`}/>
    )
}