//css
import homeStyle from '../styles/homePage.module.css';

// images
// import bozonJanowski from '../images/bozon-janowski.jpg';
// import leftArrow from '../images/icons8-left-arrow-50.png'
// import rightArrow from '../images/icons8-right-arrow-50.png';
import semiImage from '../images/losowe-zdjecie-z-seminarium.jpg';
import researchImage from '../images/research-photo.jpg';
import projectImage from '../images/project-image.png';
import bozonTheme from '../images/bozon-nice-theme.jpg';
import Seminaria from './Seminaria.tsx';
// import atomImage from '../images/active-atom-icon.png';

const HomePage = () => {
    return (
        <div className={homeStyle['container']}>
            <div className={homeStyle['main-image-container']}>
                <img alt='zdjęcie z seminarium' src={semiImage}></img>
                <div className={homeStyle['text-container']}>
                    <h1>
                        Odkryj świat badań wraz z Bozonem.
                    </h1>
                    <h2>
                        Bozon łączy studentów z pasją do nauki i badań. Dołącz do nas i rozwijaj swoje umiejętności.
                    </h2>
                    <button>Dowiedz się więcej</button>
                </div>
            </div>
            <div className={homeStyle['second-part-container']}>
                <span>Działalność koła</span>
                <h1>Jak działa koło naukowe BOZON?</h1>
                <h3>Grupa badawcza Bozon łączy studentów z różnych kierunków,
                    aby wspólnie prowadzić innowacyjne projekty. Dołączając do
                    nas, zyskujesz możliwość rozwijania swoich umiejętności
                    oraz współpracy z pasjonatami nauki.</h3>
            </div>
            <div className={homeStyle['activity-container']}>
                <div className={homeStyle['activity-container-image']}>
                    <img alt='zdjecie' src={researchImage}></img>
                    <span>W jaki sposób dołączyc do Bozonu ?</span>
                    <h3>Kliknij w obrazek lub w zakładkę “Członkostwo” aby poznać więcej informacji.</h3>
                </div>
                <div className={homeStyle['activity-container-image']}>
                    <img alt='zdjecie' src={projectImage}></img>
                    <span>W jakich projektach obecnie można brać udział ?</span>
                    <h3>Projekty</h3>
                </div>
                <div className={homeStyle['activity-container-image']}>
                    <img alt='zdjecie' src={bozonTheme}></img>
                    <span>Jakie są korzyści z przynależności do koła ?</span>
                    <h3>Członkowie mają okazję do rozwijania swoich zainteresowań
                        nauką, uczestnictwo w wyjazdach grupowych, warsztatów i innych.</h3>
                </div>
            </div>
            <Seminaria />
        </div>
    )
}

export default HomePage;