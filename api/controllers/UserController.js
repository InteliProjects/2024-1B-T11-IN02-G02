module.exports = {
  // Criar um novo usuário
  create: async function (req, res) {
    const body = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      city: req.body.city,
      state: req.body.state,
      birthdate: req.body.birthdate,
      profile_picture_url: req.body.profile_picture_url,
      profile_description: req.body.profile_description,
      type_users: req.body.type_users,
    };
    try {
      const newUser = await Users.create(body).fetch();
      return res.json(newUser);
    } catch (err) {
      sails.log.error(err);
      return res.status(500).json({ error: "Erro ao criar usuário" });
    }
  },

  findOne: async function (req, res) {
    try {
      const record = await Users.findOne({ id: req.params.userId });
      if (!record) {
        return res.status(404).json({ error: "Usuário não encontrado" });
      }
      return res.json(record);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },
  find: async function (req, res) {
    try {
      const record = await Users.find();
      if (!record) {
        return res.status(404).json({ error: "Usuário não encontrado" });
      }
      return res.json(record);
    } catch (err) {
      sails.log.error(err);
      return res.status(500).json({ error: err.message });
    }
  },

  // Atualizar um usuário
  update: async function (req, res) {
    try {
      const updatedUser = await Users.updateOne({ id: req.params.userId }).set(
        req.body
      );
      if (!updatedUser) {
        return res.status(404).json({ error: "Usuário não encontrado" });
      }
      return res.json(updatedUser);
    } catch (err) {
      sails.log(err);
      return res.status(500).json({ error: err.message });
    }
  },

  // Deletar um usuário
  delete: async function (req, res) {
    try {
      const deletedUser = await Users.destroyOne({ id: req.params.userId });
      if (!deletedUser) {
        return res.status(404).json({ error: "Usuário não encontrado" });
      }
      return res.json(deletedUser);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },
};
