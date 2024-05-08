const createNewCategory = {
    tags: ["Category"],
    description: "Create a new category in the system",
    operationId: "createNewCategory",
    security: [
        {
            bearerAuth: [],
        },
    ],
    requestBody: {
        content: {
            "application/json": {
                schema: {
                    $ref: "#/components/schemas/registerCategoryBody",
                },
            },
        },
        required: true,
    },
    responses: {
        201: {
            description: "Category created successfully!",
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
                            success: {
                                type: "boolean",
                                example: true,
                            },
                            message: {
                                type: "string",
                                example: "Category Registered",
                            },
                            data: {
                                type: "object",
                                properties: {
                                    id: {
                                        type: "number",
                                        example: "980765",
                                    },
                                    category: {
                                        type: "string",
                                        example: "IT",
                                    },
                                    created_at: {
                                        type: "string",
                                        example: "2024-04-16T01:05:55.959Z",
                                    },
                                    is_active: {
                                        type: "boolean",
                                        example: true,
                                    },
                                    svg: {
                                        type: "string",
                                        example: null,
                                    },
                                    color: {
                                        type: 'string',
                                        example: null
                                    }
                                },
                            },
                        },
                    },
                },
            },
        },
        500: {
            description: "Internal Server Error",
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
                            success: {
                                type: "boolean",
                                example: false,
                            },
                            message: {
                                type: "string",
                                example: "Error in creating Category",
                            },
                        },
                    },
                },
            },
        },
        409: {
            description: "Conflict",
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
                            success: {
                                type: "boolean",
                                example: false,
                            },
                            message: {
                                type: "string",
                                example: "Category already Exists",
                            },
                        },
                    },
                },
            },
        },
    },
};

const registerCategoryBody = {
    type: "object",
    properties: {
        category: {
            type: "string",
            example: "IT",
        },
    },
};

const getAllCategories = {
    tags: ["Category"],
    description: "Get All Categories in the system",
    operationId: "getAllCategories",
    security: [
        {
            bearerAuth: [],
        },
    ],
    responses: {
        200: {
            description: "Get All Categories Succeess",
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
                            success: {
                                type: "boolean",
                                example: true,
                            },
                            message: {
                                type: "string",
                                example: "All Categories are :",
                            },
                            length: {
                                type: "number",
                                example: 8

                            },
                            data: {
                                type: "array",
                                items: {
                                    type: "object",
                                    properties: {
                                        id: {
                                            type: "number",
                                            example: "4818",
                                        },
                                        category: {
                                            type: "string",
                                            example: "IT",
                                        },
                                        created_at: {
                                            type: "string",
                                            example: "2024-04-16T01:05:55.959Z",
                                        },
                                        is_active: {
                                            type: "boolean",
                                            example: true,
                                        },
                                        svg: {
                                            type: "string",
                                            example: '',
                                        },
                                        color: {
                                            type: "sting",
                                            example: '#0C3D99',
                                        }

                                    },
                                },
                            },
                        },
                    },
                },
            },
        },
        500: {
            description: "Internal Server Error",
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
                            success: {
                                type: "boolean",
                                example: false,
                            },
                            message: {
                                type: "string",
                                example: "Internal Server Error",
                            },
                        },
                    },
                },
            },
        },
        404: {
            description: "Not found",
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
                            message: {
                                type: "string",
                                example: "No categories exists.",
                            },
                        },
                    },
                },
            },
        },
    },
};

const editCategory = {

    tags: ["Category"],
    description: "Editing name of category.",
    operationId: "editCategory",
    security: [
        {
            bearerAuth: [],
        },
    ],
    requestBody: {
        content: {
            "application/json": {
                schema: {
                    $ref: "#/components/schemas/editCategoryBody",
                },
            },
        },
        required: true,
    },
    responses: {
        200: {
            description: "Editing name of category Success",
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
                            success: {
                                type: "boolean",
                                example: true,
                            },
                            message: {
                                type: "string",
                                example: "Updated category:",
                            },
                            length: {
                                type: "number",
                                example: 1
                            },
                            data: {
                                type: "object",
                                properties: {
                                    id: {
                                        type: "number",
                                        example: 818,
                                    },
                                    category: {
                                        type: "string",
                                        example: "IT",
                                    },
                                    created_at: {
                                        type: "string",
                                        example: "2024-04-16T01:05:55.959Z",
                                    },
                                    is_active: {
                                        type: "boolean",
                                        example: true,
                                    },
                                    svg: {
                                        type: "string",
                                        example: "",
                                    },
                                    color: {
                                        type: "string",
                                        example: "#987hj"
                                    }
                                },
                            },
                        },
                    },
                },
            },
        },
        500: {
            description: "Database Error",
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
                            success: {
                                type: "boolean",
                                example: false,
                            },
                            message: {
                                type: "string",
                                example: "Internal Server error happened",
                            },
                        },
                    },
                },
            },
        },
        400: {
            description: "Validation Error",
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
                            success: {
                                type: "boolean",
                                example: false,
                            },
                            message: {
                                type: "string",
                                example: "id or Category name should not be empty.",
                            },
                        },
                    },
                },
            },
        },
        404: {
            description: "Not found",
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
                            success: {
                                type: "boolean",
                                example: false,
                            },
                            message: {
                                type: "string",
                                example: "Category not found to update.",
                            },
                        },
                    },
                },
            },
        },
    },

};

const editCategoryBody = {
    type: "object",
    properties: {
        category: {
            type: "string",
            example: "IT",
        },
    },
};

const deleteCategory = {

    tags: ["Category"],
    description: "Setting isActive false i.e deleting category.",
    operationId: "deleteCategory",
    security: [
        {
            bearerAuth: [],
        },
    ],
    requestBody: {
        content: {
            "application/json": {
                schema: {
                    $ref: "#/components/schemas/deleteCategoryBody",
                },
            },
        },
        required: true,
    },
    responses: {
        200: {
            description: "Successfully deleted category",
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
                            success: {
                                type: "boolean",
                                example: true,
                            },
                            message: {
                                type: "string",
                                example: "Successfully deleted category",
                            },
                            length: {
                                type: "number",
                                example: 1
                            },
                        },
                    },
                },
            },
        },
        500: {
            description: "Database Error",
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
                            success: {
                                type: "boolean",
                                example: false,
                            },
                            message: {
                                type: "string",
                                example: "Internal Server error happened",
                            },
                        },
                    },
                },
            },
        },
        400: {
            description: "Validation Error",
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
                            success: {
                                type: "boolean",
                                example: false,
                            },
                            message: {
                                type: "string",
                                example: "id should be not be empty.",
                            },
                        },
                    },
                },
            },
        },
        404: {
            description: "Not found",
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
                            success: {
                                type: "boolean",
                                example: false,
                            },
                            message: {
                                type: "string",
                                example: "Category not found to delete.",
                            },
                        },
                    },
                },
            },
        },
    },

};

const deleteCategoryBody = {
    type: "object",
    properties: {
        id: {
            type: "number",
            example: 20,
        },
    },
};

const getDocumentCategories = {
    tags: ["Category"],
    description: "Get All document Categories in the system",
    operationId: "getDocumentCategories",
    security: [
        {
            bearerAuth: [],
        },
    ],
    responses: {
        200: {
            description: "Get All Categories Succeess",
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
                            success: {
                                type: "boolean",
                                example: true,
                            },
                            message: {
                                type: "string",
                                example: "All Categories are :",
                            },
                            length: {
                                type: "number",
                                example: 8

                            },
                            data: {
                                type: "array",
                                items: {
                                    type: "object",
                                    properties: {
                                        // id: {
                                        //     type: "number",
                                        //     example: "4818",
                                        // },
                                        category: {
                                            type: "string",
                                            example: "IT",
                                        },
                                        svg: {
                                            type: "string",
                                            example: '',
                                        },
                                        color: {
                                            type: "sting",
                                            example: '#0C3D99',
                                        },
                                        total_documents: {
                                            type: 'string',
                                            example: '9'
                                        }

                                    },
                                },
                            },
                        },
                    },
                },
            },
        },
        500: {
            description: "Internal Server Error",
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
                            success: {
                                type: "boolean",
                                example: false,
                            },
                            message: {
                                type: "string",
                                example: "Internal Server Error",
                            },
                        },
                    },
                },
            },
        },
        404: {
            description: "Not found",
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
                            message: {
                                type: "string",
                                example: "No categories exists.",
                            },
                        },
                    },
                },
            },
        },
    },
};
export {
    createNewCategory,
    registerCategoryBody,
    getAllCategories,
    editCategory,
    editCategoryBody,
    deleteCategory,
    deleteCategoryBody,
    getDocumentCategories

};