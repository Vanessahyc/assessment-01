import styles from './SideNavigation.module.css'
import MenuItem from '@/components/MenuItem'

export default function SideNavigation() {
    return(
        <>
            <div className={styles.imgContainer}>
                <img className={styles.picon} src="/images/profile_icon.jpeg"/>
            </div>
            <div className={styles.vhTitle}>
                <h2 className={styles.h2}>Vanessa Huang</h2>
                <p className={styles.jobTitle}>UI/UX Designer</p>
            </div>
            <div className={styles.sideList}>
                <MenuItem title='Experiences' bgColor='var(--blue)' textColor='var(--white)' tableft='10px' className={styles.pdLeft}/>
                <MenuItem title='Education'/>
                <MenuItem title='Projects'/>
                <MenuItem title='Volunteering'/>
                <MenuItem title='Skills'/>
                <MenuItem title='Interests'/>
            </div>
        </>
    )
}