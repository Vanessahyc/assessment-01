import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'
import MenuItem from '@/components/MenuItem'
import SideNavigation from '@/components/SideNavigation'
import Card from '@/components/Card'
import Footer from '@/components/Footer'


export default function Home() {
  return (
    <>
      <Head>
        <title>Assessment 1</title>
        <meta name="description" content="This is for assessment 1" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
        <div className={styles.wrapper}>
          <div className={styles.sideNav}>
            <SideNavigation/>
          </div>
          <div className={styles.mainarea}>
            <Header/>
            <div className={styles.d_flex}>
              <Card title='Experiences' description='Teaching at BCIT' color='blue' borderColor='5px solid red'/>
              <Card title='Education' description='Digital Design and Development Diploma' borderColor='5px solid orange'/>
            </div>
            <div className={styles.d_flex}>
              <Card title='Projects' description='Website create with HTML and CSS' borderColor='5px solid yellow'/>
              <Card title='Volunteering' description='I helped out at the Wildlife Rescue Association by feeding animals and cleaning penss' borderColor='5px solid green'/>
            </div>
            <div className={styles.d_flex}>
              <Card title='Skills' description='Nextjs, HTML, CSS, JavaScript, Playwright, JEST' borderColor='5px solid blue' className={styles.skills}/>
              <Card title='Interests' description='I like biking' borderColor='5px solid violet'/>
            </div>
          </div>
        </div>
      </main>
      <div className={styles.footerC}>
        <Footer/>
      </div>
    </>
  )
}
