let instance = null;

class Factory {
  constructor(data) {
    this.data = data;
  }
  static getInstance(data) {
    if (!instance) {
      instance = new Factory();
      if (data == "mongo" || data == "file") {
        console.log(`Se activa Factory con ${data}`);
      }
    }
    return instance;
  }
  connection(data) {
    if (data == "file") {
    } else if (data == "mongo") {
      mongoose.connect(configs.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    } else {
      console.log("Error en conexion de base de datos");
    }
  }
}

module.exports = Factory;
