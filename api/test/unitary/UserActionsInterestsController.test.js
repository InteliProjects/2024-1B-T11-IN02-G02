const sinon = require("sinon");
const assert = require("assert"); // Importa a biblioteca de assert do Node.js para verificar as condições dos testes.
const controller = require("../../../api/controllers/UserActionsInterestsController"); // Importa o UserActionsInterestsController que está sendo testado.
const { mockAsync, RESPONSE, USERACTIONSINTERESTS } = require("../util/index"); // Importa funções de utilidade e constantes necessárias para os testes.
describe("UserActionsInterestsController", () => { // Descreve um conjunto de testes para o UserActionsInterestsController.
  it("Should find actions", async () => { // Testa a função 'find' do controlador.
    const findStub = mockAsync(controller, "find", USERACTIONSINTERESTS); // Simula a função 'find' do controlador.
    const result = await controller.find({}, RESPONSE); // Chama a função 'find' com parâmetros e armazena o resultado.
    assert.strictEqual(findStub.calledOnce, true); // Verifica se a função 'find' foi chamada uma vez.
    assert.deepStrictEqual(result, USERACTIONSINTERESTS); // Verifica se o resultado da função é o esperado.
    findStub.restore(); // Restaura a função 'find' original.
  });

  it("Should handle error when finding actions", async () => { // Testa o tratamento do erro ao buscar as ações
    const errorMessage = "Erro ao buscar actions";
    const findStub = sinon.stub(controller, "find").resolves({ error: errorMessage });
    const result = await controller.find({}, RESPONSE);
    assert.strictEqual(findStub.calledOnce, true);
    assert.deepStrictEqual(result, { error: errorMessage });
    findStub.restore();
  }); 
    it("Should find one user actions interests", async () => { // Testa a função 'findOne' do controlador, seguindo a mesma lógica dos testes anteriores.
      const findOneStub = mockAsync(controller, "findOne", USERACTIONSINTERESTS);
      const result = await controller.findOne({}, RESPONSE);
      assert.strictEqual(findOneStub.calledOnce, true);
      assert.deepStrictEqual(result, USERACTIONSINTERESTS);
      findOneStub.restore();
    });

    it("Should handle error when finding actions interests", async () => { // Testa o tratamento do erro ao buscar os interesses das ações
      const errorMessage = "Erro ao buscar actions interests";
      const findOneStub = sinon.stub(controller, "findOne").resolves({ error: errorMessage });
      const result = await controller.findOne({}, RESPONSE);
      assert.strictEqual(findOneStub.calledOnce, true);
      assert.deepStrictEqual(result, { error: errorMessage });
      findOneStub.restore();
    }); 
  
      it("Should create one user actions interests", async () => { // Testa a função 'create' do controlador, seguindo a mesma lógica dos testes anteriores.
        const createStub = mockAsync(controller, "create", USERACTIONSINTERESTS);
        const result = await controller.create({}, RESPONSE);
        assert.strictEqual(createStub.calledOnce, true);
        assert.deepStrictEqual(result, USERACTIONSINTERESTS);
        createStub.restore();
        });

      it("Should handle error when creating actions interests", async () => { // Testa o tratamento do erro ao criar os interesses das ações
        const errorMessage = "Erro ao criar o actions interests";
        const createStub = sinon.stub(controller, "create").resolves({ error: errorMessage });
        const result = await controller.create({}, RESPONSE);
        assert.strictEqual(createStub.calledOnce, true);
        assert.deepStrictEqual(result, { error: errorMessage });
        createStub.restore();
          }); 
});

