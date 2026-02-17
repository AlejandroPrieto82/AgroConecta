const app = require('./src/App');
const { PORT } = require('./src/config/Config');

app.listen(PORT, () => {
  console.log(`[Server] AgroConecta backend running on port ${PORT}`);
});