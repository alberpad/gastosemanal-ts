import React, { Component } from 'react';
import { revisarPresupuesto } from '../helpers';

interface IRestanteProps<T> {
  presupuesto: T;
  restante: T;
}

class Restante extends Component<IRestanteProps<number>> {
  render() {
    const { presupuesto, restante } = this.props;
    return (
      <div className={revisarPresupuesto(presupuesto, restante)}>
        <p>Restante: $ {restante}</p>
      </div>
    );
  }
}

export default Restante;
