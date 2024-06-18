import { consulta } from "../database/conexao.js";

class EmpresaRepository {
  async create(empresa) {
    const sql = "INSERT INTO empresas SET ?";
    try {
      return await consulta(sql, empresa, "Não foi possível cadastrar a empresa");
    } catch (error) {
      console.error("Erro ao cadastrar empresa:", error);
      throw new Error("Erro ao cadastrar empresa");
    }
  }

  async findAll() {
    const sql = "SELECT * FROM empresas";
    try {
      return await consulta(sql, "Não foi possível localizar as empresas");
    } catch (error) {
      console.error("Erro ao buscar empresas:", error);
      throw new Error("Erro ao buscar empresas");
    }
  }

  async findById(id) {
    const sql = "SELECT * FROM empresas WHERE id=?";
    try {
      return await consulta(sql, id, "Não foi possível localizar a empresa");
    } catch (error) {
      console.error("Erro ao buscar empresa por ID:", error);
      throw new Error("Erro ao buscar empresa por ID");
    }
  }

  async update(empresa, id) {
    const sql = "UPDATE empresas SET ? WHERE id=?";
    try {
      return await consulta(sql, [empresa, id], "Não foi possível atualizar a empresa");
    } catch (error) {
      console.error("Erro ao atualizar empresa:", error);
      throw new Error("Erro ao atualizar empresa");
    }
  }

  async delete(id) {
    const sql = "DELETE FROM empresas WHERE id=?";
    try {
      return await consulta(sql, id, "Não foi possível apagar a empresa");
    } catch (error) {
      console.error("Erro ao deletar empresa:", error);
      throw new Error("Erro ao deletar empresa");
    }
  }
}

export default new EmpresaRepository();
