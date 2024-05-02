import styles from './card.module.css'
import logo from "../logo192.png"
import UseTheme from '../themeContext/themeContext'
import ToggleButton from '../toggle-button/toggle-button'
import Skils from '../skills/skills'

export default function Card(){
    const {theme} = UseTheme()
    return (
        <div className={`${styles.wrapper} ${theme == "light" ? styles.lightWrapper: styles.darkWrapper}`}>
            <ToggleButton/>
            <h2>Sameer Bajaj</h2>
            <p>I am from Amritsar,Punjab</p>
            <Skils/>
        </div>
    )
}