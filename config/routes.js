module.exports.routes = {
  // ACTIONS
  "GET /actions": "ActionController.find",
  "GET /action/:actionId": "ActionController.findOne",
  "POST /action": "ActionController.create",
  "PUT /action/:actionId": "ActionController.update",
  "DELETE /action/:actionId": "ActionController.delete",

  // FEED AND COMMUNITY ACTIONS
  "GET /feed-and-community-actions": "FeedAndCommunityActionsController.find",
  "GET /feed-and-community-actions/:feedId/:actionId":
    "FeedAndCommunityActionsController.findOne",
  "POST /feed-and-community-actions":
    "FeedAndCommunityActionsController.create",
  // "PUT /feed-and-community-actions/:actionId":
  //   "FeedAndCommunityActionsController.update",

  // FEED AND COMMUNITY
  "GET /feed-and-community": "FeedAndCommunityController.find",
  "GET /feed-and-community/:userId/user":
    "FeedAndCommunityController.findOneByUserId",
  "GET /feed-and-community/:typePostId/type-post":
    "FeedAndCommunityController.findOneByTypePost",
  "GET /feed-and-community/interests":
    "FeedAndCommunityController.findByInterests",
  "POST /feed-and-community": "FeedAndCommunityController.create",
  "PUT /feed-and-community/:postId": "FeedAndCommunityController.update",
  "PUT /feed-and-community-likes/:postId":
    "FeedAndCommunityController.updateLikes",
  "DELETE /feed-and-community/:postId": "FeedAndCommunityController.delete",

  // FEED AND COMMUNITY TARGET PUBLIC
  "GET /feed-and-community-target-public":
    "FeedAndCommunityTargetPublicController.find",
  "GET /feed-and-community-target-public/:feedId/:targetPublicId":
    "FeedAndCommunityTargetPublicController.findOne",
  "POST /feed-and-community-target-public/":
    "FeedAndCommunityTargetPublicController.create",
  // "PUT /feed-and-community-target-public/:targetPublicId":
  //   "FeedAndCommunityTargetPublicController.update",

  // LIKED CONTENT
  "GET /liked-content": "LikedContentController.find",
  "GET /liked-content/:postId/:userId": "LikedContentController.findOne",
  "POST /liked-content": "LikedContentController.create",
  "DELETE /liked-content/:postId/:userId": "LikedContentController.delete",

  // TARGET PUBLIC
  "GET /target-public/:targetPublicId": "TargetPublicController.findOne",
  "GET /target-public": "TargetPublicController.find",
  "POST /target-public/": "TargetPublicController.create",
  "PUT /target-public/:targetPublicId": "TargetPublicController.update",
  "DELETE /target-public/:targetPublicId": "TargetPublicController.delete",

  // TYPE POST
  "POST /type-post": "TypePostController.create",
  "GET /type-post": "TypePostController.find",
  "GET /type-post/:typePostId": "TypePostController.findOne",
  "PUT /type-post/:typePostId": "TypePostController.update",

  // TYPE USER
  "POST /type-user": "TypeUserController.create",
  "GET /type-user/:typeUserId": "TypeUserController.findOne",
  "GET /type-user": "TypeUserController.find",

  // USER ACTIONS INTERESTS
  "GET /user-actions-interests": "UserActionsInterestsController.find",
  "GET /user-actions-interests/:id": "UserActionsInterestsController.findOne",
  "POST /user-actions-interests": "UserActionsInterestsController.create",

  // USER CONTROLLER
  "GET /user/:userId": "UserController.findOne",
  "GET /user": "UserController.find",
  "POST /user": "UserController.create",
  "PUT /user/:userId": "UserController.update",
  "DELETE /user/:userId": "UserController.delete",

  // USER TARGET PUBLIC INTERESTS
  "GET /user-target-public-interests":
    "UserTargetPublicInterestsController.find",
  "GET /user-target-public-interests/:id":
    "UserTargetPublicInterestsController.findOne",
  "POST /user-target-public-interests":
    "UserTargetPublicInterestsController.create",
  "/": {
    view: "pages/cadastro",
  },
  // "/page2": {
  //   view: "pages/page2",
  // },
  "/": { view: "pages/homepage" },
  "/community": { view: "pages/community" },
  // "/post": { view: "pages/post" },
  "/cadastro": { view: "pages/cadastro" },
  "/criar-publicacao-faca-voce-mesmo": { view: "pages/facaVoceMesmo" },
  // "/feed": { view: "pages/feed" },
  "/feed": { view: "pages/feed-test" },
  "/login": { view: "pages/login2" },
  "/perfil-bolhas": { view: "pages/perfilBolhinhas" },
  // "/ver-perfil": { view: "pages/verPerfil" },
  "/criar-publicacao-livre": { view: "pages/publicacao1" },
  "/escolha-sua-publicacao": { view: "pages/telaPublicacao" },
  "/ver-perfil/:userId": { view: "pages/verPerfil-userId" },
  "/editar-perfil": { view: "pages/verPerfilEdit" },
  "/teste-imagem": { view: "pages/teste-imagem" },
};
