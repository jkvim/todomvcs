import React from 'react';


function CheckBox({ task, toggleComplete }) {
  return (
    <button
      className="btn-check"
      onClick={() => toggleComplete(task)}
    >Check</button>
  );
}

CheckBox.propTypes = {
  task: React.PropTypes.shape({
    id: React.PropTypes.number,
    complete: React.PropTypes.bool,
    content: React.PropTypes.string,
  }),
  toggleComplete: React.PropTypes.func,
};

function RemoveButton({ task, removeTask }) {
  return (
    <button
      className="btn-remove"
      onClick={() => removeTask(task.id)}
    >Remove</button>
  );
}

RemoveButton.propTypes = {
  task: React.PropTypes.shape({
    id: React.PropTypes.number,
    complete: React.PropTypes.bool,
    content: React.PropTypes.string,
  }),
  removeTask: React.PropTypes.func,
};

function Task({ task, filter, checkBox, removeButton }) {
  const { complete, content } = task;
  const style = {
    li: {
      dispplay: 'block',
    },
    content: {
      textDecoration: complete ? 'line-through' : 'none',
    },
  };
  if (filter === 'SHOW_ACTIVE') {
    style.li.display = complete ? 'none' : 'block';
  } else if (filter === 'SHOW_COMPLETE') {
    style.li.display = complete ? 'block' : 'none';
  }
  return (
    <li className="task" style={style.li}>
      {checkBox}
      <div className="content" style={style.content}>{content}</div>
      {removeButton}
    </li>
  );
}

Task.propTypes = {
  filter: React.PropTypes.string,
  task: React.PropTypes.shape({
    id: React.PropTypes.number,
    complete: React.PropTypes.bool,
    content: React.PropTypes.string,
  }),
  checkBox: React.PropTypes.element,
  removeButton: React.PropTypes.element,
};

class TaskList extends React.Component {
  render() {
    return (
      <ul className="task-list">
        {
          this.props.tasks.map(t =>
            <Task
              key={t.id}
              task={t}
              filter={this.props.filter}
              checkBox={<CheckBox task={t} toggleComplete={this.props.toggleComplete} />}
              removeButton={<RemoveButton task={t} removeTask={this.props.removeTask} />}
            />
          )
        }
      </ul>
    );
  }
}

TaskList.propTypes = {
  tasks: React.PropTypes.arrayOf(React.PropTypes.object),
  filter: React.PropTypes.string,
  toggleComplete: React.PropTypes.func,
  removeTask: React.PropTypes.func,
};

export default TaskList;
