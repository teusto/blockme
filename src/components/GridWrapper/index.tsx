import styles from "./GridWrapper.module.scss";
import GridModuleWrapper from "../GridModuleWrapper";
import Location from "../Location";
import Clock from "../Clock";
import Camera from "../Camera";
import Socials from "../Socials";

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
                    <GridModuleWrapper title="Module 1" cols={[1, 3]} rows={[1, 3]} children="Module 1"/>
                    <GridModuleWrapper title="Module 2" cols={[3, 6]} rows={[1, 4]} children="Module 2"/>
                    <GridModuleWrapper title="Module 3" cols={[8, 10]} rows={[1, 2]} children={<Clock/>}/>
                    <GridModuleWrapper title="Module 4" cols={[6, 8]} rows={[1, 2]} children={<Location/>}/>
                    <GridModuleWrapper title="Module 5" cols={[1, 3]} rows={[3, 4]} children={<Socials/>}/>
                    <GridModuleWrapper title="Module 6" cols={[6, 10]} rows={[2, 4]} children="Module 6"/>
                    <GridModuleWrapper title="Module 7" cols={[1, 7]} rows={[4, 6]} children="Module 7" />
                    <GridModuleWrapper title="Module 8" cols={[7, 10]} rows={[4, 6]} children={<Camera/>} />
                </>
            )}
        </div>
    );
};

export default GridWrapper;