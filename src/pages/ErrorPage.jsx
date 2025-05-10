import { NavLink } from 'react-router-dom';
import style from './ErrorPage.module.scss';


export default function ErrorPage() {
    return (
        <main className={style.ErrorPage}>
            <h1>404</h1>
            <h2>Oups! La page que vous demandez n'existe pas.</h2>
            <NavLink to='/'>Retourner sur la page d’accueil</NavLink>
        </main>
    );
};