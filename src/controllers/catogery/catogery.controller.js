import { pool } from "../../core/database/db.js";

import * as categoryServices from "../../services/category.services.js";

export const createNewCategory = async (req, res, next) => {

  try {
    const createdCategory = await categoryServices.createNewCategoryService(req.body);
    return res.status(201).json({
      success: true,
      message: "Category Registered",
      length: createdCategory.length,
      data: createdCategory.rows,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllCategories = async (req, res, next) => {

  try {

    const returnedCategories = await categoryServices.getAllCategoriesService();
    return res.status(200).json({
      success: true,
      message: "All Categories are :",
      length: returnedCategories.length,
      data: returnedCategories.rows
    });

  } catch (error) {
    next(error);
  }
};

export const editCategory = async (req, res, next) => {

  try {
    const updatedCategory = await categoryServices.editCategoryService(req.body);

    return res.status(200).json({
      success: true,
      message: "Updated category:",
      length: updatedCategory.length,
      data: updatedCategory.rows
    });


  } catch (error) {
    next(error);
  }

};

export const deleteCategory = async (req, res, next) => {

  try {

    const deleteCategoryresut = await categoryServices.deleteCategoryService(req.body);

    return res.status(200).json({
      success: true,
      message: "Successfully deleted category",
      length: deleteCategoryresut.length
    });

  } catch (error) {
    next(error);
  }
};


export const getDocumentCategories = async (req, res, next) => {

  try {
    const getDocumentCategoriesResult = await categoryServices.getdocumentCategoriesService();

    return res.status(200).json({
      success: true,
      message: "Document Categories are:",
      length: getDocumentCategoriesResult.length,
      data: getDocumentCategoriesResult.rows
    });
  } catch (error) {
    next(error);
  }
};