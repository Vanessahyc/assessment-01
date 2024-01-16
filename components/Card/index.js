import styles from './Card.module.css'

export default function Card({
    title="title",
    description="description",
    bgColor,
    borderColor
}) {
    return(
        <div style={{
            backgroundColor: bgColor,
            border: borderColor
        }} className={styles.boxContainer}>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}