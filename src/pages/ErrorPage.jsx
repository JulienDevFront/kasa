import style from '../assets/styles/pages/ErrorPage.module.scss';
import Header from '../layout/Header.jsx';
import Footer from '../layout/Footer.jsx';
import { NavLink } from 'react-router-dom';


export default function ErrorPage() {
    return (
        <>
        <Header displayNav={true}/>
        <main className={style.ErrorPage}>
            <h1>404</h1>
            <h2>Oups! La page que vous demandez n'existe pas.</h2>
            <NavLink to='/'>Retourner sur la page d’accueil</NavLink>
        </main>
        <Footer />
        </>
    );
};