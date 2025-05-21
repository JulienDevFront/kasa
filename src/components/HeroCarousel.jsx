import style from '../assets/styles/components/HeroCarousel.module.scss';
import arrowLeftCarousel from '../assets/images/icons/arrow-left-carousel.svg';
import arrowRightCarousel from '../assets/images/icons/arrow-right-carousel.svg';
import { useState } from 'react';

export default function HeroCarousel({ children }) {
    
    const [currentIndex, setCurrentIndex] = useState(0);
    const slides = children.length;

    const prevHandle = () => setCurrentIndex(i => i === 0 ? slides - 1 : i - 1);
    const nextHandle = () => setCurrentIndex(i => i === slides - 1 ? 0 : i + 1);

    return (
        <div className={style.HeroCarousel}>
            <div className={style.HeroCarousel__slide}>
                {children[currentIndex]}
            </div>
            <div className={style.HeroCarousel__utils}>
                <div className={style.leftAction} onClick={prevHandle}>
                    <img src={arrowLeftCarousel} alt='Previous image' />
                </div>
                <div className={style.rightAction} onClick={nextHandle}>
                    <img src={arrowRightCarousel} alt='Next image' />
                </div>
                <p className={style.positionCount}>{currentIndex + 1}/{slides}</p>
            </div>
        </div>
    );
}
