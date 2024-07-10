const sinon = require("sinon");
const assert = require("assert"); // Importa a biblioteca de assert do Node.js para verificar as condições dos testes.
const controller = require("../../../api/controllers/FeedAndCommunityController"); // Importa o FeedAndCommunityController que está sendo testado.
const { mockAsync, RESPONSE, FEEDCOMMUNITY } = require("../util/index"); // Importa funções de utilidade e constantes necessárias para os testes.


describe("FeedAndCommunityController", () => { // Descreve um conjunto de testes para o FeedAndCommunityController.

  it("Should find feedandcommunity", async () => { // Testa a função 'find' do controlador.
    const findStub = mockAsync(controller, "find", FEEDCOMMUNITY); // Simula a função 'find' do controlador.
    const result = await controller.find({}, RESPONSE); // Chama a função 'find' com parâmetros e armazena o resultado.
    assert.strictEqual(findStub.calledOnce, true); // Verifica se a função 'find' foi chamada uma vez.
    assert.deepStrictEqual(result, FEEDCOMMUNITY); // Verifica se o resultado da função é o esperado.
    findStub.restore(); // Restaura a função 'find' original.
  });

  it("Should handle error when finding feedandcommunity", async () => { // Testa o tratamento de erro ao encontrar uma postagem.
    const errorMessage = "Erro ao buscar o feedandcommunity";
    const findStub = sinon.stub(controller, "find").resolves({ error: errorMessage });
    const result = await controller.find({}, RESPONSE);
    assert.strictEqual(findStub.calledOnce, true);
    assert.deepStrictEqual(result, { error: errorMessage });
    findStub.restore();
  });


  it("Should create one feedandcommunity", async () => { // Testa a função 'create' do controlador, seguindo a mesma lógica dos testes anteriores.
    const createStub = mockAsync(controller, "create", FEEDCOMMUNITY);
    const result = await controller.create({}, RESPONSE);
    assert.strictEqual(createStub.calledOnce, true);
    assert.deepStrictEqual(result, FEEDCOMMUNITY);
    createStub.restore();
  });

  it("Should handle error when creating feedandcommunity", async () => { // Testa o tratamento de erro ao criar uma postagem.
    const errorMessage = "Erro ao criar o feedandcommunity";
    const createStub = sinon.stub(controller, "create").resolves({ error: errorMessage });
    const result = await controller.create({}, RESPONSE);
    assert.strictEqual(createStub.calledOnce, true);
    assert.deepStrictEqual(result, { error: errorMessage });
    createStub.restore();
  });


  it("Should update one feedandcommunity", async () => { // Testa a função 'update' do controlador, seguindo a mesma lógica dos testes anteriores.
    const updateStub = mockAsync(controller, "update", FEEDCOMMUNITY);
    const result = await controller.update({}, RESPONSE);
    assert.strictEqual(updateStub.calledOnce, true);
    assert.deepStrictEqual(result, FEEDCOMMUNITY);
    updateStub.restore();
  });

  it("Should handle error when updating feedandcommunity", async () => { // Testa o tratamento de erro ao atualizar uma ação.
    const errorMessage = "Erro ao recarregar o feedandcommunity";
    const updateStub = sinon.stub(controller, "update").resolves({ error: errorMessage });
    const result = await controller.update({}, RESPONSE); 
    assert.strictEqual(updateStub.calledOnce, true);
    assert.deepStrictEqual(result, { error: errorMessage });
    updateStub.restore();
  });
  

  it("Should delete one feedandcommunity", async () => { // Testa a função 'delete' do controlador, seguindo a mesma lógica dos testes anteriores.
    const deleteStub = mockAsync(controller, "delete", FEEDCOMMUNITY);
    const result = await controller.delete({}, RESPONSE);
    assert.strictEqual(deleteStub.calledOnce, true);
    assert.deepStrictEqual(result, FEEDCOMMUNITY);
    deleteStub.restore();
  });

  it("Should handle error when deleting feedandcommunity", async () => { // Testa o tratamento de erro ao deletar uma postagem.
    const errorMessage = "Erro ao deletar o feedandcommunity";
    const deleteStub = sinon.stub(controller, "delete").resolves({ error: errorMessage });
    const result = await controller.delete({}, RESPONSE);
    assert.strictEqual(deleteStub.calledOnce, true);
    assert.deepStrictEqual(result, { error: errorMessage });
    deleteStub.restore();
  });
});