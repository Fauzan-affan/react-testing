import React from 'react'
import styles from "./Button.module.css"

export default function Button({label}) {
    return (
        <>
            <button data-testid="button" className={styles.button}>{label}</button>
        </>
    )
}
