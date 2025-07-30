import styles from './Description.module.scss';

const Description = () => {
    return (
        <div className={styles.Description}>
            <div className={styles.content}>
                <div className={styles.section}>
                    <div className={styles.sectionHeader}>
                        <div className={styles.dot}></div>
                        <span className={styles.label}>Stack</span>
                    </div>
                    <p className={styles.paragraph}>
                        I master the full spectrum from web to blockchain development with React, React Native, 
                        and TypeScript for frontend excellence. My backend expertise spans Node.js with MongoDB 
                        for scalable applications, while I build decentralized solutions using Solana and Rust. 
                        This unique combination lets me create everything from mobile apps to DeFi protocols.
                    </p>
                </div>
                
                <div className={styles.divider}>
                    <div className={styles.dividerLine}></div>
                    <div className={styles.dividerDot}></div>
                    <div className={styles.dividerLine}></div>
                </div>
                
                <div className={styles.section}>
                    <div className={styles.sectionHeader}>
                        <div className={styles.dot}></div>
                        <span className={styles.label}>Build</span>
                    </div>
                    <p className={styles.paragraph}>
                        I create immersive digital experiences for creative agencies and cutting-edge blockchain 
                        applications. From future award-winning brand websites and interactive campaigns to DeFi platforms 
                        and DAO governance systems, I bring creative visions to life with pixel-perfect execution 
                        and seamless Web3 integration.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Description;