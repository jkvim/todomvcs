import React from 'react';

class Input extends React.Component {
  constructor() {
    super();
    this.onAddTask = this.onAddTask.bind(this);
  }

  onAddTask(e) {
    e.preventDefault();
    if (this.input && this.input.value) {
      this.props.addTask(this.input.value);
      this.input.value = '';
      this.input.blur();
    }
  }

  render() {
    return (
      <form className="input-warpper" onSubmit={this.onAddTask}>
        <input
          ref={(input) => {
            this.input = input;
          }}
        />
      </form>
    );
  }
}

Input.propTypes = {
  addTask: React.PropTypes.func,
};

export default Input;
