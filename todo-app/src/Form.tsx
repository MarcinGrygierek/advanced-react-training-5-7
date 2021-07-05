import { ChangeEvent, FormEvent, useState } from "react";

interface Props {
    addNewTask: (name: string) => void;
}

const Form = ({addNewTask}: Props) => {
    const [value, setValue] = useState<string>("");

    const handleValueChange = (e: ChangeEvent<HTMLInputElement>) => {
       setValue(e.target.value);
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        addNewTask(value);
        setValue("");
    }

    return (
    <div className="card mt-3">
        <div className="card-body">
            <h1 className='card-title'>
                Create new task
            </h1>
            <div className="input-group mb-3">
                <form onSubmit={handleSubmit}>
                    <input value={value} onChange={handleValueChange} type="text" className="form-control" placeholder="Task name" aria-label="Task name" aria-describedby="button-addon2" />
                    <button className="btn btn-primary" type="submit" id="button-addon2">Create</button>
                </form>
            </div>
        </div>
    </div>
    );
  }
  
  export { Form };
  