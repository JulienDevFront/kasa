import style from './OwnerProfilHousing.module.scss';

export default function OwnerProfilHousing({hostName, hostPicture}){
    return (
        <section className={ style.OwnerProfilHousing}>
            <h3>
                <span>{hostName}</span>
                <span>{hostName}</span>
            </h3>
            <img src={hostPicture} alt={`Photo profile of ${hostName}`} />
        </section>
    )
}