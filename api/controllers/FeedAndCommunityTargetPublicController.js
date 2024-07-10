module.exports = {
  find: async function (req, res) {
    try {
      const associations = await FeedAndCommunityTargetPublic.find()
        .populate("id_target_public")
        .populate("id_feed_and_community");
      return res.json(associations);
    } catch (error) {
      return res.status(500).json({ error: "Erro ao buscar as associações" });
    }
  },

  findOne: async function (req, res) {
    try {
      const feedId = req.params.feedId;
      const targetPublicId = req.params.targetPublicId;
      const association = await FeedAndCommunityTargetPublic.findOne({
        id_feed_and_community: feedId,
        id_target_public: targetPublicId,
      }).populate("id_target_public");
      if (!association) {
        return res.status(404).json({ error: "Associação não encontrada" });
      }
      return res.json(association);
    } catch (error) {
      return res.status(500).json({ error: "Erro ao buscar a associação" });
    }
  },

  create: async function (req, res) {
    try {
      const newAssociation = await FeedAndCommunityTargetPublic.create({
        id_feed_and_community: req.body.feedId,
        id_target_public: req.body.targetPublicId,
      }).fetch();
      return res.json(newAssociation);
    } catch (error) {
      return res.status(500).json({ error: "Erro ao criar a associação" });
    }
  },

  // update: async function (req, res) {
  //   try {
  //     const id = req.params.id;
  //     const updatedAssociation = await FeedAndCommunityTargetPublic.updateOne({
  //       id,
  //     }).set(req.body);
  //     if (!updatedAssociation) {
  //       return res.status(404).json({ error: "Associação não encontrada" });
  //     }
  //     return res.json(updatedAssociation);
  //   } catch (error) {
  //     return res.status(500).json({ error: "Erro ao atualizar a associação" });
  //   }
  // },
};
