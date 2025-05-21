import style from '../assets/styles/components/Dropdown.module.scss';
import arrowIcon from '../assets/images/icons/arrow-dropdown-24px.svg';
import { useState } from 'react';

export default function Dropdown({title, text}){
    
    const [isOpen, setIsOpen] = useState(false);
    const dropdownHandle = () => { setIsOpen(isOpen => !isOpen)};

    return (
        <article className={style.Dropdown} >
            <header>
                <h2>{title}</h2>
                <img 
                    onClick={dropdownHandle} 
                    className={isOpen ? style.rotateActive : ''} 
                    src={arrowIcon}
                    alt={`Open to the descrition of ${title}`} 
                />
            </header>
            <p className={isOpen ? style.isVisible : ''}>
                {text}
            </p>
        </article>
    )
}