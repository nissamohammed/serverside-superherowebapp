
const users = require("../modal/userModel");
//login

exports.loginController = async(req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json('Email and password are required');
    }
    console.log(`Email: ${email}, Password: ${password}`);
  
    try {
      const existingUser = await users.findOne({ email, password });
      console.log(existingUser);
  
      if (existingUser) {
        res.status(200).json(existingUser);
      } else {
        res.status(406).json('Invalid email or password');
      }
    } catch (error) {
      res.status(500).json(`Login failed due to ${error}`);
    }
  };