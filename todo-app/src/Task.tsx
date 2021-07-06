import { differenceInSeconds } from "date-fns";
import { Card } from "./Card";
import { SingleTask } from "./types/task";

interface Props {
    task: SingleTask;
    finishTask: (taskId: string) => void;
    reopenTask: (taskId: string) => void;
}

const Task = ({task, finishTask, reopenTask}: Props) => {

    const calculateDifference = () =>  {
        if(!task.finishedAt) return null;
        return differenceInSeconds(task.finishedAt, task.createdAt);
    }
    

    return (
        <Card title={task.name} as='li'>
            {task.description && <p><small>{task.description}</small></p>}
            <p>Created at: {task.createdAt.toLocaleString()}</p>
                {task.finishedAt && <>
                    <p>Finished at: {task.finishedAt.toLocaleString()}</p>
                    <p>Elapsed time <div className="badge bg-primary">{calculateDifference()} s</div></p>
                </>}

                {task.finishedAt 
                ? <button className='btn btn-lg btn-secondary' onClick={() => reopenTask(task.id)}>Reopen</button>  
                : <button className='btn btn-lg btn-success' onClick={() => finishTask(task.id)}>Close</button> }
         
        </Card>
    )
}

export { Task };
