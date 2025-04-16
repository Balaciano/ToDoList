import styles from "./createButton.module.css";

import {PlusCircle} from "phosphor-react"

export default function CreateButton(props){
    return (
        <>
        <button className={styles.button} onClick={props.onClick} type="button">
            <p>Criar</p>
            <PlusCircle size={16} color="var(--gray-100)"/>
        </button>
        </>
    )
}