import styles from './MenuItem.module.css'

export default function MenuItem({
    title="",
    bgColor,
    textColor,
    tabLeft
}) {
    return(
        <p style={{
            backgroundColor: bgColor, 
            color: textColor, 
            paddingLeft: tabLeft
        }} className={styles.mgright}>{title}</p>
    )
}