import style from './Slide.module.scss';

export default function Slide({img, alt}){
    return (
        <img className={style.Slide} src={img} alt={`Housing picture of ${alt}`}/>
    )
}