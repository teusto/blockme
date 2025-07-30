import styles from "./GridWrapper.module.scss";
import GridModuleWrapper from "../GridModuleWrapper";
import Location from "../Location";
import Clock from "../Clock";
import Camera from "../Camera";
import Socials from "../Socials";
import Description from "../Description";
import CV from "../CV";
import ProjectsList from "../ProjectsList";

interface GridWrapperProps {
    columns?: number;
    rows?: number;
    gap?: string;
    children?: React.ReactNode;
}

const GridWrapper = ({ 
    columns = 5, 
    rows = 5, 
    gap = "0.6rem", 
    children 
}: GridWrapperProps) => {
    const gridStyle = {
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
        gap: gap
    };

    return (
        <div className={styles.GridWrapper} style={gridStyle}>
            {children || (
                <>
                    <GridModuleWrapper 
                        title="Module 1" 
                        cols={[1, 3]} 
                        rows={[1, 3]} 
                        children="Module 1"
                        overlayMessage="That's me"
                    />
                    <GridModuleWrapper 
                        title="CV" 
                        cols={[3, 6]} 
                        rows={[1, 4]} 
                        children={<CV/>}
                        overlayMessage="View or Download my CV - Theres more information but tbh trust me Im the right person for the job"
                    />
                    <GridModuleWrapper 
                        title="Clock" 
                        cols={[8, 10]} 
                        rows={[1, 2]} 
                        children={<Clock/>}
                        overlayMessage="You know what time it is? It's time for us to work together!"
                    />
                    <GridModuleWrapper 
                        title="Location" 
                        cols={[6, 8]} 
                        rows={[1, 2]} 
                        children={<Location/>}
                        overlayMessage="Lisbon, Portugal - Where I'm based (for now)"
                    />
                    <GridModuleWrapper 
                        title="Socials" 
                        cols={[1, 3]} 
                        rows={[3, 4]} 
                        children={<Socials/>}
                        overlayMessage="Go stalk me on socials a little bit"
                    />
                    <GridModuleWrapper 
                        title="Projects" 
                        cols={[6, 10]} 
                        rows={[2, 4]} 
                        children={<ProjectsList/>}
                        overlayMessage="Some of my recent work or stuff that I liked to do"
                    />
                    <GridModuleWrapper 
                        title="About" 
                        cols={[1, 7]} 
                        rows={[4, 6]} 
                        children={<Description/>}
                        overlayMessage="It's me, and it's all true"
                    />
                    <GridModuleWrapper 
                        title="Camera" 
                        cols={[7, 10]} 
                        rows={[4, 6]} 
                        children={<Camera/>}
                        overlayMessage="That's the person who's hiring me"
                    />
                </>
            )}
        </div>
    );
};

export default GridWrapper;