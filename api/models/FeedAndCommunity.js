module.exports = {
  attributes: {
    id_user: {
      model: "Users",
    },

    post_content: {
      type: "string",
      maxLength: 250,
    },

    post_image_url: {
      type: "string",
    },

    likes: {
      type: "number",
    },

    id_type_post: {
      model: "TypePost",
    },

    project_title: {
      type: "string",
      maxLength: 150,
    },

    project_description: {
      type: "string",
      maxLength: 250,
    },

    project_cost: {
      type: "number"
    },

    project_duration: {
      type: "string",
      maxLength: 50,
    },

    project_volunteers_quantity: {
      type: "number"
    },
  },
};
