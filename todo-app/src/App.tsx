const App = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <div className="card mt-3">
            <div className="card-body">
              <h1 className='card-title'>
                Create new task
              </h1>
              <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Task name" aria-label="Task name" aria-describedby="button-addon2" />
                <button className="btn btn-primary" type="button" id="button-addon2">Button</button>
              </div>
            </div>
          </div>

        <div className="card mt-3">
          <div className="card-body">
            <h2 className="cart-title">Task</h2>
            <button className='btn btn-lg btn-success'>Close</button>
          </div>
        </div>

        <div className="card mt-3">
          <div className="card-body">
            <h2 className="cart-title">Closed task</h2>
            <p>Elapsed time <div className="badge bg-primary">00:10</div></p>
          
          </div>
        </div>

        </div>
      </div>
  </div>
  );
}

export { App };
