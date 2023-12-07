// import express  from "express";
// const authRoutes = express.Router();

// //REGISTER
// router.post("/register", async (req, res) => {
//   console.log('signup Api working')
//   // console.log(req.body);

//   try {

//       // hashing password

//       const salt = await bcrypt.genSalt(10);
//       const hashedPassword = await bcrypt.hash(req.body.password, salt);

//       // creating user

//       const user = new User({
//           username: req.body.username,
//           email: req.body.email,
//           password: hashedPassword,
//       });

//       // saving user in DB

//       const newUser = await user.save();
//       res.status(200).send({
//           status: 'success',
//           message: 'User registered successfully',
//           userInDB: newUser
//       })

//   } catch (error) {
//     res.status(500).send(error)

//   }
// });

// //LOGIN

// router.post('/login', async (req, res) => {
//     try{
//       const user = await User.findOne({email: req.body.email});
//       if(!user){
//           res.status(404).send('User not found');
//           return
//       }

//       const validPassword = await bcrypt.compare(req.body.password, user.password);
//       if(!validPassword){
//           res.status(400).send('Incorrect password')
//           return
//       }

//         const accessToken = jwt.sign(
//         {id: user._id,isAdmin: user.isAdmin},process.env.JWT_SEC, {expiresIn:"3d"}
//         );
  
//         const { password, ...others } = user._doc;  
//         res.status(200).json({...others, accessToken});
//         console.log(accessToken)

//     }catch(err){
//         res.status(500).json(err);
//     }

// });

// export default authRoutes
import express from "express";
import { register, login } from "../controllers/authController.js";

const authRoutes = express.Router();

// REGISTER
authRoutes.post("/register", register);

// LOGIN
authRoutes.post('/login', login);

export default authRoutes;

