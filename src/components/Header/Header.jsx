
import React from 'react'
import styles from './Header.module.css'
import headerLogo from '../img/header_logo.svg'

export default function Header() {
    return (
        <>
            <div className={styles.header}>

                <div className={styles.headerLogo}>
                    <img src={headerLogo} alt='logo'></img>
                </div>
                <div>
                    <ul className={styles.headerList}>
                        <li>
                            О нас
                        </li>
                        
                        <li>
                            Услуги
                        </li>

                        <li>
                            Аренда
                        </li>
                    </ul>
                </div>

                <div className="header-button">
                    <button className={styles.button}>
                        Связаться
                    </button>
                </div>
            </div>
        </>
    )
}
