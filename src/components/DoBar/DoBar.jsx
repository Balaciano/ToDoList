import CreateButton from "../CreateButton/CreateButton";
import styles from "./doBar.module.css";

export default function DoBar(props){


    return (
        <>
            <section className={styles.container}>
                <input className={styles.bar} placeholder="Adicione uma nova tarefa" />
                <CreateButton onClick={props.onClick} />
            </section>
        </>
    )
}