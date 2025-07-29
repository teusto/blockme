import './assets/styles/global.scss';
import styles from './styles/app.module.scss';
import GridWrapper from './components/GridWrapper';

const App = () => {
    return (
        <div className={styles.App}>
            <GridWrapper columns={9} />
        </div>
    );
};

export default App;