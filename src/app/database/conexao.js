import mysql from "mysql";
const conexao = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "David@29",
  database: "bdempresa",
});

conexao.connect((erro) => {
  if (erro) {
    console.log("Erro ao conectar ao banco de dados:", erro);
    return;
  }
  console.log("Conectado ao banco de dados");
});

export const consulta = (sql, valores = "", mensagemReject) => {
  return new Promise((resolve, reject) => {
    conexao.query(sql, valores, (erro, resultado) => {
      if (erro) {
        console.error("Erro ao consultar banco de dados:", erro);
        return reject({ mensagem: mensagemReject, erro });
      }
      return resolve(resultado);
    });
  });
};

export default conexao;
