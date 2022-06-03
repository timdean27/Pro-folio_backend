const {setProjectsSchema}= require('../models/projectSchema.js');


const findAllProjects = async (req, res) => {
    try {
        res.set('Access-Control-Allow-Origin', '*');
        res.json(await setProjectsSchema.find({}));
    } catch (error) {
        res.status(400).json(error);
    }
};



const getProjectsByID = async (req, res) =>{
    try {
        res.set('Access-Control-Allow-Origin', '*');
        res.json(await setProjectsSchema.findById(req.params.id, req.body))
    } catch (error) {
        res.status(400).json(error);
    }
};


const postProjectsRoute = async (req, res) =>{
    try {
        res.set('Access-Control-Allow-Origin', '*');
        res.json(await setProjectsSchema.create(req.body))
    } catch (error) {
        res.status(400).json(error);
    }
}


 const putProjectsRoute = async (req, res) =>{
    try {
        res.set('Access-Control-Allow-Origin', '*');
        res.json(await setProjectsSchema.findByIdAndUpdate(req.params.id, req.body))
    } catch (error) {
        res.status(400).json(error);
    }
};

const deleteProjectsRoute = async (req, res) =>{
    try {
        res.set('Access-Control-Allow-Origin', '*');
        res.json(await setProjectsSchema.findByIdAndRemove(req.params.id))
    } catch (error) {
        res.status(400).json(error);
    }
};



module.exports = {
    findAllProjects,
    getProjectsByID,
    postProjectsRoute,
    putProjectsRoute,
    deleteProjectsRoute,

};