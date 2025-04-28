import styles from "./task.module.css";
import  {Circle, Trash, CheckCircle} from "phosphor-react";



export default function Task(props){
    function handleChangeDone(){
        props.onToggleComplete(props.id);
    }
    

    return (
        <>
        <section className={styles.container}>
            <div>
                {props.isComplete 
                ? (
                    <>
                        <CheckCircle size={24} color="var(--blue)" onClick={handleChangeDone}/> 
                        <p className={styles.doneTask}>{props.message}</p>
                    </>
                )  :
                (
                    <>
                        <Circle size={24} color="var(--blue)" onClick={handleChangeDone}/> 
                        <p className={styles.doingTask}>{props.message}</p>
                    </>
                )}
            </div>
            <Trash size={24} className={styles.trash}/>
        </section>
        </>
    )
}