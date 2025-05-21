import style from '../assets/styles/components/HousingTitle.module.scss';

export default function HousingTitle({title, localize}){

    return(
        <section className={style.HousingTitle}>
            <h1>{title}</h1>
            <h2>{localize}</h2>
        </section>
    )
}