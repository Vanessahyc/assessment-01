import styles from './SideNavigation.module.css'
import MenuItem from '@/components/MenuItem'
import Link from 'next/link'

export default function SideNavigation() {
    return(
        <>
            <div className={styles.imgContainer}>
                <img className={styles.pImage} src="/images/profile_image.jpg"/>
            </div>
            <div className={styles.vhTitle}>
                <h2 className={styles.h2}>Vanessa Huang</h2>
                <p className={styles.jobTitle}>UI/UX Designer</p>
            </div>
            <div className={styles.sideList}>
                <MenuItem title='Experiences' bgColor='var(--blue)' textColor='var(--white)' tabLeft='10px' />
                <Link href="/" className={styles.snhover}><MenuItem title='Education'/></Link>
                <Link href="/" className={styles.snhover}><MenuItem title='Projects'/></Link>
                <Link href="/" className={styles.snhover}><MenuItem title='Volunteering'/></Link>
                <Link href="/" className={styles.snhover}><MenuItem title='Skills'/></Link>
                <Link href="/" className={styles.snhover}><MenuItem title='Interests'/></Link>
            </div>
        </>
    )
}