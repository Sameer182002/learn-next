import UseTheme from '../themeContext/themeContext'
import styles from './skill.module.css'

export default function Skils(){
    const items = [
        'HTML',
        "CSS",
        "JAVASCRIPT",
        "NODEJS",
        'NEXTJS',
        'REACTJS'
    ]

    const {theme} = UseTheme()
    return(
        <div className={styles.wrapper}>
            {items.map(item=><p key={item} className={`${styles.skillItem} ${theme=="dark" && styles.darkItem}`}>{item}</p>)}
        </div>
    )
}