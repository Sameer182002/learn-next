import UseTheme from '../themeContext/themeContext'
import styles from './toggle-button.module.css'

export default function ToggleButton(){
    const {theme,setTheme} = UseTheme()

    return (
        <div className={`${styles.toggleWrapper} ${theme=="dark" && styles.darkWrapper}`} onClick={()=>setTheme(theme=="light" ? "dark" : "light")}>
            <div className={`${styles.circle} ${theme == "dark" && styles.darkModeCircle}`}>
                {theme == "dark" ? <p>&#127769;</p> : <p> &#9788;</p>}
            </div>
        </div>
    )
}