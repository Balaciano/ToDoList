import styles from "./info.module.css";

export default function Info(){
    return (
        <>
        <section className={styles.container}>
            <div className={styles.content}>
            <div>
                <p className={styles.taskcreated}>Tarefas Criadas</p>
                <div>
                    <span>5</span>
                </div>
            </div>
            <div>
                <p className={styles.taskdone}>Concluidas</p>
                <div>
                    <span>2 de 5</span>
                </div>
            </div>
            </div>
        </section>
        </>
    )
}