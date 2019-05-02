import React, { Component } from 'react';

class Gasto extends Component<any> {
  render() {
    const { nombreGasto, cantidadGasto } = this.props.gasto;
    console.log(this.props.gasto);
    return (
      <li className="gastos">
        <p>
          {nombreGasto}
          <span className="gasto">$ {cantidadGasto}</span>
        </p>
      </li>
    );
  }
}

export default Gasto;
