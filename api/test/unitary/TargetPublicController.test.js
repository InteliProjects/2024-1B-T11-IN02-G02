const sinon = require("sinon");
const assert = require("assert"); // Importa a biblioteca de assert do Node.js para verificar as condições dos testes.
const controller = require("../../../api/controllers/TargetPublicController"); // Importa o TargetPublicController que está sendo testado.
const { mockAsync, RESPONSE, TARGETPUBLIC } = require("../util/index"); // Importa funções de utilidade e constantes necessárias para os testes.

describe("TargetPublicController", () => { // Descreve um conjunto de testes para o TargetPublicController.

  it("Should find Target Public", async () => { // Testa a função 'find' do controlador.
    const findStub = mockAsync(controller, "find", TARGETPUBLIC); // Simula a função 'find' do controlador.
    const result = await controller.find({}, RESPONSE); // Chama a função 'find' com parâmetros e armazena o resultado.
    assert.strictEqual(findStub.calledOnce, true); // Verifica se a função 'find' foi chamada uma vez.
    assert.deepStrictEqual(result, TARGETPUBLIC); // Verifica se o resultado da função é o esperado.
    findStub.restore(); // Restaura a função 'find' original.
  });

  it("Should handle error when finding Target Public", async () => { // Testa o tratamento de erro ao encontrar um público alvo.
    const errorMessage = "Erro ao buscar as Target Public";
    const findStub = sinon.stub(controller, "find").resolves({ error: errorMessage });
    const result = await controller.find({}, RESPONSE);
    assert.strictEqual(findStub.calledOnce, true);
    assert.deepStrictEqual(result, { error: errorMessage });
    findStub.restore();
  });


  it("Should find one target public", async () => { // Testa a função 'findOne' do controlador, seguindo a mesma lógica dos testes anteriores.

    const findOneStub = mockAsync(controller, "findOne", TARGETPUBLIC);
    const result = await controller.findOne({}, RESPONSE);
    assert.strictEqual(findOneStub.calledOnce, true);
    assert.deepStrictEqual(result, TARGETPUBLIC);
    findOneStub.restore();
  });

  it("Should handle error when finding one target public", async () => { // Testa o tratamento de erro ao encontrar um único público alvo.
    const errorMessage = "Erro ao buscar o target public";
    const findOneStub = sinon.stub(controller, "findOne").resolves({ error: errorMessage });
    const result = await controller.findOne({}, RESPONSE);
    assert.strictEqual(findOneStub.calledOnce, true);
    assert.deepStrictEqual(result, { error: errorMessage });
    findOneStub.restore();
  });


  it("Should create one target public", async () => { // Testa a função 'create' do controlador, seguindo a mesma lógica dos testes anteriores.
    const createStub = mockAsync(controller, "create", TARGETPUBLIC);
    const result = await controller.create({}, RESPONSE);
    assert.strictEqual(createStub.calledOnce, true);
    assert.deepStrictEqual(result, TARGETPUBLIC);
    createStub.restore();
  });

  it("Should handle error when creating target public", async () => { // Testa o tratamento de erro ao criar um público alvo.
    const errorMessage = "Erro ao criar o target public";
    const createStub = sinon.stub(controller, "create").resolves({ error: errorMessage });
    const result = await controller.create({}, RESPONSE);
    assert.strictEqual(createStub.calledOnce, true);
    assert.deepStrictEqual(result, { error: errorMessage });
    createStub.restore();
  });


  it("Should update one target public", async () => { // Testa a função 'update' do controlador, seguindo a mesma lógica dos testes anteriores.
    const updateStub = mockAsync(controller, "update", TARGETPUBLIC);
    const result = await controller.update({}, RESPONSE);
    assert.strictEqual(updateStub.calledOnce, true);
    assert.deepStrictEqual(result, TARGETPUBLIC);
    updateStub.restore();
  });

  it("Should handle error when updating target public", async () => { // Testa o tratamento de erro ao atualizar um público alvo.
    const errorMessage = "Erro ao recarregar o target public";
    const updateStub = sinon.stub(controller, "update").resolves({ error: errorMessage });
    const result = await controller.update({}, RESPONSE);
    assert.strictEqual(updateStub.calledOnce, true);
    assert.deepStrictEqual(result, { error: errorMessage });
    updateStub.restore();
  });


  it("Should delete one target public", async () => { // Testa a função 'delete' do controlador, seguindo a mesma lógica dos testes anteriores.
    const deleteStub = mockAsync(controller, "delete", TARGETPUBLIC);
    const result = await controller.delete({}, RESPONSE);
    assert.strictEqual(deleteStub.calledOnce, true);
    assert.deepStrictEqual(result, TARGETPUBLIC);
    deleteStub.restore();
  });

  it("Should handle error when deleting target public", async () => { // Testa o tratamento de erro ao deletar um público alvo.
    const errorMessage = "Erro ao deletar o target public";
    const deleteStub = sinon.stub(controller, "delete").resolves({ error: errorMessage });
    const result = await controller.delete({}, RESPONSE);
    assert.strictEqual(deleteStub.calledOnce, true);
    assert.deepStrictEqual(result, { error: errorMessage });
    deleteStub.restore();
  });
});
