import { ChangeEvent, FormEvent, useState } from "react";
import { Card } from "./Card";

interface Props {
    addNewTask: (name: string, description: string) => void;
}

const Form = ({addNewTask}: Props) => {
    const [value, setValue] = useState<string>("");
    const [description, setDescription] = useState<string>("");

    const handleValueChange = (e: ChangeEvent<HTMLInputElement>) => {
       setValue(e.target.value);
    }

    const handleDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(e.target.value);
     }
 

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        addNewTask(value, description);
        setValue("");
        setDescription("");
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
                <textarea name='description' value={description} onChange={handleDescriptionChange} className="form-control" rows={3}></textarea>
            </form>
        </Card>
    );
  }
  
  export { Form };
  