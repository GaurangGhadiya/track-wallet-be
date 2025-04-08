export const apiResponse = async (status, message="", data={}, error={}) => {
    return {
        status,
        message,
        data: await data,
        error: Object.keys(error)?.length == 0 ? {} : error
    }
}

export const generateOTP = () => {
    return Math.floor(100000 + Math.random() * 900000); // Generates 6-digit OTP
};

export const validate = (schema) => async (req, res, next) => {
    try {
      req.body = await schema.validateAsync(req.body);
      next();
    } catch (error) {
      res.status(400).json(await apiResponse(400, error.message, {}, {}));
    }
  };