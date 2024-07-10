const sinon = require("sinon");
const assert = require("assert"); // Importa a biblioteca de assert do Node.js para verificar as condições dos testes.
const controller = require("../../../api/controllers/LikedContentController"); // Importa o LikedContentController que está sendo testado.
const { mockAsync, RESPONSE, LIKEDCONTENT } = require("../util/index"); // Importa funções de utilidade e constantes necessárias para os testes.

describe("ActionController Linked Content Cotroller", () => { // Descreve um conjunto de testes para o LikedContentController.

  it("Should find Like", async () => { // Testa a função 'find' do controlador.
    const findStub = mockAsync(controller, "find", LIKEDCONTENT); // Simula a função 'find' do controlador.
    const result = await controller.find({}, RESPONSE); // Chama a função 'find' com parâmetros e armazena o resultado.
    assert.strictEqual(findStub.calledOnce, true); // Verifica se a função 'find' foi chamada uma vez.
    assert.deepStrictEqual(result, LIKEDCONTENT); // Verifica se o resultado da função é o esperado.
    findStub.restore(); // Restaura a função 'find' original.
  });

  it("Should handle error when finding likes", async () => { // Testa função 'find' do controlador.
    const errorMessage = "Erro ao buscar likes";
    const findStub = sinon.stub(controller, "find").resolves({ error: errorMessage });
    const result = await controller.find({}, RESPONSE);
    assert.strictEqual(findStub.calledOnce, true);
    assert.deepStrictEqual(result, { error: errorMessage });
    findStub.restore();
  }); 


    it("Should find one like", async () => { // Testa a função 'findOne' do controlador, seguindo a mesma lógica dos testes anteriores.
      const findOneStub = mockAsync(controller, "findOne", LIKEDCONTENT);
      const result = await controller.findOne({}, RESPONSE);
      assert.strictEqual(findOneStub.calledOnce, true);
      assert.deepStrictEqual(result, LIKEDCONTENT);
      findOneStub.restore();
    });

    it("Should handle error when finding one like", async () => { // Testa o tratamendo do erro ao buscra o like
      const errorMessage = "Erro ao buscar UM like";
      const findOneStub = sinon.stub(controller, "findOne").resolves({ error: errorMessage });
      const result = await controller.findOne({}, RESPONSE);
      assert.strictEqual(findOneStub.calledOnce, true);
      assert.deepStrictEqual(result, { error: errorMessage });
      findOneStub.restore();
    }); 



      it("Should create one like", async () => { // Testa a função 'create' do controlador, seguindo a mesma lógica dos testes anteriores.
        const createStub = mockAsync(controller, "create", LIKEDCONTENT);
        const result = await controller.create({}, RESPONSE);
        assert.strictEqual(createStub.calledOnce, true);
        assert.deepStrictEqual(result, LIKEDCONTENT);
        createStub.restore();
      });
     it("Should handle error when creating likes", async () => { // Testa o tratamendo do erro ao dar likes
        const errorMessage = "Erro ao criar um like";
        const createStub = sinon.stub(controller, "create").resolves({ error: errorMessage });
        const result = await controller.create({}, RESPONSE);
        assert.strictEqual(createStub.calledOnce, true);
        assert.deepStrictEqual(result, { error: errorMessage });
        createStub.restore();
      });

        it("Should delete one like", async () => { // Testa a função 'delete' do controlador, seguindo a mesma lógica dos testes anteriores.
          const deleteStub = mockAsync(controller, "delete", LIKEDCONTENT);
          const result = await controller.delete({}, RESPONSE);
          assert.strictEqual(deleteStub.calledOnce, true);
          assert.deepStrictEqual(result, LIKEDCONTENT);
          deleteStub.restore();
        });
        it("Should handle error when deleting likes", async () => { // Testa o tratamendo do erro ao deletar os likes
          const errorMessage = "Erro ao deletar um like";
          const deleteStub = sinon.stub(controller, "delete").resolves({ error: errorMessage });
          const result = await controller.delete({}, RESPONSE);
          assert.strictEqual(deleteStub.calledOnce, true);
          assert.deepStrictEqual(result, { error: errorMessage });
          deleteStub.restore();
        }); 
});