import styles from "./info.module.css";

export default function Info(props){
    return (
        <>
        <section className={styles.container}>
            <div className={styles.content}>
            <div>
                <p className={styles.taskcreated}>Tarefas Criadas</p>
                <div>
                    <span>{props.tasks.length}</span>
                </div>
            </div>
            <div>
                <p className={styles.taskdone}>Concluidas</p>
                <div>
                    <span>{props.tasks.filter(task => task.isComplete).length} de {props.tasks.length}</span>
                </div>
            </div>
            </div>
        </section>
        </>
    )
}