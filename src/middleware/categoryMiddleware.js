


export const checkCategoryName = async (req, res, next) => {
    const { category } = req.body;

    if (!category || category === "") {
        next(new ValidationError("category name is required"));
    }
    next();
}

