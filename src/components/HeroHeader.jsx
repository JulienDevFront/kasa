import style from './HeroHeader.module.scss';

export default function HeroHeader({imgPath}){
    return (
        <aside className={style.HeroHeader}>
            <img src={`./src/assets/images/pictures/${imgPath}`} alt='Picture of the HeroHeader component'/>
            <h1>Chez vous, partout et ailleurs</h1>
        </aside>
    );
};