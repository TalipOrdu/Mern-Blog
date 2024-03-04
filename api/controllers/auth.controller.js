import User from '../models/user.model.js'
import bcryptjs from "bcryptjs";


export const signup = async (req, res) => {
    const {
        username,
        email,
        password
    } = req.body;

    if (!username || !email || !password || username === '' || email === '' || password === '') {
        return res.status(400).json({
            message: 'All Fields is required'
        });

    }
    const hashPassword = bcryptjs.hashSync(password, 10);

    const newUser = new User({
        username,
        email,
        password : hashPassword
    });

    try {
        await newUser.save();
        res.json({message: 'Signed Up Successfully!'});
        
    } catch (err) {
        res.status(500).json({message: err.message})
    }
}