import backgroundImage from '../../images/losowe-zdjecie-z-seminarium.jpg';
import researchPhoto from '../../images/research-photo.jpg';
import projectImage from '../../images/project-image.png';
import bozonNiceTheme from '../../images/bozon-nice-theme.jpg';

export interface IHomePageImages {
    [key: string]: string;
}

const homePageImages: IHomePageImages = {
    backgroundImage,
    researchPhoto,
    projectImage,
    bozonNiceTheme,
}



export default homePageImages;