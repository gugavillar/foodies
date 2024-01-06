import Link from "next/link"
import Image from "next/image"

import logoImg from '@/assets/logo.png'
import { NavLink } from "./NavLink"

import styles from './MainHeader.module.css'
import { HeaderBackground } from "./HeaderBackground"

const Logo = () => {
  return (
    <Link href="/" className={styles.logo}>
      <Image src={logoImg} alt="A plate with some foods" priority />
      NextLevel food
    </Link>
  )
}

export const MainHeader = () => {
  return (
    <>
    <HeaderBackground />
    <header className={styles.header}>
      <Logo />
      <nav className={styles.nav}>
        <ul>
          <li><NavLink href="/meals">Browse meals</NavLink></li>
          <li><NavLink href="/community">Foodies community</NavLink></li>
        </ul>
      </nav>
    </header>
    </>
  )
}