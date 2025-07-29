import { useState, useEffect } from 'react';
import styles from "./Clock.module.scss";

const Clock = () => {
    const [time, setTime] = useState<string>('');

    useEffect(() => {
        // Function to update time
        const updateTime = () => {
            const now = new Date();
            const hours = now.getHours().toString().padStart(2, '0');
            const minutes = now.getMinutes().toString().padStart(2, '0');
            setTime(`${hours}:${minutes}`);
        };

        // Set initial time
        updateTime();

        // Set up interval to update every minute
        const interval = setInterval(updateTime, 60000);

        // Cleanup interval on component unmount
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.Clock}>
            <time className={styles.time} dateTime={new Date().toISOString()}>
                {time}
            </time>
        </div>
    );
};

export default Clock;