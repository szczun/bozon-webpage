// CSS
import homeStyle from '../styles/homePage.module.css';

// images
import leftArrow from '../images/icons8-left-arrow-50.png';
import rightArrow from '../images/icons8-right-arrow-50.png';

import arrayImages from './import/importSemi';
import { useEffect, useState } from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react';
const Seminaria = () => {

    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const totalAmountOfImages: number = arrayImages.length;
    const [skipPhotoAni] = useAutoAnimate<HTMLDivElement>({ duration: 200 });

    useEffect(() => {
        arrayImages.forEach((src) => {
            const img = new Image();
            img.src = src; // ładuje obraz do pamięci przeglądarki
        });
    }, []);


    const nextImage = () => {
        if (currentIndex < totalAmountOfImages - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setCurrentIndex(0);
        }
    }

    const prevImage = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        } else {
            setCurrentIndex(totalAmountOfImages - 1)
        }

    }

    return (
        <div className={homeStyle['seminaria-container']}>
            <h1>Seminaria</h1>
            <h2>Zapraszamy na cowtorkowe seminaria, na
                których możecie czerpać wiedzę od pracowników Naszego wydziału!</h2>
            <h1 className={homeStyle['next-prev-semi']}>Nadchodzące i poprzednie seminaria</h1>
            <div className={homeStyle['seminaria-images-container']}>
                <div className={homeStyle['plakat-container']} ref={skipPhotoAni}>
                    <div key={currentIndex}>
                        <img alt='plakat' src={arrayImages[currentIndex]}></img>
                    </div>
                </div>
                <section>
                    <div className={homeStyle['arrow-image']} >
                        <button className={homeStyle['next-prev-button']} onClick={prevImage}><img alt='strzałka w lewo' src={leftArrow}></img></button>
                    </div>
                    <div className={homeStyle['arrow-image']}>
                        <button className={homeStyle['next-prev-button']} onClick={nextImage}><img alt='strzałka w prawo' src={rightArrow}></img></button>
                    </div>

                </section>
            </div>
        </div >
    )
}

export default Seminaria;