import jwt from "jsonwebtoken";

const isUserAuthenticated = (req, res, next) => {
  try {
    const { token } = req.cookies;


    if (!token) {
      return res.json({
        success: false,
        message: "User not authenticated.",
      });
    }

    const verifyToken = jwt.verify(token, process.env.JWT_SECRET);

    req.user = verifyToken.userId;
    //Adding a new property called user in req for next api
    //The value is the user's ID from the token

    next();
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
    });
  }
};

export default isUserAuthenticated;

