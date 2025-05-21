import style from '../assets/styles/layout/Nav.module.scss';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default function Nav(){
    const routes = [
        {
            path: '/',
            name: 'Accueil'
        }, {
            path: '/About',
            name: 'A Propos'
        }
    ];

    const location = useLocation();

    return (
        <nav className={style.Nav}>
            <ul>
                { routes.map(route => 
                    <li key={route.path}>
                        <NavLink 
                            to={route.path} 
                            className={ location.pathname === route.path ? style.isActive : ''}>
                                {route.name}
                        </NavLink>
                    </li>
                )}
            </ul>
        </nav>
    )
}