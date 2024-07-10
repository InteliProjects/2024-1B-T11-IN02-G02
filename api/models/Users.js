module.exports = {
  attributes: {
    name: {
      type: "string",
      maxLength: 500,
    },

    email: {
      type: "string",
      maxLength: 500,
    },

    password: {
      type: "string",
      maxLength: 500,
    },

    city: {
      type: "string",
      maxLength: 500,
    },

    state: {
      type: "string",
      maxLength: 500,
    },

    birthdate: {
      type: "string",
      maxLength: 500,
    },

    profile_picture_url: {
      type: "string",
      maxLength: 500,
    },

    profile_description: {
      type: "string",
      maxLength: 500,
    },

    type_users: {
      model: "TypeUser", // 'user' é o nome do modelo de usuário
    },
  },
};
