import react,{ Component } from 'react';
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label
} from 'reactstrap';
// import './App.css';

class Assignment extends Component {
  render() {
    return (
      <div className='container'>
        <h2>Assignment</h2>
        <Form className="form">
          <FormGroup>
            <Label for="Name">Name</Label>
            <Input
              type="name"
              name="name"
              id="Name"
              placeholder="Name"
            />
          </FormGroup>
          <FormGroup>
            <Label for="enrollment">Enrollment</Label>
            <Input
              type="text"
              name="enrollment"
              id="enrollment"
              placeholder="Enrollment No."
            />
          </FormGroup>
          <FormGroup>
            <Label for="assignment">Assignment</Label>
            <Input
              type="file"
              name="assignment"
              id="assignment"
              placeholder="Assignment."
            />
          </FormGroup>
        <Button>Submit</Button>
      </Form>
    </div>
  );
}
}
export default Assignment;