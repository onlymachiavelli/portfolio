import * as React from 'react';
import styles from './../../styles/Home.module.css';
import { Logo, Burger } from "./svg";
import Link from "next/link";
import { motion } from 'framer-motion';

const Navbar = () => {
    const [burger, setBurger] = React.useState("hidden");

    return (
        <header className='tablet:w-11/12 m-auto flex overflow-hidden tablet:overflow-hidden w-full pb-5 tablet:pb-0'>
            <Link href={"/"} className={"pl-10 tablet:pl-0"}>
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ rotate: 360, scale: 1 }}
                >
                    <Logo Width={"150"} />
                </motion.div>
            </Link>
            <section className={`pt-10 tablet:pt-0 w-full fixed tablet:relative tablet:w-full overflow-hidden tablet:flex ${burger}`}>
                <nav className={`${styles.nav} pl-10 p-1 pb-3 block bg-dark opacity-95 border-bottom relative tablet:mt-0 mt-5 w-full tablet:w-auto`}>
                    <Link href={""} className={`hover:font-bold ${styles.current_page} block tablet:inline`}>HOME</Link>
                    <Link href={""} className={"hover:font-bold block tablet:inline"}>SERVICES</Link>
                    <Link href={""} className={"hover:font-bold block tablet:inline"}>PORTFOLIO</Link>
                    <Link href={""} className={"hover:font-bold block tablet:inline"}>MY WORKS</Link>
                    <Link href={""} className={"hover:font-bold block tablet:inline"}>CONTACT</Link>
                    <Link href={""} className={"hover:font-bold block tablet:inline"}>ABOUT</Link>
                </nav>
                <div className='tablet:flex-1'></div>
                <div className='pt-1 lang text-center tablet:text-left'>
                    <button className={`text-red text-xs px-1 border-b border-red`}>ENG</button>
                    <button className='text-white text-xs px-1'>FR</button>
                    <button className='text-white text-xs px-1'>DE</button>
                </div>
            </section>
            <div className='flex-1 tablet:hidden'></div>
            <div className='m-0.5 pr-5 tablet:hidden' style={{ zIndex: 10 }}>
                <button
                    onClick={() => {
                        setBurger(burger === "hidden" ? "flex" : "hidden");
                    }}
                >
                    <Burger Width="30" Height="30" />
                </button>
            </div>
        </header>
    );
};

export default Navbar;
