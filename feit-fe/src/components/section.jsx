import {levelContext} from '../untils/LevelContext';
import {useContext} from 'react';
export default function Section({children}) {
    const level = useContext(levelContext);
    return (
        <section className="section">
            <levelContext.Provider value={level + 1}>{children}</levelContext.Provider>
        </section>
    );
}
