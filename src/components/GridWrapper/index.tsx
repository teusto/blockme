import styles from "./GridWrapper.module.scss";
import GridModuleWrapper from "../GridModuleWrapper";
import Location from "../Location";
import Clock from "../Clock";
import Camera from "../Camera";
import Socials from "../Socials";
import Description from "../Description";
import CV from "../CV";
import ProjectsList from "../ProjectsList";
import PersonalGif from "../PersonalGif";

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
                        title="Personal GIF" 
                        cols={[1, 3]} 
                        rows={[1, 3]} 
                        colsMobile={[1, 6]}
                        rowsMobile={[1, 5]}
                        colsTablet={[1, 2]}
                        rowsTablet={[1, 2]}
                        children={<PersonalGif/>}
                        overlayMessage="That's me in action! 🎬"
                    />
                    <GridModuleWrapper 
                        title="CV" 
                        cols={[3, 6]} 
                        rows={[1, 4]} 
                        colsMobile={[1, 10]}
                        rowsMobile={[20, 26]}
                        colsTablet={[2, 4]}
                        rowsTablet={[1, 3]}
                        children={<CV/>}
                        overlayMessage="View or Download my CV - Theres more information but tbh trust me Im the right person for the job"
                    />
                    <GridModuleWrapper 
                        title="Clock" 
                        cols={[8, 10]} 
                        rows={[1, 2]} 
                        colsMobile={[6, 10]}
                        rowsMobile={[1, 2]}
                        colsTablet={[1, 2]}
                        rowsTablet={[3, 4]}
                        children={<Clock/>}
                        overlayMessage="You know what time it is? It's time for us to work together!"
                    />
                    <GridModuleWrapper 
                        title="Location" 
                        cols={[6, 8]} 
                        rows={[1, 2]} 
                        colsMobile={[6, 10]}
                        rowsMobile={[2, 3]}
                        colsTablet={[2, 3]}
                        rowsTablet={[3, 4]}
                        children={<Location/>}
                        overlayMessage="Lisbon, Portugal - Where I'm based (for now)"
                    />
                    <GridModuleWrapper 
                        title="Socials" 
                        cols={[1, 3]} 
                        rows={[3, 4]} 
                        colsMobile={[1, 10]}
                        rowsMobile={[5, 6]}
                        colsTablet={[1, 3]}
                        rowsTablet={[4, 5]}
                        children={<Socials/>}
                        overlayMessage="Go stalk me on socials a little bit"
                    />
                    <GridModuleWrapper 
                        title="Projects" 
                        cols={[6, 10]} 
                        rows={[2, 4]} 
                        colsMobile={[1, 10]}
                        rowsMobile={[6, 12]}
                        colsTablet={[1, 4]}
                        rowsTablet={[5, 7]}
                        children={<ProjectsList/>}
                        overlayMessage="Some of my recent work or stuff that I liked to do"
                    />
                    <GridModuleWrapper 
                        title="About" 
                        cols={[1, 7]} 
                        rows={[4, 6]} 
                        colsMobile={[1, 10]}
                        rowsMobile={[12, 20]}
                        colsTablet={[1, 4]}
                        rowsTablet={[7, 9]}
                        children={<Description/>}
                        overlayMessage="It's me, and it's all true"
                    />
                    <GridModuleWrapper 
                        title="Camera" 
                        cols={[7, 10]} 
                        rows={[4, 6]} 
                        colsMobile={[6, 10]}
                        rowsMobile={[3, 5]}
                        colsTablet={[1, 4]}
                        rowsTablet={[9, 10]}
                        children={<Camera/>}
                        overlayMessage="That's the person who will be working with me"
                    />
                </>
            )}
        </div>
    );
};

export default GridWrapper;