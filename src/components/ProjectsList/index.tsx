import styles from "./ProjectsList.module.scss";

type StackType = 'web3' | 'frontend' | 'backend' | 'mobile' | 'blockchain';

interface Project {
    title: string;
    description: string;
    stack: StackType[];
}

const stackColors: Record<StackType, string> = {
    web3: '#f59e0b',      // Amber
    frontend: '#3b82f6',   // Blue
    backend: '#10b981',    // Emerald
    mobile: '#8b5cf6',      // Purple
    blockchain: '#D52941',      // Red
};

const projects: Project[] = [
    {
        title: "HarvestMoonDAO",
        description: "DAO for landowners and farmers work together to grow crops and make good use of the land.",
        stack: ['blockchain', 'frontend', 'backend']
    },
    {
        title: "Domenica",
        description: "Domanica creative agency website.",
        stack: ['frontend', 'web3']
    },
    {
        title: "Lara Healing",
        description: "Portfolio website.",
        stack: ['frontend', 'backend']
    },
    {
        title: "BPMe",
        description: "App that generates a playlist based on the BPM selected by the user.",
        stack: ['frontend', 'mobile']
    }
];

const ProjectsList = () => {
    return (
        <div className={styles.ProjectsList}>
            <div className={styles.projectsContainer}>
                {projects.map((project, index) => (
                    <div key={index} className={styles.projectItem}>
                        <div className={styles.projectContent}>
                            <h3 className={styles.projectTitle}>{project.title}</h3>
                            <p className={styles.projectDescription}>{project.description}</p>
                        </div>
                        <div className={styles.stackIndicators}>
                            {project.stack.map((stackItem, stackIndex) => (
                                <div
                                    key={stackIndex}
                                    className={styles.stackSquare}
                                    style={{ backgroundColor: stackColors[stackItem] }}
                                    title={stackItem.charAt(0).toUpperCase() + stackItem.slice(1)}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectsList;