
import { createCategory, getAllCategory, updateCategory, getDocumentCategories } from "../query/category.js";
import {
    BadGatewayError,
    ConflictError,
    NotFoundError,
    ValidationError,
} from "../Error/customError.js";


export const createNewCategoryService = async (body) => {
    const { category } = body;
    try {

        const isActive = true;
        const createdCategoryResult = await createCategory({
            category, isActive
        });

        const data = {
            length: createdCategoryResult.rowCount,
            rows: createdCategoryResult.rows
        };

        return data;

    } catch (error) {
        throw error;
    }

};

export const getAllCategoriesService = async () => {


    try {
        const returnedCategories = await getAllCategory();


        if ((returnedCategories.rowCount != 0) || null) {
            const data = {
                length: returnedCategories.rowCount,
                rows: returnedCategories.rows
            };
            return data;

        } else {

            throw new NotFoundError('No categories exists.');

        }
    } catch (error) {
        throw error;
    }
};


export const deleteCategoryService = async (body) => {


    const { id } = body;
    const type = "delete";

    if (id === null || id === '') {
        throw new ValidationError("id should be not be empty.");
    }

    try {
        const deleteCategoryresut = await updateCategory({
            id,
            type
        });
        console.log(deleteCategoryresut.rowCount);

        if (deleteCategoryresut.rowCount != 0) {
            const data = {
                length: deleteCategoryresut.rowCount,
                rows: deleteCategoryresut.rows
            };
            return data;
        } else {
            throw new NotFoundError('Category not found to delete.');
        }

    } catch (error) {
        throw error;
    }
};


export const editCategoryService = async (body) => {


    const { id, category } = body;
    const type = "edit";

    if (category === '' || null || id === null || id === '') {
        throw new ValidationError("id or Category name should not be empty.");
    }

    try {
        const editCategoryresut = await updateCategory({
            id,
            category,
            type
        });

        if (editCategoryresut.rowCount != 0) {
            const data = {
                length: editCategoryresut.rowCount,
                rows: editCategoryresut.rows
            };
            return data;
        } else {
            throw new NotFoundError("Category not found to update.");
        }
    } catch (error) {
        throw error;
    }
};

export const getdocumentCategoriesService = async () => {


    try {
        const returnedCategories = await getDocumentCategories();


        if ((returnedCategories.rowCount != 0) || null) {
            const data = {
                length: returnedCategories.rowCount,
                rows: returnedCategories.rows
            };
            return data;

        } else {

            throw new NotFoundError('No categories exists.');

        }
    } catch (error) {
        throw error;
    }
};
