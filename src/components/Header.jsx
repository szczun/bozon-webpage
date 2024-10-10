//css
import headerStyle from '../styles/header.module.css';

// images
import bozonLogo from '../images/bozon-logo.jpg';
import homeLogo from '../images/home-button.png';
import hamburgerIcon from '../images/icons8-hamburger-menu-50.png';

const Header = () => {

    return (
        <section>
            <div className={headerStyle['header-page-container']}>
                <div className={headerStyle.home}>
                    <img alt='ikonka domu' src={homeLogo}></img>
                    <span>Strona główna</span>
                </div>
                <div className={headerStyle['bozon-icon-container']}>
                    <img alt='logo bozonu' className={headerStyle['bozon-icon']} src={bozonLogo}></img>
                </div>
                <div className={headerStyle['hamburger-icon-container']}>
                    <img alt='rozwiniecie menu' className={headerStyle['hamburger']} src={hamburgerIcon}></img>
                </div>
            </div >
        </section>
    )
}

export default Header;          