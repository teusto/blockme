import { useEffect, useRef, useState } from 'react';
import styles from './Camera.module.scss';

const Camera = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const streamRef = useRef<MediaStream | null>(null);

    useEffect(() => {
        const startCamera = async () => {
            try {
                setIsLoading(true);
                setError(null);

                // Request camera access
                const stream = await navigator.mediaDevices.getUserMedia({
                    video: {
                        width: { ideal: 1280 },
                        height: { ideal: 720 },
                        facingMode: 'user' // Front-facing camera
                    },
                    audio: false
                });

                streamRef.current = stream;

                // Set video source to the camera stream
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                }

                setIsLoading(false);
            } catch (err) {
                console.error('Error accessing camera:', err);
                setError('Camera access denied or not available');
                setIsLoading(false);
            }
        };

        startCamera();

        // Cleanup function to stop camera when component unmounts
        return () => {
            if (streamRef.current) {
                streamRef.current.getTracks().forEach(track => {
                    track.stop();
                });
            }
        };
    }, []);

    if (error) {
        return (
            <div className={styles.Camera}>
                <div className={styles.error}>
                    <p>📷</p>
                    <span>{error}</span>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.Camera}>
            {isLoading && (
                <div className={styles.loading}>
                    <p>📷</p>
                    <span>Loading camera...</span>
                </div>
            )}
            <video
                ref={videoRef}
                autoPlay
                playsInline
                muted
                className={styles.video}
                style={{ display: isLoading ? 'none' : 'block' }}
            />
        </div>
    );
};

export default Camera;