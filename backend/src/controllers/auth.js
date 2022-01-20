var validator = require('email-validator');
import bcrypt from 'bcrypt';
import User from '../models/user'
import passport from 'passport';

export const isAuthenticated = (req, res) => {
  if (!req.isAuthenticated())
    return res
      .status(401)
      .json({ success: false, message: 'user not authenticated' });
};

export const isNotAuthenticated = (req, res) => {
  if (!req.isAuthenticated())
    return res
      .status(400)
      .json({ success: false, message: 'User already authenticated' });
};

export const register = async (req, res) => {
  const {
    name,
    email,
    college,
    degree,
    phoneNumber,
    password,
    reEnterPassword,
  } = req.body;

  const response = {
      success: false,
      message : "",
      user : null
  }
  // validation starts
  if (!(name || email || college || degree || phoneNumber || password || reEnterPassword)){
      response.message = "missing registration details"
      return res.status(400).json(response)
  }

  const isValidEmail = validator.validate(email); 

  if (!isValidEmail){
    response.message = "invalid email address"
    return res.status(400).json(response);
  }

  if (password !== reEnterPassword){
      response.message = "password did'nt match"
      return res.status(400).json(response);
  }
  // todo verify phone number, password length

  let user = await User.findOne({
      email: email
  })

  if (user != null){
      response.message = "email already registered"
      return res.status(400).json(response)
  }
  // validation ends
  try {
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        let user = new User({
            name,
            email,
            password: hashPassword,
            phoneNumber,
            college,
            degree
        });

        user = await user.save()

        response.message = "registration successful";
        response.success =  true;
        return res.status(200).json(response);
  } catch (error) {
      console.log(error);
      response.message = "internal server error"
      return res.status(500).json(response)
  }
};

export const login = async (req, res) => {
    const {email, password} = req.body;
    const response = {
        success : false,
        message: ""
    }

    if (!(email || password)) {
        response.message = "missing login credentials"
        return res.status(400).json(response)
    }

      return passport.authenticate('local', (err, user) => {
        if (err){
          console.log(err)
          response.message = "internal server error"
          return res.status(500).json(response);
        }

        if (!user){
          response.message = "invalid credentials"
          return res.status(401).json(response);
        }

        req.logIn(user, function (err) {
          if (err) {
            console.log(err);
            response.message = 'internal server error';
            return res.status(500).json(response);
          }
          response.message = 'login successful';
          response.success = true;

          return res.status(200).json(response);
        });
      })(req, res);
}

export const getUser = (req, res) => {


  let response = {
    success: true,
    message : "user is unauthenticated",
    user : null
  }

    let user = req.user;
    console.log(user, req.isAuthenticated());
    if (!req.isAuthenticated()) {
      return res.status(401).json(response);
    }

    response.user = user;
    response.message = "user is authenticated"

  return res.status(200).json(response);
}
