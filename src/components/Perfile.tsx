import styles from '../styles/components/Profile.module.css';

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/gabynk.png" alt="Gabriele Nakassima" />

            <div>
                <strong>Gabriele Nakassima</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level 1
                </p>
            </div>
        </div>
    )
}