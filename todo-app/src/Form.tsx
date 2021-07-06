import { ChangeEvent, FormEvent, useState } from "react";
import { Card } from "./Card";
import { useForm } from "./hooks/useForm";

interface Props {
    addNewTask: (name: string, description: string) => void;
}

interface FormValues {
    name: string;
    description: string;
}

const Form = ({addNewTask}: Props) => {
    const {values, handleChange, handleSubmit} = useForm<FormValues>({
        name: '',
        description: ''
    })

    const submit = (values: FormValues) => {
        addNewTask(values.name, values.description);
    }

    return (
        <Card 
        main
        title='Create new task'
        as='div'>
            <form onSubmit={e => handleSubmit(e, submit)}>
                <div className="input-group mb-3">
                    <input name='name' value={values.name} onChange={handleChange} type="text" className="form-control" placeholder="Task name" aria-label="Task name" aria-describedby="button-addon2" />
                    <button className="btn btn-primary" type="submit" id="button-addon2">Create</button>
                </div>
                <textarea name='description' value={values.description} onChange={handleChange} className="form-control" rows={3}></textarea>
            </form>
        </Card>
    );
  }
  
  export { Form };
  