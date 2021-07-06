import { ChangeEvent, FormEvent, useState } from "react";
import { Card } from "./Card";

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
        <Card 
        main
        title='Create new task'
        as='div'>
            <form onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                    <input value={value} onChange={handleValueChange} type="text" className="form-control" placeholder="Task name" aria-label="Task name" aria-describedby="button-addon2" />
                    <button className="btn btn-primary" type="submit" id="button-addon2">Create</button>
                </div>
            </form>
        </Card>
    );
  }
  
  export { Form };
  