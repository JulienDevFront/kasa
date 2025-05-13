import { useState } from 'react';
import style from './AboutDropdown.module.scss';

export default function AboutDropdown({titleSection, textSection}){
    
    const [isOpen, setIsOpen] = useState(false);
    const dropdownHandle = () => { setIsOpen(isOpen => !isOpen)};

    return (
        <section className={style.AboutDropdown} >
            <div>
                <h2>{titleSection}</h2>
                <img 
                    onClick={dropdownHandle} 
                    className={isOpen ? style.rotateActive : ''} 
                    src="./src/assets/images/icons/arrow-dropdown-24px.svg" 
                    alt={`Open to the descrition of ${titleSection}`} 
                />
            </div>
            <p className={isOpen ? style.isVisible : ''}>
                {textSection}
            </p>
        </section>
    )
}