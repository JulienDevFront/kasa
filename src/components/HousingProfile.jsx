import style from '../assets/styles/components/HousingProfile.module.scss';

export default function HousingProfile({hostName, hostPicture}){
    const name = hostName.split(' ')[0];
    const lastName = hostName.split(' ')[1];

    return (
        <section className={ style.HousingProfile}>
            <h3>
                <span>{name}</span>
                <span>{lastName}</span>
            </h3>
            <img src={hostPicture} alt={`Photo profile of ${hostName}`} />
        </section>
    )
}