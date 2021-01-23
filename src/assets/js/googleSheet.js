const { GoogleSpreadsheet } = require('google-spreadsheet');
const keys = require('./keys.json');
const doc = new GoogleSpreadsheet('1XilTlajHbBPz91mWOOXGi74XC0xysts4849DCFglOok');

async function accessGoogleSheet() {
    try {
      await doc.useServiceAccountAuth(keys);
      console.log("Entró");
    } catch (error) {
      console.log('No se pudo acceder: ' + error);
    }
};

(async function sendContactData(data) {
  await accessGoogleSheet();
  await doc.loadInfo();
  console.log(doc.title);

  const sheet = await doc.sheetsByTitle['Contactos'];
  console.log(sheet.title);
  console.log(sheet.rowCount);

  data = {
    nombres: "Vicente Omar",
    apellidos: "Mori Rojas",
    correo: "vomoro96@gmail.com",
    numero: 990579194,
    areaInteres: "Área de Desarrollo Movil",
    mensaje: ""
  }
  const addData = await sheet.addRows([
    { NOMBRES: data.nombres, APELLIDOS: data.apellidos, CORREO: data.correo, NÚMERO: data.numero, ÁREA: data.areaInteres, MENSAJE: data.mensaje}
  ]);
  console.log("Se añadío la información");
}());

module.exports = {
  sendContactData(data)
}
