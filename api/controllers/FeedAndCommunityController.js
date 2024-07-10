module.exports = {
  find: async function (req, res) {
    try {
      const posts = await FeedAndCommunity.find()
        .populate("id_type_post")
        .populate("id_user");
      return res.json(posts);
    } catch (error) {
      return res.status(500).json({ error: "Erro ao buscar os posts" });
    }
  },
  findOneByUserId: async function (req, res) {
    try {
      const id = req.params.userId;
      const post = await FeedAndCommunity.find({ id_user: id });
      if (!post) {
        return res
          .status(404)
          .json({ error: "Registro de post não encontrado" });
      }
      return res.json(post);
    } catch (error) {
      return res.status(500).json({ error: "Erro ao buscar o post" });
    }
  },
  findOneByTypePost: async function (req, res) {
    try {
      const id = req.params.typePostId;
      const post = await FeedAndCommunity.find({ id_type_post: id }).populate(
        "id_user"
      );
      if (!post) {
        return res
          .status(404)
          .json({ error: "Registro de post não encontrado" });
      }
      return res.json(post);
    } catch (error) {
      return res.status(500).json({ error: "Erro ao buscar o post" });
    }
  },
  findByInterests: async function (req, res) {
    let feedAndCommunity = [];
    try {
      const targetPublicsIds = req.query.targetPublics.split(",").map(Number);
      const actionsIds = req.query.actions.split(",").map(Number);
      const targetPublics = await FeedAndCommunityTargetPublic.find({
        id_target_public: {
          in: targetPublicsIds,
        },
      }).populate("id_feed_and_community");
      const targetPublicsResponse = targetPublics;
      for (const register of targetPublicsResponse) {
        const identifiers = feedAndCommunity.map((post) => post.id);
        if (!register.id_feed_and_community) {
          continue;
        }
        if (identifiers.includes(register.id_feed_and_community.id)) {
          continue;
        }
        try {
          const user = await Users.findOne({
            id: register.id_feed_and_community.id_user,
          });
          register.id_feed_and_community.id_user = user;
          feedAndCommunity.push(register.id_feed_and_community);
        } catch (error) {
          sails.log(error);
        }
      }
      const actions = await FeedAndCommunityActions.find({
        id_action: {
          in: actionsIds,
        },
      }).populate("id_feed_and_community");
      const actionsResponse = actions;
      for (const register of actionsResponse) {
        const identifiers = feedAndCommunity.map((post) => post.id);
        sails.log(register);
        if (!register.id_feed_and_community) {
          continue;
        }
        if (identifiers.includes(register.id_feed_and_community.id)) {
          continue;
        }
        try {
          const user = await Users.findOne({
            id: register.id_feed_and_community.id_user,
          });
          register.id_feed_and_community.id_user = user;
          feedAndCommunity.push(register.id_feed_and_community);
        } catch (error) {
          sails.log(error);
        }
      }

      return res.json(feedAndCommunity);
    } catch (error) {
      sails.log(error);
      return res.status(500).json({ error: "Erro ao buscar os interesses" });
    }
  },

  create: async function (req, res) {
    const post = {
      post_content: req.body.post_content,
      post_image_url: req.body.post_image_url,
      likes: req.body.likes,
      project_title: req.body.project_title,
      project_description: req.body.project_description,
      project_cost: req.body.project_cost,
      project_duration: req.body.project_duration,
      project_volunteers_quantity: req.body.project_volunteers_quantity,
      id_user: req.body.id_user,
      id_type_post: req.body.id_type_post,
    };
    try {
      const newPost = await FeedAndCommunity.create(post).fetch();
      return res.json(newPost);
    } catch (error) {
      sails.log.error(error);
      return res
        .status(500)
        .json({ error: "Erro ao criar registro de feed e comunidade" });
    }
  },

  update: async function (req, res) {
    try {
      const id = req.params.postId;
      const post = {
        post_content: req.body.post_content,
        post_image_url: req.body.post_image_url,
        likes: req.body.likes,
        project_title: req.body.project_title,
        project_description: req.body.project_description,
        project_cost: req.body.project_cost,
        project_duration: req.body.project_duration,
        project_volunteers_quantity: req.body.project_volunteers_quantity,
        id_user: req.body.id_user,
        id_type_post: req.body.id_type_post,
      };
      const updatedPost = await FeedAndCommunity.updateOne({ id: id }).set(
        post
      );
      if (!updatedPost) {
        return res
          .status(404)
          .json({ error: "Registro de post não encontrado" });
      }
      return res.json(updatedPost);
    } catch (error) {
      sails.log.error(error);
      return res.status(500).json({ error: "Erro ao atualizar post" });
    }
  },
  updateLikes: async function (req, res) {
    try {
      const id = req.params.postId;
      const post = {
        likes: req.body.likes,
      };
      const updatedPost = await FeedAndCommunity.updateOne({ id: id }).set(
        post
      );
      if (!updatedPost) {
        return res
          .status(404)
          .json({ error: "Registro de post não encontrado" });
      }
      return res.json(updatedPost);
    } catch (error) {
      sails.log.error(error);
      return res.status(500).json({ error: "Erro ao atualizar post" });
    }
  },

  delete: async function (req, res) {
    try {
      const id = req.params.postId;
      const deletedPost = await FeedAndCommunity.destroyOne({ id: id });
      if (!deletedPost) {
        return res
          .status(404)
          .json({ error: "Registro de post não encontrado" });
      }
      return res.json(deletedPost);
    } catch (error) {
      return res.status(500).json({ error: "Erro ao deletar post" });
    }
  },
};
