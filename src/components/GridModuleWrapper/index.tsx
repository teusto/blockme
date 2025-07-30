import { useState, useEffect, useRef } from 'react';
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
    overlayMessage?: string;
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
    className,
    overlayMessage 
}: GridModuleWrapperProps) => {
    const [showOverlay, setShowOverlay] = useState(false);
    const timeoutRef = useRef<number | null>(null);
    
    const gridStyle = {
        gridColumn: formatGridPosition(cols),
        gridRow: formatGridPosition(rows)
    };

    const handleMouseEnter = () => {
        if (overlayMessage) {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
            
            setShowOverlay(true);
            
            timeoutRef.current = setTimeout(() => {
                setShowOverlay(false);
            }, 2000);
        }
    };

    const handleMouseLeave = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        setShowOverlay(false);
    };

    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    return (
        <div 
            className={`${styles.GridModuleWrapper} ${className || ''}`} 
            style={gridStyle}
            data-title={title}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {children}
            {overlayMessage && (
                <div className={`${styles.overlay} ${showOverlay ? styles.overlayVisible : ''}`}>
                    <div className={styles.overlayContent}>
                        <p className={styles.overlayMessage}>{overlayMessage}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default GridModuleWrapper;