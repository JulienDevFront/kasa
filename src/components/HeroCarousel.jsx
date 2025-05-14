import style from './HeroCarousel.module.scss';
import arrowLeftCarousel from '../assets/images/icons/arrow-left-carousel.svg';
import arrowRightCarousel from '../assets/images/icons/arrow-right-carousel.svg';
// import housingDatas from '../data/housingDatas.json';
// import { useState } from 'react';

export default function HeroCarousel(){

    // const [slide, setSlide] = useState();

    return (
        <div className={style.HeroCarousel}>
            <div>
                
            </div>
            <div className={style.HeroCarousel__utils}>
                <div className={style.leftAction}>
                    <img src={arrowLeftCarousel} alt='Next image'/>
                </div>
                <p className={style.positionCount}>1/2</p>
                <div className={style.rightAction}>
                    <img src={arrowRightCarousel} alt='Previous image'/>
                </div>
            </div>
        </div>
    )
}