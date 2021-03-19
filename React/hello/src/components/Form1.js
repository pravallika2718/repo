import React from 'react';
import { Button,Col, Row,Container,Form, FormGroup, Label, Input } from 'reactstrap';


const Example = (props) => {
  return (
    <Container className ="form1">
    <Form className="form">
      <Col>
      <FormGroup>
        <Label for="Email">Email:</Label>
        <Input type="email" name="email" id="Email" placeholder="enter mail" />
      </FormGroup>
      </Col>
      <Row>
      <FormGroup>
        <Label for="Password">Password :</Label>
        <Input type="password" name="password" id="Password" placeholder="password" />
      </FormGroup>
      </Row>
      <Row>
      <FormGroup>
        <Label for="Select">Interests:</Label><br /><br/>
        <Input type="select" name="select" id="Select">
          <option>React</option>
          <option>Node</option>
          <option>Python</option>
          <option>data base</option>
          <option>others</option>
        </Input>
      </FormGroup>
      </Row>
      <Row>
      <FormGroup>
        <Label for="selectMultiple">Select Multiple:</Label><br /><br />
        <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </FormGroup></Row>
      <Row>
      <FormGroup>
        <Label for="text">Text Area :</Label><br /><br />
        <Input type="textarea" name="text" id="text" />
      </FormGroup></Row>
      <FormGroup>
        <Label for="file">File</Label>
        <Input type="file" name="file" id="file" />
      </FormGroup><br />
      <FormGroup>
          <label>Options:</label><br /><br />
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" />{' '}
            Option one
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" />{' '}
            Option two
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1"  />{' '}
            Option three 
          </Label>
        </FormGroup>
      </FormGroup><br />
      <FormGroup check>
        <Label check>
          <Input type="checkbox" />{' '}
          Check me out
        </Label>
      </FormGroup><br />
      <Button>Submit</Button>
    </Form>

    </Container>
  );
}

export default Example;