import { MongoClient, ObjectId } from 'mongodb';
import { config } from '../config';

const USER = encodeURIComponent(config.dbUser); // encodeURIComponent helps with special characters
const PWD = encodeURIComponent(config.dbPwd);
const DB_NAME = encodeURIComponent(config.dbName);

// retryWrite = true => https://docs.mongodb.com/manual/core/retryable-writes/
// Las escrituras recuperables permiten a los controladores MongoDB reintentar automáticamente ciertas operaciones de escritura una sola vez si encuentran errores de red, o si no pueden encontrar un primario sano en los conjuntos de réplica o clúster fragmentado.

// w=majority => https://docs.mongodb.com/manual/reference/write-concern/
// _Solicita el reconocimiento de que las operaciones de escritura se han propagado al majority ( M) de los miembros con derecho a voto. La mayoría ( M) se calcula como la mayoría de todos los miembros con derecho a voto [1] , pero la operación de escritura devuelve el reconocimiento después de propagarse al número M de miembros con derecho a voto (primarios y secundarios con members[n].votesmayor que 0).
// Por ejemplo, considere una réplica configurada con 3 miembros votantes, Primario-Secundario-Secundario (PSS). Para este conjunto de réplica, M es dos [1] , y la escritura debe propagarse a la primaria y una secundaria para reconocer la preocupación de escritura al cliente._
const MONGO_URI = `mongodb+srv://${USER}:${PWD}@${config.dbHost}:${config.dbPort}/${DB_NAME}?retryWrites=true&w=majority`;

// MongoLib as a Singleton to only create one conection to our DB
export class MongoLib {
  constructor() {
    this.client = new MongoClient(MONGO_URI, { useNewUrlParser: true });
    this.dbName = DB_NAME;
  }

  connect() {
    if (!MongoLib.connection) {
      MongoLib.connection = new Promise((resolve, reject) => {
        this.client.connect((err) => {
          if (err) {
            reject(err);
          }

          console.log('Connected succesfully to mongo');
          resolve(this.client.db(this.dbName));
        });
      });
    }

    return MongoLib.connection;
  }
}
