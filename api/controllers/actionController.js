module.exports = {
  find: async function (req, res) {
    try {
      const actions = await Action.find();
      return res.json(actions);
    } catch (error) {
      return res.status(500).json({ error: "Erro ao buscar as ações" });
    }
  },

  // Função para buscar uma ação específica pelo ID
  findOne: async function (req, res) {
    try {
      const id = req.params.actionId;
      const action = await Action.findOne({ id: id });
      if (!action) {
        return res.status(404).json({ error: "Ação não encontrada" });
      }
      return res.json(action);
    } catch (error) {
      return res.status(500).json({ error: "Erro ao buscar a ação" });
    }
  },

  // Função para criar uma nova ação
  create: async function (req, res) {
    try {
      const newAction = await Action.create({
        actions: req.body.action,
      }).fetch();
      return res.json(newAction);
    } catch (error) {
      return res.status(500).json({ error: "Erro ao criar a ação" });
    }
  },

  // Função para atualizar uma ação existente
  update: async function (req, res) {
    try {
      const id = req.params.actionId;
      const updatedAction = await Action.updateOne({ id: id }).set({
        actions: req.body.actions,
      });
      if (!updatedAction) {
        return res.status(404).json({ error: "Ação não encontrada" });
      }
      return res.json(updatedAction);
    } catch (error) {
      return res.status(500).json({ error: "Erro ao atualizar a ação" });
    }
  },

  // Função para deletar uma ação
  delete: async function (req, res) {
    try {
      const id = req.params.actionId;
      const deletedAction = await Action.destroyOne({ id: id });
      if (!deletedAction) {
        return res.status(404).json({ error: "Ação não encontrada" });
      }
      return res.json(deletedAction);
    } catch (error) {
      return res.status(500).json({ error: "Erro ao deletar a ação" });
    }
  },
};
