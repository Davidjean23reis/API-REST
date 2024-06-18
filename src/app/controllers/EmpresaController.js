import EmpresaRepository from "../repositories/EmpresaRepository.js";

class EmpresaController {
  async index(req, res) {
    try {
      const rows = await EmpresaRepository.findAll();
      res.json(rows);
    } catch (error) {
      console.error("Erro ao buscar empresas:", error);
      res.status(500).json({ mensagem: "Erro ao buscar empresas", error: error.message });
    }
  }

  async show(req, res) {
    const id = req.params.id;
    try {
      const row = await EmpresaRepository.findById(id);
      if (!row) {
        return res.status(404).json({ mensagem: "Empresa não encontrada" });
      }
      res.json(row);
    } catch (error) {
      console.error("Erro ao buscar empresa:", error);
      res.status(500).json({ mensagem: "Erro ao buscar empresa", error: error.message });
    }
  }

  async store(req, res) {
    const empresa = req.body;
    try {
      const row = await EmpresaRepository.create(empresa);
      res.status(201).json(row);
    } catch (error) {
      console.error("Erro ao criar empresa:", error);
      res.status(500).json({ mensagem: "Erro ao criar empresa", error: error.message });
    }
  }

  async update(req, res) {
    const id = req.params.id;
    const empresa = req.body;
    try {
      const row = await EmpresaRepository.update(empresa, id);
      if (!row) {
        return res.status(404).json({ mensagem: "Empresa não encontrada" });
      }
      res.json(row);
    } catch (error) {
      console.error("Erro ao atualizar empresa:", error);
      res.status(500).json({ mensagem: "Erro ao atualizar empresa", error: error.message });
    }
  }

  async delete(req, res) {
    const id = req.params.id;
    try {
      const row = await EmpresaRepository.findById(id);
      if (!row) {
        return res.status(404).json({ mensagem: "Empresa não encontrada" });
      }
      const deleted = await EmpresaRepository.delete(id);
      if (deleted) {
        res.status(200).json(row);
      } else {
        res.status(500).json({ mensagem: "Erro ao deletar empresa" });
      }
    } catch (error) {
      console.error("Erro ao deletar empresa:", error);
      res.status(500).json({ mensagem: "Erro ao deletar empresa", error: error.message });
    }
  }
}

export default new EmpresaController();
