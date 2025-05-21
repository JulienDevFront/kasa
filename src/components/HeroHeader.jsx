import style from '../assets/styles/components/HeroHeader.module.scss';

export default function HeroHeader({title = null, img}){
    return (
        <aside className={style.HeroHeader}>
            <img src={img} alt='Photograph of a landscape'/>
        <h1>{title && title.split(',').map((text, index, array) => 
            <span key={index}>{text}{index < array.length - 1 && ', '}</span>)}
        </h1>
        </aside>
    );
};