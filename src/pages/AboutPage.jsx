import style from './AboutPage.module.scss';
import HeroHeader from '../components/HeroHeader.jsx';
import AboutSection from '../components/AboutSection.jsx';

export default function AboutPage() {
    return (
        <main className={style.AboutPage}>
            <HeroHeader title={null} imgPath='mountainRiver.jpg'/>
            <AboutSection titleSection='title of the section' textSection='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio optio quas aliquid quod officia dicta est adipisci. Omnis distinctio harum consequatur similique nisi ullam obcaecati molestias at! Vel, ducimus magni.'/>
            <AboutSection titleSection='title of the section' textSection='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio optio quas aliquid quod officia dicta est adipisci. Omnis distinctio harum consequatur similique nisi ullam obcaecati molestias at! Vel, ducimus magni.'/>
            <AboutSection titleSection='title of the section' textSection='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio optio quas aliquid quod officia dicta est adipisci. Omnis distinctio harum consequatur similique nisi ullam obcaecati molestias at! Vel, ducimus magni.'/>
            <AboutSection titleSection='title of the section' textSection='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio optio quas aliquid quod officia dicta est adipisci. Omnis distinctio harum consequatur similique nisi ullam obcaecati molestias at! Vel, ducimus magni.'/>
        </main>
    );
};