import styles from "./GridModuleWrapper.module.scss";

// Grid position can be defined in multiple ways for flexibility
type GridPosition = 
    | string                    // "1/3" or "span 2"
    | [number, number]          // [startLine, endLine] - e.g., [1, 3]
    | { start: number; end: number }    // { start: 1, end: 3 }
    | { start: number; span: number };  // { start: 1, span: 2 }

interface GridModuleWrapperProps {
    children: React.ReactNode;
    title: string;
    cols?: GridPosition;
    rows?: GridPosition;
    className?: string;
}

const formatGridPosition = (position?: GridPosition): string | undefined => {
    if (!position) return undefined;
    
    if (typeof position === 'string') {
        return position;
    }
    
    if (Array.isArray(position)) {
        const [start, end] = position;
        return `${start} / ${end}`;
    }
    
    if ('span' in position) {
        return `${position.start} / span ${position.span}`;
    }
    
    if ('end' in position) {
        return `${position.start} / ${position.end}`;
    }
    
    return undefined;
};

const GridModuleWrapper = ({ 
    children, 
    title, 
    cols, 
    rows, 
    className 
}: GridModuleWrapperProps) => {
    const gridStyle = {
        gridColumn: formatGridPosition(cols),
        gridRow: formatGridPosition(rows)
    };

    return (
        <div 
            className={`${styles.GridModuleWrapper} ${className || ''}`} 
            style={gridStyle}
            data-title={title}
        >
            {children}
        </div>
    );
};

export default GridModuleWrapper;