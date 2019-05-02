import React, { Component } from 'react';
import { timingSafeEqual } from 'crypto';

class Formulario extends Component<any> {
  // refs para los campos del formulario
  nombreGasto = React.createRef<HTMLInputElement>();
  cantidadGasto = React.createRef<HTMLInputElement>();

  crearGasto = (e: React.FormEvent<HTMLFormElement>) => {
    // Prevenir el comportamiento por defecto
    e.preventDefault();
    let gasto: any = null;
    // Crear el objeto con los datos
    if (this.nombreGasto.current && this.cantidadGasto.current) {
      gasto = {
        nombreGasto: this.nombreGasto.current.value,
        cantidadGasto: this.cantidadGasto.current.value
      };
    }

    // Agregar el objeto y enviarlo por props
    this.props.agregarGasto(gasto);
    // resetear el formulario
    e.currentTarget.reset();
  };

  render() {
    return (
      <form onSubmit={this.crearGasto}>
        <h2>Agrega tus gastos aquí</h2>
        <div className="campo">
          <label>Nombre Gasto</label>
          <input
            ref={this.nombreGasto}
            className="u-full-width"
            type="text"
            placeholder="Ej. Transporte"
          />
        </div>
        <div className="campo">
          <label>Cantidad</label>
          <input
            ref={this.cantidadGasto}
            type="text"
            className="u-full-width"
            placeholder="Ej. 300"
          />
        </div>
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Agregar"
        />
      </form>
    );
  }
}

export default Formulario;
