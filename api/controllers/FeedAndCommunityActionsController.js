module.exports = {
  find: async function (req, res) {
    try {
      const associations = await FeedAndCommunityActions.find()
        .populate("id_action")
        .populate("id_feed_and_community");
      return res.json(associations);
    } catch (error) {
      return res.status(500).json({ error: "Erro ao buscar as associações" });
    }
  },

  findOne: async function (req, res) {
    try {
      const feedAndCommunityId = req.params.feedId;
      const actionId = req.params.actionId;
      const association = await FeedAndCommunityActions.findOne({
        id_action: actionId,
        id_feed_and_community: feedAndCommunityId,
      })
        .populate("id_action")
        .populate("id_feed_and_community");
      if (!association) {
        return res.status(404).json({ error: "Associação não encontrada" });
      }
      return res.json(association);
    } catch (error) {
      return res.status(500).json({ error: "Erro ao buscar a associação" });
    }
  },

  create: async function (req, res) {
    const feedAndCommunityId = req.body.feedId;
    const actionId = req.body.actionId;
    try {
      const newAssociation = await FeedAndCommunityActions.create({
        id_action: actionId,
        id_feed_and_community: feedAndCommunityId,
      }).fetch();
      return res.json(newAssociation);
    } catch (error) {
      return res.status(500).json({ error: "Erro ao criar a associação" });
    }
  },

  // update: async function (req, res) {
  //   try {
  //     const id = req.params.id;
  //     const updatedAssociation = await FeedAndCommunityActions.updateOne({
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
