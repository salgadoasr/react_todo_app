import React from 'react';

export class TodoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit(event) {
    const { onAddTodo } = this.props;
    onAddTodo(this.state);
    this.setState({
      title: '',
      description: ''
    });
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Enter the todo"
            value={this.state.title}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            className="form-control"
            id="description"
            placeholder="Enter a description for the todo"
            rows="5"
            value={this.state.description}
            onChange={this.handleChange}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          disabled={this.state.title === ''}
        >
          Submit
        </button>
      </form>
    );
  };
}
