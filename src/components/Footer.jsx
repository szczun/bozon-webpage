//css
import footerCss from '../styles/footer.module.css';
// images
import FooterImages from './import/importFooterImages';


const Footer = () => {
    return (
        <div className={footerCss['footer-container']}>
            <div className={footerCss['logo-name-container']}>
                <img alt='logo bozonu' src={FooterImages.bozonIcon}></img>
                <span>SKNF BOZON</span>
            </div>
            <div className={footerCss['social-media-container']}>
                <img alt='facebook icon' src={FooterImages.facebookIcon}></img>
                <img alt='instagarm icon' src={FooterImages.instagramIcon}></img>
                <img alt='tikTok icon' src={FooterImages.tikTokIcon}></img>
            </div>
        </div >
    )
}

export default Footer;