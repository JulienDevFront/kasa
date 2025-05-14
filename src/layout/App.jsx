import style from './App.module.scss';
import { Outlet } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

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