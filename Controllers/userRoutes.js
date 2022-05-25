const {setUserSchema}= require('../Models/projectSchema.js');

const testGet = (req, res) =>{
    res.send("Back end port 4000")
};


const findAllUsers = async (req, res) => {
    try {
        res.set('Access-Control-Allow-Origin', '*');
        res.json(await setUserSchema.find({}));
    } catch (error) {
        res.status(400).json(error);
    }
};



const getUserByID = async (req, res) =>{
    try {
        res.set('Access-Control-Allow-Origin', '*');
        res.json(await setUserSchema.findById(req.params.id, req.body))
    } catch (error) {
        res.status(400).json(error);
    }
};


const postUserRoute = async (req, res) =>{
    try {
        console.log(req.body)
        res.set('Access-Control-Allow-Origin', '*');
        res.json(await setUserSchema.create(req.body))
    } catch (error) {
        res.status(400).json(error);
    }
};


 const putUserRoute = async (req, res) =>{
    try {
        res.set('Access-Control-Allow-Origin', '*');
        res.json(await setUserSchema.findByIdAndUpdate(req.params.id, req.body))
    } catch (error) {
        res.status(400).json(error);
    }
};

const deleteUserRoute = async (req, res) =>{
    try {
        res.set('Access-Control-Allow-Origin', '*');
        res.json(await setUserSchema.findByIdAndRemove(req.params.id))
    } catch (error) {
        res.status(400).json(error);
    }
};



module.exports = {
    testGet,
    findAllUsers,
    getUserByID,
    postUserRoute,
    putUserRoute,
    deleteUserRoute,

};
