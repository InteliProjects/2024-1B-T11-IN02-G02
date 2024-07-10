module.exports = {
  find: async function (req, res) {
    try {
      const data = await LikedContent.find();
      return res.json(data);
    } catch (error) {
      sails.log.error(error);
      return res
        .status(500)
        .json({ error: "Erro ao buscar os registros de conteúdo curtido" });
    }
  },
  findOne: async function (req, res) {
    try {
      postId = req.params.postId;
      userId = req.params.userId;
      sails.log({
        id_feed_and_community: postId,
        id_user: userId,
      });
      const data = await LikedContent.findOne({
        id_feed_and_community: postId,
        id_user: userId,
      });
      return res.json(data);
    } catch (error) {
      sails.log.error(error);
      return res
        .status(500)
        .json({ error: "Erro ao buscar os registros de conteúdo curtido" });
    }
  },

  create: async function (req, res) {
    try {
      const postId = req.body.id_feed_and_community;
      const userId = req.body.id_user;
      const liked = req.body.liked;

      const newLike = await LikedContent.create({
        id_feed_and_community: postId,
        id_user: userId,
        liked: liked,
      }).fetch();
      
      return res.json(newLike);
    } catch (error) {
      return res.status(500).json({ error: "Erro ao curtir o post" });
    }
  },

  delete: async function (req, res) {
    try {
      const postId = req.params.postId;
      const userId = req.params.userId;
      const updatedLike = await LikedContent.destroyOne({
        id_feed_and_community: postId,
        id_user: userId,
      });
      return res.json(updatedLike);
    } catch (error) {
      return res.status(500).json({ error: "Erro ao descurtir o post" });
    }
  },
};
