Gerenciamento de Empresas

Este projeto é uma API RESTful desenvolvida em Node.js utilizando o framework Express.js para gerenciar informações de empresas. Ele permite realizar operações de CRUD (Create, Read, Update, Delete) em um banco de dados MySQL.

Funcionalidades
Listar Empresas: Obtém uma lista de todas as empresas cadastradas.
Visualizar Empresa: Obtém detalhes de uma empresa específica pelo seu ID.
Adicionar Empresa: Cadastra uma nova empresa.
Atualizar Empresa: Atualiza informações de uma empresa existente.
Deletar Empresa: Remove uma empresa do banco de dados.
Tecnologias Utilizadas
Node.js: Ambiente de execução JavaScript server-side.
Express.js: Framework para construção de aplicativos web e APIs.
MySQL: Sistema de gerenciamento de banco de dados relacional.
Promises: Para tratamento de operações assíncronas.
Estrutura do Projeto
controllers/EmpresaController.js: Define métodos para lidar com as requisições HTTP.
repositories/EmpresaRepository.js: Contém a lógica de acesso ao banco de dados.
database/conexao.js: Configura a conexão com o banco de dados MySQL.
app.js: Configura e inicia o servidor Express.js.
router.js: Define as rotas da API.
Instalação
Pré-requisitos
Node.js instalado
MySQL instalado e configurado
