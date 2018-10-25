import React, { Component } from 'react';
import styled from 'styled-components';

class PostForm extends Component {
  state = {
    title: '',
    body: '',
  };
  // THIS IS HANDLING THE INPUT VALUES AND USING COMPUTED PROPERTIES
  handleInput = e => {
    // OBJECT LITERAL TO CAPTURE THE VALUES THAT WILL UPDATE STATE
    const formData = {};
    // USING COMPUTED VALUES TO GRAB THE VALUES FROM THE INPUT
    // const { name, value } = e.target;
    formData[e.target.name] = e.target.value;
    this.setState({
      ...formData,
    });
  };

  render() {
    // 1.THIS DATA WILL BE PASSED INTO THE MUTATION VARAIBLE

    // 2.THE onSubmit IS A PROP GIVING US ACCESS TO THE RENDERED PROP FROM THE MUTATION COMPONENT (AND THE PROP IS createPost).

    // 3.WE CALL THE PROP FROM THE MUTATION, AS A FUNCTION AND PASS IT AN OBJECT WITH VARIABLES OBJECT.(KEY: VALUE)(KEY: VALUES FROM STATE)

    // 4.THE CREATEPOST FUNCTION RETURNS A PROMISE WHERE WE ADD A .THEN AND RESET THE VALUES TO EMPTY STRINGS(THIS RESET THE FORM VALUES)

    // 5. AND CATCH ANY ERRORS

    const { onSubmitHandler } = this.props;
    const { title, body } = this.state;

    return (
      <div>
        <FormWrapper
          action="POST"
          onSubmit={e => {
            e.preventDefault();
            onSubmitHandler({
              variables: {
                title,
                body,
              },
            })
              .then(() => {
                this.setState({
                  title: '',
                  body: '',
                });
              })
              .catch(error => console.log(error));
          }}
        >
          <InputSection>
            <label htmlFor="title">TITLE</label>
            <input
              onChange={this.handleInput}
              className="form_title"
              type="text"
              name="title"
              id="title"
              value={title}
              placeholder="Title"
              required
            />
          </InputSection>
          <InputSection>
            <label htmlFor="body">BODY</label>
            <textarea
              onChange={this.handleInput}
              className="form_body"
              type="text"
              name="body"
              id="body"
              placeholder="Body"
              value={body}
              required
            />
          </InputSection>
          <Button type="submit">POST</Button>
        </FormWrapper>
      </div>
    );
  }
}

export default PostForm;

const FormWrapper = styled.form`
  font-weight: bold;
  outline: none;
  input[type='text'] {
    width: 550px;
  }
  .form_title,
  .form_body {
    width: 550px;
    border-radius: 3px;
    border: 2px solid #6200ee;
    margin: 10px 0;
    resize: none;
    font-weight: 500;
    padding: 10px;
    font-size: 1.2em;
  }

  .form_title {
    height: 50px;
    text-transform: capitalize;
  }
  .form_body {
    height: 200px;
  }

  input:focus,
  select:focus,
  textarea:focus,
  button:focus {
    outline: none;
  }
`;

const InputSection = styled.div`
  display: grid;
  text-align: left;
`;

const Button = styled.button`
  width: 550px;
  height: 48px;
  border-radius: 3px;
  padding: 5px;
  font-weight: bold;
  font-size: 1em;
  letter-spacing: 1.2px;
  border: none;
  text-transform: uppercase;
  background: #6200ee;
  color: white;
`;
