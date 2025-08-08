import { useState } from 'react';
import styles from './CV.module.scss';
import cvPdf from '/Matheus_Toscano__CV__2025.pdf';

const CV = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = cvPdf;
        link.download = 'Matheus_Toscano_CV_2025.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleView = () => {
        // Open PDF in new tab for viewing
        window.open(cvPdf, '_blank');
    };

    return (
        <div 
            className={styles.CV}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={styles.pdfPreview}>
                <iframe
                    src={`${cvPdf}#toolbar=0&navpanes=0&scrollbar=0`}
                    className={styles.pdfFrame}
                    title="CV Preview"
                />
            </div>
            {isHovered && (
                <div className={styles.overlay}>
                    <div className={styles.actions}>
                        <button 
                            onClick={handleView}
                            className={styles.actionButton}
                            aria-label="View CV"
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                            </svg>
                        </button>
                        <button 
                            onClick={handleDownload}
                            className={styles.actionButton}
                            aria-label="Download CV"
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CV;