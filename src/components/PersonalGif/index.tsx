import styles from './PersonalGif.module.scss';
import eu from "../../assets/eu.mp4";

const PersonalGif = () => {
    return (
        <div className={styles.PersonalGif}>
            <div className={styles.videoContainer}>
                <video 
                    src={eu} 
                    className={styles.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                >
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
};

export default PersonalGif;
