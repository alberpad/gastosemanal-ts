import React, { Component } from 'react';
interface IPresupuestoProps<T> {
  presupuesto: T;
}
class Presupuesto extends Component<IPresupuestoProps<number>> {
  render() {
    const { presupuesto } = this.props;
    return (
      <div className="alert alert-primary">
        <p>Presupuesto: $ {presupuesto}</p>
      </div>
    );
  }
}

export default Presupuesto;
