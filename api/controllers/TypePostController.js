module.exports = {
  create: async function (req, res) {
    try {
      const newTypePost = await TypePost.create({
        type: req.body.type,
      }).fetch();

      return res.json(newTypePost);
    } catch (err) {
      return res.status(500).json({ error: "Erro ao criar tipo de post" });
    }
  },
  find: async function (req, res) {
    try {
      const type = await TypePost.find();
      if (!type) {
        return res.status(404).json({ error: "Tipo de post não encontrado" });
      }
      return res.json(type);
    } catch (err) {
      return res.status(500).json({ error: "Erro ao buscar tipo de post" });
    }
  },
  findOne: async function (req, res) {
    const id = req.params.typePostId;
    try {
      const type = await TypePost.findOne({ id: id });
      if (!type) {
        return res.status(404).json({ error: "Tipo de post não encontrado" });
      }
      return res.json(type);
    } catch (err) {
      sails.log.error(err);
      return res.status(500).json({ error: "Erro ao buscar tipo de post" });
    }
  },
  update: async function (req, res) {
    const id = req.params.typePostId;
    const postType = req.body.type_post;
    try {
      const type = await TypePost.updateOne({ id: id }).set({
        type_post: postType,
      });
      if (!type) {
        return res.status(404).json({ error: "Tipo de post não encontrado" });
      }
      return res.json(type);
    } catch (err) {
      return res.status(500).json({ error: "Erro ao buscar tipo de post" });
    }
  },
};
