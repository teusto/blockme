import styles from "./Location.module.scss";
import lisbon from "../../assets/lisbon.mp4";

const Location = () => {
    return (
        <div className={styles.Location}>
            <video playsInline autoPlay muted loop>
                <source src={lisbon} type="video/mp4" />
            </video>
        </div>
    );
};

export default Location;