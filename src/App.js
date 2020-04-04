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
      newTask: ''
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
    }    
  }
  
  updateTask(event) {
    this.setState({
      newTask: event.target.value   
    })
  }

  render() {
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
            {this.state.tasks.map((task, index) => <li key={task.id}>{task.name}</li>)}      
          </ul>
          <form onSubmit={this.addTask.bind(this)}>
            <input type="text" id="new-task" placeholder="Ingresa una tarea y oprime Enter" value={this.state.newTask} onChange={this.updateTask.bind(this)} />
          </form>
        </div>
      </div>
    )
  }
}

export default App;
