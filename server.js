const app = require('./rutas/login');
const PORT = process.env.PORT || 3000


//Puerto
app.listen(PORT, () => {
  console.log(`Funcionando en http://localhost:${PORT}`);
});