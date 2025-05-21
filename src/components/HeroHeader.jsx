import style from '../assets/styles/components/HeroHeader.module.scss';

export default function HeroHeader({title = null, imgPath}){
    return (
        <aside className={style.HeroHeader}>
            <img src={`./src/assets/images/pictures/${imgPath}`} alt='Picture of the HeroHeader component'/>
            <h1>{title}</h1>
        </aside>
    );
};