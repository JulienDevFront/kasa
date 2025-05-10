import style from './AboutSection.module.scss';

export default function AboutSection({titleSection, textSection}){
    return (
        <section className={style.AboutSection}>
            <div>
                <h2>{titleSection}</h2>
                <img src="./src/assets/images/icons/arrow-dropdown-24px.svg" alt={`Open to the descrition of ${titleSection}`} />
            </div>
            <p>{textSection}</p>
        </section>
    )
}