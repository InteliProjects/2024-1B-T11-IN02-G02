module.exports = {
  create: async function (req, res) {
    try {
      const newTypeUser = await TypeUser.create({
        type_user: req.body.type_user,
      }).fetch();
      return res.json(newTypeUser);
    } catch (err) {
      sails.log.error(err);
      return res.status(500).json({ error: "Erro ao criar tipo de usuário" });
    }
  },

  findOne: async function (req, res) {
    try {
      sails.log(req.params.typeUserId);
      const type = await TypeUser.findOne({ id: req.params.typeUserId });
      if (!type) {
        return res
          .status(404)
          .json({ error: "Tipo de usuário não encontrado" });
      }
      return res.json(type);
    } catch (err) {
      sails.log.error(err);
      return res.status(500).json({ error: "Erro ao buscar tipo de usuário" });
    }
  },
  find: async function (req, res) {
    try {
      const type = await TypeUser.find();
      if (!type) {
        return res
          .status(404)
          .json({ error: "Tipos de usuário não encontrado" });
      }
      return res.json(type);
    } catch (err) {
      sails.log.error(err);
      return res.status(500).json({ error: "Erro ao buscar tipos de usuário" });
    }
  },
};
