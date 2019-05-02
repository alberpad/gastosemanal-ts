import React, { Component } from 'react';
import Presupuesto from './Presupuesto';
import Restante from './Restante';

interface IControlPresupuestoProps<T> {
  presupuesto: T;
  restante: T;
}

class ControlPresupuesto extends Component<IControlPresupuestoProps<number>> {
  render() {
    const { presupuesto, restante } = this.props;
    return (
      <React.Fragment>
        <Presupuesto presupuesto={presupuesto} />
        <Restante presupuesto={presupuesto} restante={restante} />
      </React.Fragment>
    );
  }
}
export default ControlPresupuesto;
