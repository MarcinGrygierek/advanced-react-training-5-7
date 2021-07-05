const Form = () => {
    return (
    <div className="card mt-3">
        <div className="card-body">
            <h1 className='card-title'>
                Create new task
            </h1>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Task name" aria-label="Task name" aria-describedby="button-addon2" />
                <button className="btn btn-primary" type="button" id="button-addon2">Create</button>
            </div>
        </div>
    </div>
    );
  }
  
  export { Form };
  