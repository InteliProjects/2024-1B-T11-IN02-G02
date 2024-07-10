const sinon = require("sinon");
const assert = require("assert"); // Importa a biblioteca de assert do Node.js para verificar as condições dos testes.
const controller = require("../../../api/controllers/UserController"); // Importa o UserController que está sendo testado.
const { mockAsync, RESPONSE, USER } = require("../util/index"); // Importa funções de utilidade e constantes necessárias para os testes.

describe("UserController", () => { // Descreve um conjunto de testes para o UserController.
    it("Should create one user", async () => { // Testa a função 'create' do controlador.
        const createStub = mockAsync(controller, "create", USER); // Simula a função 'create' do controlador.
        const result = await controller.create({}, RESPONSE); // Chama a função 'create' com parâmetros e armazena o resultado.
        assert.strictEqual(createStub.calledOnce, true); // Verifica se a função 'create' foi chamada uma vez.
        assert.deepStrictEqual(result, USER); // Verifica se o resultado da função é o esperado.
        createStub.restore(); // Restaura a função 'create' original.
    }); 

    it("Should handle error creating user", async () => { // Testa o tratamento de erro ao criar um usuário.
        const errorMessage = "Erro ao criar usuario";
        const createStub = sinon.stub(controller, "create").resolves({ error: errorMessage });
        const result = await controller.create({}, RESPONSE);
        assert.strictEqual(createStub.calledOnce, true);
        assert.strictEqual(result.error, errorMessage);
        createStub.restore();
    });


    it("Should find one user", async () => { // Testa a função 'findOne' do controlador, seguindo a mesma lógica dos testes anteriores.
        const findOneStub = mockAsync(controller, "findOne", USER);
        const result = await controller.findOne({}, RESPONSE);
        assert.strictEqual(findOneStub.calledOnce, true);
        assert.deepStrictEqual(result, USER);
        findOneStub.restore();
    });

    it("Should handle error finding user", async () => { // Testa o tratamento de erro ao encontrar um usuário.
        const errorMessage = "Erro ao buscar as usuario";
        const findOneStub = sinon.stub(controller, "findOne").resolves({ error: errorMessage });
        const result = await controller.findOne({}, RESPONSE);
        assert.strictEqual(findOneStub.calledOnce, true);
        assert.strictEqual(result.error, errorMessage);
        findOneStub.restore();
    }); 


    it("Should update one user", async () => { // Testa a função 'update' do controlador, seguindo a mesma lógica dos testes anteriores.
        const updateStub = mockAsync(controller, "update", USER);
        const result = await controller.update({}, RESPONSE);
        assert.strictEqual(updateStub.calledOnce, true);
        assert.deepStrictEqual(result, USER);
        updateStub.restore();
    });

    it("Should handle error updating a user", async () => { // Testa o tratamento de erro ao atualizar um usuário.
        const errorMessage = "Erro ao atualizar usuario";
        const updateStub = sinon.stub(controller, "update").resolves({ error: errorMessage });
        const result = await controller.update({}, RESPONSE);
        assert.strictEqual(updateStub.calledOnce, true);
        assert.strictEqual(result.error, errorMessage);
        updateStub.restore();
    });


    it("Should delete one user", async () => { // Testa a função 'delete' do controlador, seguindo a mesma lógica dos testes anteriores.
        const deleteStub = mockAsync(controller, "delete", USER);
        const result = await controller.delete({}, RESPONSE);
        assert.strictEqual(deleteStub.calledOnce, true);
        assert.deepStrictEqual(result, USER);
        deleteStub.restore();
    });

    it("Should handle error deleting a user", async () => { // Testa o tratamento de erro ao deletar um usuário.
        const errorMessage = "Erro ao deletar usuario";
        const deleteStub = sinon.stub(controller, "delete").resolves({ error: errorMessage });
        const result = await controller.delete({}, RESPONSE);
        assert.strictEqual(deleteStub.calledOnce, true);
        assert.strictEqual(result.error, errorMessage);
        deleteStub.restore();
        });
    });