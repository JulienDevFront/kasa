import style from './OwnerProfilHousing.module.scss';

export default function OwnerProfilHousing({ownerName, ownerLastName, ownerImg}){
    return (
        <section className={ style.OwnerProfilHousing}>
            <h3>
                <span>{ownerName}</span>
                <span>{ownerLastName}</span>
            </h3>
            <img src={ownerImg} alt={`${ownerName}+' '+${ownerLastName}`} />
        </section>
    )
}