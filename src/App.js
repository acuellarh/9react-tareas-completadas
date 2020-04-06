import React, { Component } from 'react';

/// Modifica el componente para que se puedan agregar tareas, tachar y destacharlas y error de validacion en el input

class App extends Component {
  constructor() {
    super()
    this.state = {
      tasks: [
        { id: 1, name: "Sacar la ropa", done: false },
        { id: 2, name: "Hacer la cama", done: true },
        { id: 3, name: "Leer un rato", done: false }
      ],
      newTask: '',
      inputStyle: ''
    }
  }

  
  addTask(event) {
    event.preventDefault()
    const objID = this.state.tasks.length + 1
    let oldTasks = this.state.tasks
    let newTask = this.state.newTask

    if (newTask.length !== 0) {
      this.setState({
        tasks: [...oldTasks, {id: objID, name: newTask, done: false} ],
        newTask: ''
      })
    } else {
      this.setState({
        inputStyle: 'error'        
      })
    }    
  }
  
  updateTask(event) {
    this.setState({
      newTask: event.target.value   
    })
  }

  markDone(e) {
    const idNum = e.target.value
    this.setState({
      tasks: this.state.tasks.map(task =>
        idNum === task.id ? task.done ? { id: task.id, name: task.name, done: false } : { id: task.id, name: task.name, done: true } : task
      )
    })
  }

  render() {
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
            {this.state.tasks.map((task, index) => <li className={ task.done ? 'done' : ''} onClick={this.markDone.bind(this)} key={task.id} value={task.id}>{task.name} </li>) }      
          </ul>
          <form onSubmit={this.addTask.bind(this)}>
            <input type="text" id="new-task" placeholder="Ingresa una tarea y oprime Enter" className={this.state.newTask.length === 0 ? this.state.inputStyle : ''} value={this.state.newTask} onChange={this.updateTask.bind(this)} />
          </form>
        </div>
      </div>
    )
  }
}

export default App;
