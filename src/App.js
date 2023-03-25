import "./index.css";
import React, { Component } from "react";
class App extends Component {
  state = {
    tarefa: undefined,
    lista: []
  };

  handleChange = (e) => {
    this.setState({
     tarefa: e.target.value
    });
  };

  buttonAdd = () => {
    if (this.state.tarefa === "") {
      return;
    }
    this.setState({
      lista: this.state.lista.concat({
        
        tarefa: this.state.tarefa,
        id: Math.random()
      }),
      tarefa:
        ""
    });
  };
  apagar = (id) => {
    this.setState({
      lista: this.state.lista.filter((item) => {
        return item.id !== id;
      })
    });
  };
  render() {
    return (
      <section>
        <h1>ToDo List</h1>
        <div>
          <input
            value={this.state.tarefa}
            onChange={this.handleChange}
            placeholder="Adicionar uma tarefa"
          />
          <button onClick={this.buttonAdd}>➤</button>{" "}
          {}
        </div>
        <ul>
          {this.state.lista.map((item) => (
            <li>
              {item.tarefa}
              <button
                onClick={() => {
                  this.apagar(item.id);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-trash"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                  <path
                    fill-rule="evenodd"
                    d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a"
                  />
                </svg>
              </button>
              {}
            </li>
          ))}
        </ul>
      </section>
    );
  }
}
export default App;

