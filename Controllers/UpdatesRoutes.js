const {setUpdatesSchema}= require('../Models/projectSchema.js');




const findAllUpdates = async (req, res) => {
    try {
        res.set('Access-Control-Allow-Origin', '*');
        res.json(await setUpdatesSchema.find({}));
    } catch (error) {
        res.status(400).json(error);
    }
};



const getUpdatesByID = async (req, res) =>{
    try {
        res.set('Access-Control-Allow-Origin', '*');
        res.json(await setUpdatesSchema.findById(req.params.id, req.body))
    } catch (error) {
        res.status(400).json(error);
    }
};


const postUpdatesRoute = async (req, res) =>{
    try {
        res.set('Access-Control-Allow-Origin', '*');
        res.json(await setUpdatesSchema.create(req.body))
    } catch (error) {
        res.status(400).json(error);
    }
};


 const putUpdatesRoute = async (req, res) =>{
    try {
        res.set('Access-Control-Allow-Origin', '*');
        res.json(await setUpdatesSchema.findByIdAndUpdate(req.params.id, req.body))
    } catch (error) {
        res.status(400).json(error);
    }
};

const deleteUpdatesRoute = async (req, res) =>{
    try {
        res.set('Access-Control-Allow-Origin', '*');
        res.json(await setUpdatesSchema.findByIdAndRemove(req.params.id))
    } catch (error) {
        res.status(400).json(error);
    }
};



module.exports = {
    findAllUpdates,
    getUpdatesByID,
    postUpdatesRoute,
    putUpdatesRoute,
    deleteUpdatesRoute,

};