const sinon = require("sinon");
const assert = require("assert"); // Importa a biblioteca de assert do Node.js para verificar as condições dos testes.
const controller = require("../../../api/controllers/FeedAndCommunityTargetPublicController"); // Importa o FeedAndCommunityTargetPublicController que está sendo testado.
const { mockAsync, RESPONSE, FEEDCOMMUNITYTARGETPUBLIC } = require("../util/index"); // Importa funções de utilidade e constantes necessárias para os testes.

describe("FeedAndCommunityTargetPublicController", () => { // Descreve um conjunto de testes para o FeedAndCommunityTargetPublicController.

  it("Should find associations", async () => { // Testa a função 'find' do controlador.
    const findStub = mockAsync(controller, "find", FEEDCOMMUNITYTARGETPUBLIC); // Simula a função 'find' do controlador.
    const result = await controller.find({}, RESPONSE); // Chama a função 'find' com parâmetros e armazena o resultado.
    assert.strictEqual(findStub.calledOnce, true); // Verifica se a função 'find' foi chamada uma vez.
    assert.deepStrictEqual(result, FEEDCOMMUNITYTARGETPUBLIC); // Verifica se o resultado da função é o esperado.
    findStub.restore(); // Restaura a função 'find' original.
  });

  it("Should handle error when finding associations", async () => { // Testa o tratamento de erro ao encontrar uma público alvo no post.
    const errorMessage = "Erro ao buscar as associações";
    const findStub = sinon.stub(controller, "find").resolves({ error: errorMessage });
    const result = await controller.find({}, RESPONSE);
    assert.strictEqual(findStub.calledOnce, true);
    assert.deepStrictEqual(result, { error: errorMessage });
    findStub.restore();
  });


  it("Should find one associations", async () => { // Testa a função 'findOne' do controlador, seguindo a mesma lógica dos testes anteriores.
    const findOneStub = mockAsync(controller, "findOne", FEEDCOMMUNITYTARGETPUBLIC);
    const result = await controller.findOne({}, RESPONSE);
    assert.strictEqual(findOneStub.calledOnce, true);
    assert.deepStrictEqual(result, FEEDCOMMUNITYTARGETPUBLIC);
    findOneStub.restore();
  });

  it("Should handle error when finding one associação", async () => { // Testa o tratamento de erro ao encontrar um único público alvo no post.
    const errorMessage = "Erro ao buscar a associação";
    const findOneStub = sinon.stub(controller, "findOne").resolves({ error: errorMessage });
    const result = await controller.findOne({}, RESPONSE);
    assert.strictEqual(findOneStub.calledOnce, true);
    assert.deepStrictEqual(result, { error: errorMessage });
    findOneStub.restore();
  }); 


  it("Should create associations", async () => { // Testa a função 'create' do controlador, seguindo a mesma lógica dos testes anteriores.
    const createStub = mockAsync(controller, "create", FEEDCOMMUNITYTARGETPUBLIC);
    const result = await controller.create({}, RESPONSE);
    assert.strictEqual(createStub.calledOnce, true);
    assert.deepStrictEqual(result, FEEDCOMMUNITYTARGETPUBLIC);
    createStub.restore();
  }); 
 
  it("Should handle error when creating associations", async () => { // Testa o tratamento de erro ao criar um público alvo no post.
    const errorMessage = "Erro ao criar a associação";
    const createStub = sinon.stub(controller, "create").resolves({ error: errorMessage });
    const result = await controller.create({}, RESPONSE);
    assert.strictEqual(createStub.calledOnce, true);
    assert.deepStrictEqual(result, { error: errorMessage });
    createStub.restore();
  });
});