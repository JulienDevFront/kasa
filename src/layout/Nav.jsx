import style from './Nav.module.scss';

export default function Header(){
    return (
        <nav className={style.Nav}>
            <ul>
                <li><a>Accueil</a></li>
                <li><a>A Propos</a></li>
            </ul>
        </nav>
    )
}