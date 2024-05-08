import * as versioncontrol from "../../services/versioncontrol.services.js";



export const createTemplateVersion = async (req, res, next) => {
    try {
        // middleware apply user
        // const { version_number, doc_id, delta } 
        const body = req.body;
        const result = await versioncontrol.templateVersionUploadService(body);

        return res.status(200).json({
            success: true,
            message: "Document version created:",
            length: result.length,
            data: result.rows
        });
    } catch (error) {
        next(error);
    };
};

export const getTemplateVersionsDatewise = async (req, res, next) => {
    try {
        console.log(req.query);
        const docId = parseInt(req.query.docId);
        console.log(docId);

        const result = await versioncontrol.getTemplateVersionsDatewiseService({ docId });
        return res.status(200).json({
            status: "success",
            message: "Document version:",
            length: result.length,
            data: result.rows
        });

    } catch (error) {
        next(error);
    }
};

export const getTemplateVersionsById = async (req, res, next) => {
    try {
        const docId = parseInt(req.query.id);
        console.log(docId);

        const result = await versioncontrol.getTemplateVersionsByIdService({ docId });
        return res.status(200).json({
            status: "success",
            message: "Document version:",
            length: result.length,
            data: result.rows
        });

    } catch (error) {
        next(error);
    }
};
