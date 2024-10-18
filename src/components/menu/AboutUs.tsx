// images
import AboutUsImages, { h2Content } from "../import/importAboutUsImages"
//css
import aboutUsStyle from "../../styles/aboutus.module.css";

const AboutUs = () => {
    return (
        <div className={aboutUsStyle['about-us-container']}>
            <div className={aboutUsStyle['first-part']}>
                <div className={aboutUsStyle['image-container']}>
                    <img alt='zdjecie wybuchu' src={AboutUsImages.wybuchAzot}></img>
                </div>
                <div className={aboutUsStyle['text-container']}>
                    <h1>O Bozonie</h1>
                    <h2>{h2Content}</h2>
                </div>
            </div>
        </div>
    )
}
export default AboutUs;