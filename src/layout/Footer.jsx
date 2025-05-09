import style from './Footer.module.scss';

export default function Footer(){
    return (
        <footer className={style.Footer}>
            <div>
                <img src='./src/assets/images/icons/logo-desktop-white.svg' alt='Logo of Kasa'/>    
            </div>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
};