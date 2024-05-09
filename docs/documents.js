const createDocumentVersion = {
    tags: ["Documents"],
    description: "Create a new version of Document in the system",
    operationId: "createDocumentVersion",
    security: [
        {
            bearerAuth: [],
        },
    ],
    requestBody: {
        content: {
            "application/json": {
                schema: {
                    $ref: "#/components/schemas/createDocumentVersionBody",
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
                                example: "Document version created:",
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
                                        example: "980765",
                                    },
                                    version_number: {
                                        type: "number",
                                        example: "1.3",
                                    },
                                    doc_id: {
                                        type: "number",
                                        example: '4'
                                    },
                                    delta: {
                                        type: "json",
                                        example: `{'hioini': 'ninianolanc'}`
                                    },
                                    created_at: {
                                        type: "string",
                                        example: "2024-04-16T01:05:55.959Z",
                                    },
                                    created_by: {
                                        type: "number",
                                        example: "3",
                                    },
                                },
                            },
                        },
                    },
                },
            },
        },
        400: {
            description: "Version creation error",
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
                                example: "version_number or doc_id or delta are missing",
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
                                example: "Error in Creating Document Versions",
                            },
                        },
                    },
                },
            },
        },
    },
};

const createDocumentVersionBody = {
    type: "object",
    properties: {
        version_number: {
            type: "string",
            example: '2.2'
        },
        doc_id: {
            type: "string",
            example: "2"
        },
        delta: {
            type: "json",
            example: `{"hioini":"ninianolanc"}`
        },
        created_by: {
            type: "string",
            example: '5'
        }

    },
};

const getDocumentVersionsDatewise = {
    tags: ["Documents"],
    description: "Get document versions Datewise to show in editor",
    operationId: "getDocumentVersionsDatewise",
    security: [
        {
            bearerAuth: [],
        },
    ],
    parameters: [
        {
            name: "docId",
            in: "query",
            required: true,
            schema: {
                type: "string",
            },
            description: "Document id to get all version  details of it",
        },
    ],
    responses: {
        200: {
            description: "reset Password Success",
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
                                example: "reset password success",
                            },
                            length: {
                                type: "number",
                                example: 3
                            },

                            data: {
                                type: "array",
                                items: {
                                    type: "object",
                                    properties: {
                                        date: {
                                            type: "string",
                                            example: "2024-04-30T18:30:00.000Z",
                                        },
                                        grouped_values: {
                                            type: "string",
                                            example: "[28,1.1,4,2024-05-01 04:54:00.505154,Dev], [26,1.1,4,2024-05-01 04:46:29.035146,Dev]",
                                        },
                                    },

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
                            message: {
                                type: "string",
                                example: "Error in getting Document Versions details.",
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
                            message: {
                                type: "string",
                                example: "doc id required",
                            },
                        },
                    },
                },
            },
        },
    },


};

const getDocumentVersionById = {
    tags: ["Documents"],
    description: "Get document version",
    operationId: "getDocumentVersionById",
    security: [
        {
            bearerAuth: [],
        },
    ],
    parameters: [
        {
            name: "id",
            in: "query",
            required: true,
            schema: {
                type: "string",
            },
            description: "id to get specific version of document",
        },
    ],
    responses: {
        200: {
            description: "reset Password Success",
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
                                example: "reset password success",
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
                                        example: 1
                                    },
                                    version_number: {
                                        type: "number",
                                        example: '2.2'
                                    },
                                    doc_id: {
                                        type: "string",
                                        example: "2"
                                    },
                                    delta: {
                                        type: "json",
                                        example: `
                                        {"hioini":"ninianolanc"}
                                        `
                                    },
                                    created_by: {
                                        type: "string",
                                        example: '5'
                                    },
                                    created_at: {
                                        type: "string",
                                        example: "2024-04-30T23:18:30.263Z"
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
        description: "Database Error",
        content: {
            "application/json": {
                schema: {
                    type: "object",
                    properties: {
                        message: {
                            type: "string",
                            example: "Error in getting Document Version.",
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
                        message: {
                            type: "string",
                            example: "id required",
                        },
                    },
                },
            },
        },
    },
};




export {
    createDocumentVersion,
    createDocumentVersionBody,
    getDocumentVersionsDatewise,
    getDocumentVersionById
};