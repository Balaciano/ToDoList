import styles from "./header.module.css";

import logo from "../../assets/Logo.png";

export default function Header(){
    return (
        <>
        <header className={styles.header}>
            <img src={logo} className={styles.logo}/>
        </header>
    </>
    )
}