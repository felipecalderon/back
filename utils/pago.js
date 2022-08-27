const pago = require("../models/payment");

// para los pagos: CRUD:
// Pagos.create(Fecha en la que se realizo el pago)
// Pagos.read()
// Pagos.update(id, fecha de nuevo pago)

class Pagos {
  constructor() {}
  async create() {
    // console.log("activa creacion de pago");

    let pagoModel = new pago({});
    let savePago = await pagoModel.save();

    return savePago;
  }

  async read() {
    const pagos = await pago.find({});
    return pagos;
  }

  async searchById(id) {
    const pagos = await pago.find({ _id: id }, { fechaDePago: 1, _id: 0 });
    return pagos;
  }

  async searchID(id) {
    const pagos = await pago.find({ _id: id }, { fechaDePago: 0, _id: 1 });
    return pagos;
  }

  async update(id, fechaNueva) {
    let idData = id[0];
    const pagos = await pago.updateOne(
      { _id: idData },
      { $set: { fechaNueva: fechaNueva } }
    );
    return pagos;
  }

  //CREA UN PAGO NUEVO Y ENVIA SU ID
  // esta funcion es utilizada en la creacion de un usuario nuevo para enviar su primer pago
  async IdPago() {
    let newUser = await this.create();
    let idfechaPago = newUser.fechaDePago;
    let idPago = newUser._id;

    return idPago;
  }
}
module.exports = Pagos;
