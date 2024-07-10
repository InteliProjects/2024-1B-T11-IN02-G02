const sinon = require("sinon");
const assert = require("assert"); // Importa a biblioteca de assert do Node.js para verificar as condições dos testes.
const controller = require("../../../api/controllers/TypePostController"); // Importa o TypePostController que está sendo testado.
const { mockAsync, RESPONSE, TYPEPOST } = require("../util/index"); // Importa funções de utilidade e constantes necessárias para os testes.

describe("TypePostController", () => { // Descreve um conjunto de testes para o TypePostController.

  it("Should find type post", async () => { // Testa a função 'find' do controlador.
    const findStub = mockAsync(controller, "find", TYPEPOST); // Simula a função 'find' do controlador.
    const result = await controller.find({}, RESPONSE); // Chama a função 'find' com parâmetros e armazena o resultado.
    assert.strictEqual(findStub.calledOnce, true); // Verifica se a função 'find' foi chamada uma vez.
    assert.deepStrictEqual(result, TYPEPOST); // Verifica se o resultado da função é o esperado.
    findStub.restore(); // Restaura a função 'find' original.
  });

  it("Should handle error when finding type post", async () => { // Testa o tratamento de erro ao encontrar um tipo de post.
    const errorMessage = "Erro ao buscar  type post";
    const findStub = sinon.stub(controller, "find").resolves({ error: errorMessage });
    const result = await controller.find({}, RESPONSE);
    assert.strictEqual(findStub.calledOnce, true);
    assert.deepStrictEqual(result, { error: errorMessage });
    findStub.restore();
  });


  it("Should find type post", async () => { // Testa a função 'findOne' do controlador, seguindo a mesma lógica dos testes anteriores.
    const findOneStub = mockAsync(controller, "findOne", TYPEPOST);
    const result = await controller.findOne({}, RESPONSE);
    assert.strictEqual(findOneStub.calledOnce, true);
    assert.deepStrictEqual(result, TYPEPOST);
    findOneStub.restore();
  });


  it("Should handle error when finding type post", async () => { // Testa o tratamento de erro ao encontrar um único tipo de post.
    const errorMessage = "Erro ao buscar type post";
    const findOneStub = sinon.stub(controller, "findOne").resolves({ error: errorMessage });
    const result = await controller.findOne({}, RESPONSE);
    assert.strictEqual(findOneStub.calledOnce, true);
    assert.deepStrictEqual(result, { error: errorMessage });
    findOneStub.restore();
  });


  it("Should create type post", async () => { // Testa a função 'create' do controlador, seguindo a mesma lógica dos testes anteriores.
    const createStub = mockAsync(controller, "create", TYPEPOST);
    const result = await controller.create({}, RESPONSE);
    assert.strictEqual(createStub.calledOnce, true);
    assert.deepStrictEqual(result, TYPEPOST);
    createStub.restore();
  });

  it("Should handle error when creating type post", async () => { // Testa o tratamento de erro ao criar um tipo de post.
    const errorMessage = "Erro ao criar type post";
    const createStub = sinon.stub(controller, "create").resolves({ error: errorMessage });
    const result = await controller.create({}, RESPONSE);
    assert.strictEqual(createStub.calledOnce, true);
    assert.deepStrictEqual(result, { error: errorMessage });
    createStub.restore();
  });


  it("Should update type post", async () => { // Testa a função 'update' do controlador, seguindo a mesma lógica dos testes anteriores.
    const updateStub = mockAsync(controller, "update", TYPEPOST);
    const result = await controller.update({}, RESPONSE);
    assert.strictEqual(updateStub.calledOnce, true);
    assert.deepStrictEqual(result, TYPEPOST);
    updateStub.restore();
  });

  it("Should handle error when updating type post", async () => { // Testa o tratamento de erro ao atualizar um tipo de post.
    const errorMessage = "Erro ao recarregar o type post";
    const updateStub = sinon.stub(controller, "update").resolves({ error: errorMessage });
    const result = await controller.update({}, RESPONSE);
    assert.strictEqual(updateStub.calledOnce, true);
    assert.deepStrictEqual(result, { error: errorMessage });
    updateStub.restore();
  });
});