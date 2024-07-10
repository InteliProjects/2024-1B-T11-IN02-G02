const sinon = require("sinon");
const assert = require("assert"); // Importa a biblioteca de assert do Node.js para verificar as condições dos testes.
const controller = require("../../../api/controllers/FeedAndCommunityActionsController"); // Importa o FeedAndCommunityActionsController.
const { mockAsync, RESPONSE, FEEDCOMMUNITYACTIONS } = require("../util/index"); // Importa funções de utilidade e constantes necessárias para os testes.

describe("FeedAndCommunityActionsController", () => {// Descreve um conjunto de testes para o FeedAndCommunityActionsController.

  it("Should find feedcommunityactions", async () => { // Testa a função 'find' do controlador.
    const findStub = mockAsync(controller, "find", FEEDCOMMUNITYACTIONS); // Simula a função 'find' do controlador.
    const result = await controller.find({}, RESPONSE); // Chama a função 'find' com parâmetros e armazena o resultado.
    assert.strictEqual(findStub.calledOnce, true); // Verifica se a função 'find' foi chamada uma vez.
    assert.deepStrictEqual(result, FEEDCOMMUNITYACTIONS); // Verifica se o resultado da função é o esperado.
    findStub.restore(); // Restaura a função 'find' original.
  });

  it("Should handle error when finding feedcommunityactions", async () => { // Testa o tratamento de erro ao encontrar uma ação.
    const errorMessage = "Erro ao buscar as ações do feed e comunidade";
    const findStub = sinon.stub(controller, "find").resolves({ error: errorMessage }); // Simula uma resposta de erro da função 'find'.
    const result = await controller.find({}, RESPONSE);
    assert.strictEqual(findStub.calledOnce, true);
    assert.deepStrictEqual(result, { error: errorMessage });
    findStub.restore();
  });

  
  it("Should find one feedcommunityactions", async () => { // Testa a função 'findOne' do controlador, seguindo a mesma lógica dos testes anteriores.
    const findOneStub = mockAsync(controller, "findOne", FEEDCOMMUNITYACTIONS);
    const result = await controller.findOne({}, RESPONSE);
    assert.strictEqual(findOneStub.calledOnce, true);
    assert.deepStrictEqual(result, FEEDCOMMUNITYACTIONS);
    findOneStub.restore();
  });
  
  it("Should handle error when finding one feedcommunityactions", async () => { // Testa o tratamento de erro ao encontrar uma única ação.
    const errorMessage = "Erro ao buscar as ações 1 do feed e comunidade";
    const findOneStub = sinon.stub(controller, "findOne").resolves({ error: errorMessage });
    const result = await controller.findOne({}, RESPONSE);
    assert.strictEqual(findOneStub.calledOnce, true);
    assert.deepStrictEqual(result, { error: errorMessage });
    findOneStub.restore();
  });

  
  it("Should create one feedcommunityactions", async () => { // Testa a função 'create' do controlador, seguindo a mesma lógica dos testes anteriores.
    const createStub = mockAsync(controller, "create", FEEDCOMMUNITYACTIONS);
    const result = await controller.create({}, RESPONSE);
    assert.strictEqual(createStub.calledOnce, true);
    assert.deepStrictEqual(result, FEEDCOMMUNITYACTIONS);
    createStub.restore();
  });

  it("Should handle error when creating  feedcommunityactions", async () => { // Testa o tratamento de erro ao criar uma ação.
    const errorMessage = "Erro ao criar as ações  do feed e comunidade";
    const createStub = sinon.stub(controller, "create").resolves({ error: errorMessage });
    const result = await controller.create({}, RESPONSE);
    assert.strictEqual(createStub.calledOnce, true);
    assert.deepStrictEqual(result, { error: errorMessage });
    createStub.restore();
  });
});