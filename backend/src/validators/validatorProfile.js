const Joi = require("joi");

const profileSchema = Joi.object({
  firstname: Joi.string().min(3).max(100).required(),
  lastname: Joi.string().min(3).max(100).required(),
  email: Joi.string().email().max(200).required(),
  city: Joi.string().min(3).max(100),
  phone: Joi.string().min(3).max(20),
});

const validatorProfile = (req, res, next) => {
  const { firstname, lastname, email, city, phone } = req.body;

  const { error } = profileSchema.validate(
    {
      firstname,
      lastname,
      email,
      city,
      phone,
    },
    { abortEarly: false }
  );

  if (error) {
    res.status(422).json({ validationErrors: error.details });
    console.warn(error.details);
  } else {
    next();
  }
};

module.exports = {
  validatorProfile,
};
