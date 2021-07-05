import { Form } from './Form';
import { Tasks } from './Tasks';

const App = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-8">
          <Form />
          <Tasks />
        </div>
      </div>
  </div>
  );
}

export { App };
