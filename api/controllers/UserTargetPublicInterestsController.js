module.exports = {
  find: async function (req, res) {
    try {
      const records = await UserTargetPublicInterests.find().populate(
        "id_target_public"
      );
      return res.json(records);
    } catch (error) {
      return res.status(500).json({ error: "Erro ao buscar os registros" });
    }
  },

  findOne: async function (req, res) {
    try {
      const id = req.params.id;
      const record = await UserTargetPublicInterests.findOne({
        id: id,
      }).populate("id_target_public");

      if (!record) {
        return res.status(404).json({ error: "Registro não encontrado" });
      }

      return res.json(record);
    } catch (error) {
      return res.status(500).json({ error: "Erro ao buscar o registro" });
    }
  },
  create: async function (req, res) {
    const body = {
      id_user: req.body.id_user,
      id_target_public: req.body.id_target_public,
    };
    try {
      const records = await UserTargetPublicInterests.create(body).fetch();
      return res.json(records);
    } catch (error) {
      sails.log.error(err);
      return res.status(500).json({ error: "Erro ao buscar os registros" });
    }
  },
};
