module.exports = {
  find: async function (req, res) {
    try {
      const records = await UserActionsInterests.find().populate("id_action");
      return res.json(records);
    } catch (error) {
      return res.status(500).json({ error: "Erro ao buscar os registros" });
    }
  },

  findOne: async function (req, res) {
    try {
      const id = req.params.id;
      const record = UserActionsInterests.findOne({ id: id }).populate(
        "id_action"
      );
      if (!record) {
        return res.status(404).json({ error: "Registro não encontrado" });
      }
      return res.json(record);
    } catch (error) {
      return res.status(500).json({ error: "Erro ao buscar o registro" });
    }
  },
  create: async function (req, res) {
    try {
      const body = {
        id_user: req.body.id_user,
        id_action: req.body.id_action,
      };
      sails.log(body);
      const record = await UserActionsInterests.create(body);
      if (!record) {
        return res.status(404).json({ error: "Registro não criado" });
      }
      return res.json(record);
    } catch (error) {
      sails.log.error(error);
      return res.status(500).json({ error: "Erro ao criar o registro" });
    }
  },
};
