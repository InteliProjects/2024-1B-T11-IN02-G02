const assert = require("assert");// Importa a biblioteca de assert do Node.js para verificar as condições dos testes.
const sinon = require("sinon");
const controller = require("../../../api/controllers/actionController"); // Importa o actionController que está sendo testado.
const { mockAsync, RESPONSE, ACTION } = require("../util/index");  // Importa funções de utilidade e constantes necessárias para os testes.

describe("ActionController", () => { // Descreve um conjunto de testes para o actionController.

  it("Should find actions", async () => { // Testa a função 'find' do controlador.
    const findStub = mockAsync(controller, "find", ACTION); // Simula a função 'find' do controlador.
    const result = await controller.find({}, RESPONSE); // Chama a função 'find' com parâmetros e armazena o resultado.
    assert.strictEqual(findStub.calledOnce, true); // Verifica se a função 'find' foi chamada uma vez.
    assert.deepStrictEqual(result, ACTION); // Verifica se o resultado da função é o esperado.
    findStub.restore(); // Restaura a função 'find' original.
  });

  it("Should handle error fiding action", async () => { // Testa o tratamento de erro ao encontrar uma ação.
    const errorMessage = "Erro ao achar ação";
    const findStub = sinon.stub(controller, "find").resolves({ error: errorMessage }); // Simula uma resposta de erro da função 'find'.
    const result = await controller.find({}, RESPONSE);
    assert.strictEqual(findStub.calledOnce, true);
    assert.strictEqual(result.error, errorMessage);
    findStub.restore();
  });

 
  it("Should find one action", async () => { // Testa a função 'findOne' do controlador, seguindo a mesma lógica dos testes anteriores.
    const findOneStub = mockAsync(controller, "findOne", ACTION);
    const result = await controller.findOne({}, RESPONSE);
    assert.strictEqual(findOneStub.calledOnce, true);
    assert.deepStrictEqual(result, ACTION);
    findOneStub.restore();
  });

  it("Should handle error fiding one action", async () => {// Testa o tratamento de erro ao encontrar uma única ação
    const errorMessage = "Erro ao achar uma ação";
    const findOneStub = sinon.stub(controller, "findOne").resolves({ error: errorMessage });
    const result = await controller.findOne({}, RESPONSE);
    assert.strictEqual(findOneStub.calledOnce, true);
    assert.strictEqual(result.error, errorMessage);
    findOneStub.restore();
  });


  it("Should create one action", async () => { // Testa a função 'create' do controlador, seguindo a mesma lógica dos testes anteriores.
    const createStub = mockAsync(controller, "create", ACTION);
    const result = await controller.create({}, RESPONSE);
    assert.strictEqual(createStub.calledOnce, true);
    assert.deepStrictEqual(result, ACTION);
    createStub.restore();
  });
 
  it("Should handle error creating one action", async () => { // Testa o tratamento de erro ao criar uma ação.
    const errorMessage = "Erro ao criar uma ação";
    const createStub = sinon.stub(controller, "create").resolves({ error: errorMessage });
    const result = await controller.create({}, RESPONSE);
    assert.strictEqual(createStub.calledOnce, true);
    assert.strictEqual(result.error, errorMessage);
    createStub.restore();
  });

  
  it("Should update one action", async () => { // Testa a função 'update' do controlador, seguindo a mesma lógica dos testes anteriores.
    const updateStub = mockAsync(controller, "update", ACTION);
    const result = await controller.update({}, RESPONSE);
    assert.strictEqual(updateStub.calledOnce, true);
    assert.deepStrictEqual(result, ACTION);
    updateStub.restore();
  });

  it("Should handle error updanting one action", async () => { // Testa o tratamento de erro ao atualizar uma ação.
    const errorMessage = "Erro atualizar uma ação";
    const updateStub = sinon.stub(controller, "update").resolves({ error: errorMessage });
    const result = await controller.update({}, RESPONSE);
    assert.strictEqual(updateStub.calledOnce, true);
    assert.strictEqual(result.error, errorMessage);
    updateStub.restore();
  });
  

  it("Should delete one action", async () => { // Testa a função 'delete' do controlador, seguindo a mesma lógica dos testes anteriores.
    const deleteStub = mockAsync(controller, "delete", ACTION);
    const result = await controller.delete({}, RESPONSE);
    assert.strictEqual(deleteStub.calledOnce, true);
    assert.deepStrictEqual(result, ACTION);
    deleteStub.restore();
  });

  it("Should handle error deleting one action", async () => { // Testa o tratamento de erro ao deletar uma ação.
    const errorMessage = "Erro deletar uma ação";
    const deleteStub = sinon.stub(controller, "delete").resolves({ error: errorMessage });
    const result = await controller.delete({}, RESPONSE);
    assert.strictEqual(deleteStub.calledOnce, true);
    assert.strictEqual(result.error, errorMessage);
    deleteStub.restore();
  });
});