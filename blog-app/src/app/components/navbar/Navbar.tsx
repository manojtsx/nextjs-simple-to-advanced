import React from 'react'
import styles from "./navbar.module.css"
import Image from 'next/image'
import Link from 'next/link'
import AuthLinks from '../authLinks/ThemeToggle'
const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}></div>
      <Image src="/facebook.png" alt="facebook" width={24} height={24} />
      <Image src="/instagram.png" alt="instagram" width={24} height={24} />
      <Image src="/tiktok.png" alt="tiktok" width={24} height={24} />
      <div className={styles.logo}>
        manojblog
      </div>
      <div className={styles.links}>
        <Link href="/">Homepage</Link>
        <Link href="/">Contact</Link>
        <Link href="/">About</Link>
        <Link href="/write">Write</Link>
        <Link href="/login">Login</Link>
        <AuthLinks />
      </div>
    </div>
  )
}

export default Navbar