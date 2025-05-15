import style from './DropdownList.module.scss';
import arrowIcon from '../assets/images/icons/arrow-dropdown-24px.svg';
import { useState } from 'react';

export default function DropdownList({title, lists}){
    
    const [isOpen, setIsOpen] = useState(false);
    const dropdownHandle = () => { setIsOpen(isOpen => !isOpen)};

    return (
        <article className={style.DropdownList} >
            <header>
                <h2>{title}</h2>
                <img 
                    onClick={dropdownHandle} 
                    className={isOpen ? style.rotateActive : ''} 
                    src={arrowIcon}
                    alt={`Open to the descrition of ${title}`} 
                />
            </header>
            <ul className={isOpen ? style.isVisible : ''}>
                {lists.map((list, currentIndex) => <li key={currentIndex}>{list}</li>)}
            </ul>
        </article>
    )
}