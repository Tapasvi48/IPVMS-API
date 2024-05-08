import {
  registerUser,
  registerUserBody,
  loginUser,
  loginUserBody,
  forgotPassword,
  forgotUserBody,
  getAllUsers,
  resetPassword,
  resetUserBody,
  resetAuthUserBody,
  resetPasswordAuth,
} from "./user.js";

import {
  createNewCategory,
  deleteCategory,
  deleteCategoryBody,
  editCategory,
  editCategoryBody,
  getAllCategories,
  getDocumentCategories,
  registerCategoryBody
} from './category.js';





const apiDocumentation = {
  openapi: "3.0.1",
  info: {
    version: "1.3.0",
    title: "IPVMS api descriptions",
    description: "Description of api",
    termsOfService: "https://mysite.com/terms",
    contact: {
      name: "Developer name",
      email: "dev@example.com",
      url: "https://devwebsite.com",
    },
    license: {
      name: "Apache 2.0",
      url: "https://www.apache.org/licenses/LICENSE-2.0.html",
    },
  },
  servers: [
    {
      url: "http://127.0.0.1:5001",
      description: "Local Server",
    },
    {
      url: "http://ipvms-api.exitest.com",
      description: "Production Server",
    },
  ],
  tags: [
    {
      name: "Roles",
    },
    {
      name: "Users",
    },
    {
      name: "Category",
    },

  ],
  paths: {
    "/api/user/registerUser": {
      post: registerUser,
    },
    "/api/user/loginUser": {
      post: loginUser,
    },
    "/api/user/getAllUsers": {
      get: getAllUsers,
    },
    "/api/user/forgotPassword": {
      post: forgotPassword,
    },
    "/api/user/resetPassword/{token}": {
      post: resetPassword,
    },
    "/api/user/resetPassword": {
      post: resetPasswordAuth,
    },
    "/api/categories/createNewCategory": {
      post: createNewCategory,
    },
    "/api/categories/getAllCategories": {
      get: getAllCategories
    },
    "/api/categories/editCategory": {
      patch: editCategory,
    },
    "/api/categories/deleteCategory": {
      patch: deleteCategory
    },
    "/documents/count/category": {
      get: getDocumentCategories
    }

  },
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
    schemas: {
      registerUserBody,
      loginUserBody,
      forgotUserBody,
      resetUserBody,
      resetAuthUserBody,
      registerCategoryBody,
      editCategoryBody,
      deleteCategoryBody
    },
  },
};
export { apiDocumentation };
