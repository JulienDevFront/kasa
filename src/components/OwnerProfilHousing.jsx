import style from './OwnerProfilHousing.module.scss';

export default function OwnerProfilHousing({hostName, hostPicture}){
    const name = hostName.split(' ')[0];
    const lastName = hostName.split(' ')[1];

    return (
        <section className={ style.OwnerProfilHousing}>
            <h3>
                <span>{name}</span>
                <span>{lastName}</span>
            </h3>
            <img src={hostPicture} alt={`Photo profile of ${hostName}`} />
        </section>
    )
}