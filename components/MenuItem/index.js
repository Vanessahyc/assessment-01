import styles from './MenuItem.module.css'

export default function MenuItem({
    title="",
    bgColor,
    textColor,
    tableft
}) {
    return(
        <p style={{
            backgroundColor: bgColor, 
            color: textColor, 
            paddingLeft: tableft
        }} className={styles.mgright}>{title}</p>
    )
}