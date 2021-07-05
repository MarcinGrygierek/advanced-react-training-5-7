import { SingleTask } from "./types/task";

interface Props {
    task: SingleTask;
    finishTask: (taskId: string) => void;
}

const Task = ({task, finishTask}: Props) => {
  return (
    <li className="card mt-3">
        <div className="card-body">
            <h2 className="cart-title">{task.name}</h2>
            <p>Created at: {task.createdAt.toLocaleString()}</p>
            <button className='btn btn-lg btn-success'>Close</button>
        </div>
    </li>
  )
}
{/* 
        <div className="card mt-3">
          <div className="card-body">
            <h2 className="cart-title">Closed task</h2>
            <p>Elapsed time <div className="badge bg-primary">00:10</div></p>
          
          </div>
        </div> */}

export { Task };
