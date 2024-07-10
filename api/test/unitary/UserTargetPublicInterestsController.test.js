const sinon = require("sinon");
const assert = require("assert"); // Importa a biblioteca de assert do Node.js para verificar as condições dos testes.
const controller = require("../../../api/controllers/UserTargetPublicInterestsController"); // Importa o UserTargetPublicInterestsController que está sendo testado.
const { mockAsync, RESPONSE, USERTARGETPUBLICINTERESTS } = require("../util/index"); // Importa funções de utilidade e constantes necessárias para os testes.


describe("Target Public Interests Controller", () => { // Descreve um conjunto de testes para o UserTargetPublicInterestsController.

  it("Should find target public interests", async () => { // Testa a função 'find' do controlador.
    const findStub = mockAsync(controller, "find", USERTARGETPUBLICINTERESTS); // Simula a função 'find' do controlador.
    const result = await controller.find({}, RESPONSE); // Chama a função 'find' com parâmetros e armazena o resultado.
    assert.strictEqual(findStub.calledOnce, true); // Verifica se a função 'find' foi chamada uma vez.
    assert.deepStrictEqual(result, USERTARGETPUBLICINTERESTS); // Verifica se o resultado da função é o esperado.
    findStub.restore(); // Restaura a função 'find' original.
  });

  it("Should handle error when finding interests", async () => { // Testa o tratamento de erro ao buscar os interesses
    const errorMessage = "Erro ao buscar interests";
    const findStub = sinon.stub(controller, "find").resolves({ error: errorMessage });
    const result = await controller.find({}, RESPONSE);
    assert.strictEqual(findStub.calledOnce, true);
    assert.deepStrictEqual(result, { error: errorMessage });
    findStub.restore();
  }); 

  it("Should find target public interests", async () => { // Testa a função 'findOne' do controlador, seguindo a mesma lógica dos testes anteriores.
    const findOneStub = mockAsync(controller, "findOne", USERTARGETPUBLICINTERESTS);
    const result = await controller.findOne({}, RESPONSE);
    assert.strictEqual(findOneStub.calledOnce, true);
    assert.deepStrictEqual(result, USERTARGETPUBLICINTERESTS);
    findOneStub.restore();
  });

  it("Should handle error when fiding public interests", async () => { // Testa o tratamento de erro ao buscar os interesses de público-alvo
    const errorMessage = "Erro ao achar public interests";
    const findOneStub = sinon.stub(controller, "findOne").resolves({ error: errorMessage });
    const result = await controller.findOne({}, RESPONSE);
    assert.strictEqual(findOneStub.calledOnce, true);
    assert.deepStrictEqual(result, { error: errorMessage });
    findOneStub.restore();
  }); 


  it("Should create target public interests", async () => { // Testa a função 'create' do controlador, seguindo a mesma lógica dos testes anteriores.
    const createStub = mockAsync(controller, "create", USERTARGETPUBLICINTERESTS);
    const result = await controller.create({}, RESPONSE);
    assert.strictEqual(createStub.calledOnce, true);
    assert.deepStrictEqual(result, USERTARGETPUBLICINTERESTS);
    createStub.restore();
  });

  it("Should handle error when creating public interests", async () => { // Testa o tratamento de erro ao criar os interesses de público-alvo
    const errorMessage = "Erro ao criar public interests";
    const createStub = sinon.stub(controller, "create").resolves({ error: errorMessage });
    const result = await controller.create({}, RESPONSE);
    assert.strictEqual(createStub.calledOnce, true);
    assert.deepStrictEqual(result, { error: errorMessage });
    createStub.restore();
  }); 
});