import style from './HeroHeader.module.scss';

export default function HeroHeader(){
    return (
        <div className={style.HeroHeader}>
            <img src='./src/assets/images/pictures/rockyBeach.jpg' alt='Picture of the HeroHeader component'/>
            <h1>Chez vous, partout et ailleurs</h1>
        </div>
    );
};