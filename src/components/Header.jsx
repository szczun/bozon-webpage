//css
import headerStyle from '../styles/header.module.css';

// react things
import { Link } from 'react-router-dom';
import { useState } from 'react';

// react components
import MenuModal from './MenuModal';

//images
import headerPageImages from './import/importHeaderImages';

const Header = ({ showModal, setShowModal }) => {

    const [isTransitioning, setIsTransitioning] = useState(false);
    const toggleModal = () => {
        if (isTransitioning) return;

        setIsTransitioning(true);
        setShowModal(prev => !prev);

        setTimeout(() => {
            setIsTransitioning(false);
        }, 200);
    };
    return (
        <section>
            <div className={headerStyle['header-page-container']}>
                <Link to='/' className={headerStyle['home']}>
                    <img alt='ikonka domu' src={headerPageImages.homeButton}></img>
                    <span>Strona główna</span>
                </Link>
                <div className={headerStyle['bozon-icon-container']}>
                    <img alt='logo bozonu' className={headerStyle['bozon-icon']} src={headerPageImages.bozonLogo}></img>
                </div>
                <div className={headerStyle['hamburger-icon-container']}>
                    <button
                        onClick={toggleModal}
                        style={{ display: 'flex', justifyContent: 'center', backgroundColor: 'transparent', border: 'none' }}>
                        <img alt='rozwiniecie menu' className={headerStyle['hamburger']} src={headerPageImages.hamburgerIcon}></img>
                        {showModal &&
                            (
                                <MenuModal>
                                    <ul>
                                        <Link to={'/o-nas'}><li>O nas</li></Link>
                                        <Link to={'/kontakt'}><li>Kontakt</li></Link>
                                        <Link><li>Członkostwo</li></Link>
                                        <Link><li>Projekty</li></Link>
                                        <Link><li>Galeria</li></Link>
                                    </ul>
                                </MenuModal>
                            )}
                    </button>
                </div>
            </div >
        </section>
    )
}

export default Header;          