import style from '../assets/styles/layout/App.module.scss';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import { Outlet } from 'react-router-dom';

export default function App(){
    return (
        <div className={style.App}>
            <Header displayNav={ true }/>
            <main>
                <Outlet/>   
            </main>
            <Footer />
        </div>
    )
}