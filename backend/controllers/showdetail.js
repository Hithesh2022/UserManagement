import User from "../models/Usermodel.js";  
//getall user detail from mongodb and send to frontend
export const showdetails = async (req, res) => {
  try {
    const user = await User.find({});
    res.json(user);
  } catch (error) {
    console.log(error);
  }
};