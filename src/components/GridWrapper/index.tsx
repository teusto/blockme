import styles from "./GridWrapper.module.scss";
import GridModuleWrapper from "../GridModuleWrapper";

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
                    <GridModuleWrapper title="Module 1" cols={[1, 2]} rows={[1, 3]} children="Module 1"/>
                    <GridModuleWrapper title="Module 2" cols={[2, 3]} rows={[1, 4]} children="Module 2"/>
                    <GridModuleWrapper title="Module 3" cols={[3, 4]} rows={[1, 2]} children="Module 3"/>
                    <GridModuleWrapper title="Module 4" cols={[4, 6]} rows={[1, 2]} children="Module 4"/>
                    <GridModuleWrapper title="Module 5" cols={[1, 2]} rows={[3, 4]} children="Module 5"/>
                    <GridModuleWrapper title="Module 6" cols={[3, 6]} rows={[2, 4]} children="Module 6"/>
                    <GridModuleWrapper title="Module 7" cols={[1, 4]} rows={[4, 6]} children="Module 7" />
                    <GridModuleWrapper title="Module 8" cols={[4, 6]} rows={[4, 6]} children="Module 8" />
                </>
            )}
        </div>
    );
};

export default GridWrapper;