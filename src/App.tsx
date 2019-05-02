import React, { Component } from 'react';
import './css/App.css';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import { validarPresupuesto } from './helpers';
import ControlPresupuesto from './components/ControlPresupuesto';

class App extends Component {
  state = {
    presupuesto: 0,
    restante: 0,
    gastos: {}
  };

  componentDidMount() {
    this.obtenerPresupuesto();
  }

  obtenerPresupuesto = () => {
    let presupuesto = prompt('¿Cual es el presupuesto?');
    let resultado = validarPresupuesto(presupuesto);
    resultado
      ? this.setState({ presupuesto, restante: presupuesto })
      : this.obtenerPresupuesto();
  };
  // Agregar un nuevo gasto al state
  agregarGasto = (gasto: any) => {
    // obtener copia del state actual
    const gastos: any = { ...this.state.gastos };
    // agregar el gasto al objeto del state
    gastos[`gasto${Date.now()}`] = gasto;
    //Restar al presupuesto
    this.restarPresupuesto(gasto.cantidadGasto);
    // ponerlo en state
    this.setState({ gastos });
  };

  restarPresupuesto = (cantidad: string) => {
    let restante = Number(this.state.restante) - Number(cantidad);
    this.setState({ restante });
    console.log(`Restante ${restante}`);
  };

  render() {
    return (
      <div className="App container">
        <Header titulo="Gasto Semanal" />
        <div className="contenido-principal contenido">
          <div className="row">
            <div className="one-half column">
              <Formulario agregarGasto={this.agregarGasto} />
            </div>
            <div className="one-half column">
              <Listado gastos={this.state.gastos} />
              <ControlPresupuesto
                presupuesto={this.state.presupuesto}
                restante={this.state.restante}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
