import Nav from './Nav.jsx';
import style from './Header.module.scss';

export default function Header({displayNav}){
    return (
        <header className={style.Header}>
            <img src='./src/assets/images/icons/logo-desktop.svg' alt='Logo of Kasa'/>
            { displayNav && <Nav /> }
        </header>
    )
}