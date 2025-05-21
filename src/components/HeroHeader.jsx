import style from '../assets/styles/components/HeroHeader.module.scss';

export default function HeroHeader({title = null, img}){
    return (
        <aside className={style.HeroHeader}>
            <img src={img} alt='Photograph of a landscape'/>
            <h1>{title}</h1>
        </aside>
    );
};