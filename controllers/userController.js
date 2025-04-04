import { apiResponse, generateOTP } from "../common/index.js";
import User from "../models/user.js";

export const createUser = async (req, res) => {
    try {
        const { mobile } = req.body;
        const otp = generateOTP();

        // Find user or create if not exists, then update OTP
        const [user] = await User.findOrCreate({ where: { mobile } });
        await user.update({ otp });

        res.status(200).json(await apiResponse(200, "OTP sent successfully", {}, {}));
    } catch (error) {
        res.status(500).json(await apiResponse(500, "Internal server error", {}, error));
    }
};

export const verifyUser = async (req, res) => {
    try {
      const { mobile, otp } = req.body;
  
      const user = await User.findOne({ where: { mobile } });
  
      if (!user) {
        return res.status(404).json(await apiResponse(404, "User not found", {}, {}));
      }
  
      if (user.otp !== otp) {
        return res.status(400).json(await apiResponse(400, "Invalid OTP", {}, {}));
      }
  
      await user.update({ otp: null,isMobileVerified : true });
      const { otp: _, ...userData } = user.toJSON();

  
      return res.status(200).json(await apiResponse(200, "OTP verified successfully", userData, {}));
  
    } catch (error) {
      return res.status(500).json(await apiResponse(500, "Internal server error", {}, error));
    }
  };

  export const userProfile =async (req,res) => {
    try {
        const { id, name, email, dob, gender, mobile,profileImage="" } = req.body;

        const user = await User.findByPk(id);
        if (!user) {
          return res.status(404).json(await apiResponse(404, "User not found", {}, {}));
        }
        await user.update({ 
            name: name || user.name, 
            email: email || user.email, 
            dob: dob || user.dob, 
            gender: gender || user.gender ,
            mobile : mobile || user.mobile
          });
          
          const { otp: _, ...userData } = user.toJSON();


        return res.status(200).json(await apiResponse(200, "Profile update successfully", userData, {}));

    } catch (error) {
      console.log('error', error)
        return res.status(500).json(await apiResponse(500, "Internal server error", {}, error));

    }
  }