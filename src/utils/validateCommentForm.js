export const validateCommentForm = (values) => {
    const errors = {};

    if (!values.rating) {
        errors.rating = 'Requied';
    }
    if (!values.author) {
        errors.author = 'Required';
    } else if (values.author.length < 2) {
        errors.author = 'Must be at least 2 characters';
    } else if (values.author.length > 15) {
        errors.author = 'Must be under 15 characters';
    }
    return errors;
};


