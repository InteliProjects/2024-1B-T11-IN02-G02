const sinon = require("sinon");

const mockAsync = (model, module, result = null) => {
  return sinon.stub(model, module).resolves(result);
};

const RESPONSE = {
  json: function (data) {
    return data;
  },
  status: function (data) {
    return data;
  },
};
const ACTION = {
  createdAt: 1716334134663,
  updatedAt: 1716334134663,
  id: 1,
  actions: "esporte",
};
const FEEDCOMMUNITYACTIONS = {
  createdAt: 0,
  updatedAt: 0,
  id: 1,
  id_action: {
  createdAt: 1716334134663,
  updatedAt: 1716334134663,
  id: 1,
  actions: "esporte"
  },
    id_feed_and_community: null
};
const FEEDCOMMUNITY = {
  createdAt: 1716517475302,
  updatedAt: 1716518989145,
  id: 4,
  post_content: "boa tarde galera!",
  post_image_url: "xxxxxxxx",
  likes: 0,
  project_title: "a",
  project_description: "a",
  project_cost: 0,
  project_duration: "a",
  project_volunteers_quantity: 0,
  id_user: 1,
  id_type_post: {
    createdAt: 0,
    updatedAt: 1716497284630,
    id: 1,
    type_post: "Livre"
  }
};
const FEEDCOMMUNITYTARGETPUBLIC = {
  createdAt: 1716334134664,
  updatedAt: 1716334134664,
  id: 2,
  id_feed_and_community: null,
  id_target_public: null,
};
const USER = {
  createdAt: 1716546362378,
  updatedAt: 1716546362378,
  id: 1,
  name: "Mariana de Paula",
  email: "teste@mari.com",
  password: "bom dia",
  city: "Sao Paulo",
  state: "SP",
  birthdate: "25/03/2004",
  profile_picture_url: "yyyyyyy",
  profile_description: "Sou a Mari",
  type_users: 3
};
const TARGETPUBLIC = {
  createdAt: 0,
  updatedAt: 0,
  id: 3,
  target_public: "Crianças",
};
const USERACTIONSINTERESTS = {
  createdAt: 1716500926676,
  updatedAt: 1716500926676,
  id: 1,
  id_user: 2,
  id_action: {
    createdAt: 1716334134663,
    updatedAt: 1716334134663,
    id: 1,
    actions: "esporte",
  }
};
const LIKEDCONTENT = {
  createdAt: 1716490049555,
  updatedAt: 1716490049555,
  id: 2,
  liked: true,
  id_feed_and_community: 2,
  id_user: 2
};
const TYPEPOST = {
  createdAt: 0,
  updatedAt: 1716497284630,
  id: 1,
  type_post: "Livre"
};
const USERTARGETPUBLICINTERESTS = {
  createdAt: 1716504489654,
  updatedAt: 1716504489654,
  id: 1,
  id_user: null,
  id_target_public: null
};
module.exports = {
  mockAsync,
  RESPONSE,
  ACTION,
  FEEDCOMMUNITYACTIONS,
  FEEDCOMMUNITY,
  USER,
  FEEDCOMMUNITYTARGETPUBLIC,
  TARGETPUBLIC,
  USERACTIONSINTERESTS,
  LIKEDCONTENT,
  TYPEPOST,
  LIKEDCONTENT,
  USERTARGETPUBLICINTERESTS
};

