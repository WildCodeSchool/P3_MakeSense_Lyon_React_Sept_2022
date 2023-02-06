const Joi = require("joi");

const commentSchema = Joi.object({
  content: Joi.string().required(),
  vote: Joi.string().required(),
});

const validateComment = (req, res, next) => {
  const { content, vote } = req.body;

  const { error } = commentSchema.validate(
    { content, vote },
    { abortEarly: false }
  );

  if (error) {
    res.status(422).json({ validationErrors: error.details });
  } else {
    next();
  }
};

export default validateComment;
