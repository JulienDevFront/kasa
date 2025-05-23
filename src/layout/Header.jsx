import style from '../assets/styles/layout/Header.module.scss';
import logo from '../assets/images/icons/logo-desktop.svg';
import Nav from './Nav.jsx';

export default function Header({displayNav}){
    return (
        <header className={style.Header}>
            <img src={logo} alt='Logo of Kasa'/>
            { displayNav && <Nav /> }
        </header>
    )
}