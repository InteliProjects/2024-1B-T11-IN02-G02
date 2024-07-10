module.exports = {
  attributes: {
    id_feed_and_community: {
      model: "FeedAndCommunity", // 'user' é o nome do modelo de usuário
    },

    id_user: {
      model: "Users",
    },

    liked: {
      type: "boolean",
      required: true,
    },
  },
};
