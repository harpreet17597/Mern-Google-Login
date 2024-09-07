const  UserModel = require("../models/userModel")
const { oauthClient } =  require("../utils/googleConfig");
const axios = require('axios');
const jwt = require('jsonwebtoken');

const googleLogin = async(req,res) => {

    try {

        const {code} = req.query;


        const googleRes = await oauthClient.getToken(code);
        oauthClient.setCredentials(googleRes.tokens)
        const userRes = await axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${googleRes.tokens.access_token}`);

        const {email,name,picture} = userRes.data;

        let user = await UserModel.findOne({email});
        console.log(user)
        if(!user) {
           user = await UserModel.create({
            name,
            email,
            image:picture
           })
        }

        const {_id} = user;
        const token = jwt.sign({_id,email},process.env.JWT_SECRET,{expiresIn: process.env.JWT_TIMEOUT})

        return res.json({
            message:'Success',
            token,
            user
        })

    }
    catch(err) {

      return res.status(500).send({
        message:'Failure'
      })

    }
}

module.exports = {
    googleLogin
}