import style from './TitleHousing.module.scss';

export default function TitleHousing({titleMain, titleLocalize}){

    return(
        <section className={style.TitleHousing}>
            <h1>{titleMain}</h1>
            <h2>{titleLocalize}</h2>
        </section>
    )
}