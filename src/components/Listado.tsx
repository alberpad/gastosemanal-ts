import React, { Component } from 'react';
import Gasto from './Gasto';

class Listado extends Component<any> {
  render() {
    const { gastos } = this.props;
    return (
      <div className="gastos-realizados">
        <h2>Listado</h2>
        {Object.keys(gastos).map((key: string) => (
          <Gasto key={key} gasto={gastos[key]} />
        ))}
      </div>
    );
  }
}
export default Listado;
