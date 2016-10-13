import React from 'react';
import ReactDOM from 'react-dom';
import TaskList from './components/task';
import Input from './components/input';
import Footer from './components/footer';

import './index.scss';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      filter: 'SHOW_ALL',
    };
    this.onAddTask = this.onAddTask.bind(this);
    this.toggleComplete = this.toggleComplete.bind(this);
    this.setFilter = this.setFilter.bind(this);
    this.onRemoveTask = this.onRemoveTask.bind(this);
    this.clear = this.clear.bind(this);
    this.count = 0;
  }

  onAddTask(content) {
    const tasks = this.state.tasks;
    this.setState({
      tasks: [...tasks, {
        id: this.count++,
        content,
        complete: false,
      }],
    });
  }

  onRemoveTask(id) {
    const tasks = this.state.tasks.filter(t => t.id !== id);
    this.setState({ tasks });
  }

  setFilter(filter) {
    this.setState({ filter });
  }

  toggleComplete(task) {
    const tasks = this.state.tasks.map((t) => {
      if (t.id === task.id) {
        return Object.assign({}, task, {
          complete: !task.complete,
        });
      }
      return t;
    });
    this.setState({ tasks });
  }

  clear() {
    this.setState({ tasks: [] });
  }

  render() {
    const { tasks, filter } = this.state;
    return (
      <div className="app">
        <Input addTask={this.onAddTask} />
        <TaskList
          tasks={tasks}
          filter={filter}
          toggleComplete={this.toggleComplete}
          removeTask={this.onRemoveTask}
        />
        <Footer filter={filter} setFilter={this.setFilter} clear={this.clear} />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
