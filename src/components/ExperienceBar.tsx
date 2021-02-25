import { useContext } from 'react';

import { ChallengeContext } from '../contexts/ChallangesContext';

import styles from '../styles/components/ExperienceBar.module.css';

export function ExperienceBar() {
    const { currentExperience, experienceToNextLevel } = useContext(ChallengeContext);

    const porcentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;

    return (
        <header className={styles.experienceBar}>
            <span>0px</span>

            <div>
                <div style={{ width: `${porcentToNextLevel}%` }} />

                <span className={styles.currentExperience} style={{ left: `${porcentToNextLevel}%` }}>
                    {currentExperience} xp
                </span>
            </div>

            <span>{experienceToNextLevel} px</span>
        </header>
    )
}