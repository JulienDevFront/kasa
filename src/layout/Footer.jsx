import style from '../assets/styles/layout/Footer.module.scss';
import logo from '../assets/images/icons/logo-desktop-white.svg';


export default function Footer(){
    return (
        <footer className={style.Footer}>
            <div>
                <img src={logo} alt='Logo of Kasa'/>    
            </div>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
};