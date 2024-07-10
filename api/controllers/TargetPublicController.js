module.exports = {
  create: async function (req, res) {
    try {
      const newTargetPublic = await TargetPublic.create({
        target_public: req.body.target_public,
      }).fetch();
      return res.json(newTargetPublic);
    } catch (err) {
      return res.status(500).json({ error: "Erro ao criar Público alvo" });
    }
  },
  findOne: async function (req, res) {
    try {
      const targetPublic = await TargetPublic.findOne({
        id: req.params.targetPublicId,
      });
      if (!targetPublic) {
        return res.status(404).json({ error: "Público alvo não existente" });
      }
      return res.json(targetPublic);
    } catch (err) {
      return res.status(500).json({ error: "Erro ao buscar Público alvo" });
    }
  },
  find: async function (req, res) {
    try {
      const target = await TargetPublic.find();
      if (!target) {
        return res.status(404).json({ error: "Erro a buscar registros" });
      }
      return res.json(target);
    } catch (err) {
      sails.log.error(err);
      return res.status(500).json({ error: "Erro a buscar registros" });
    }
  },
  update: async function (req, res) {
    const body = {
      id: req.body.id,
      target_public: req.body.target_public,
    };
    try {
      const updatedTargetPublic = await TargetPublic.updateOne({
        id: body.id,
      }).set({
        target_public: body.target_public,
      });
      if (!updatedTargetPublic) {
        return res.status(404).json({ error: "Público alvo não encontrado" });
      }
      return res.json(updatedTargetPublic);
    } catch (err) {
      return res.status(500).json({ error: "Erro ao atualizar Público alvo" });
    }
  },
  delete: async function (req, res) {
    try {
      const deletedTargetPublic = await TargetPublic.destroyOne({
        id: req.params.targetPublicId,
      });
      if (!deletedTargetPublic) {
        return res.status(404).json({ error: "Público alvo não encontrado" });
      }
      return res.json(deletedTargetPublic);
    } catch (err) {
      return res.status(500).json({ error: "Erro ao deletar Público alvo" });
    }
  },
};
