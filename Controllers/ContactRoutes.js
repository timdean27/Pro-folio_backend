const {setContactSchema}= require('../Models/projectSchema.js');


const findAllContact = async (req, res) => {
    try {
        res.set('Access-Control-Allow-Origin', '*');
        res.json(await setContactSchema.find({}));
    } catch (error) {
        res.status(400).json(error);
    }
};



const getContactByID = async (req, res) =>{
    try {
        res.set('Access-Control-Allow-Origin', '*');
        res.json(await setContactSchema.findById(req.params.id, req.body))
    } catch (error) {
        res.status(400).json(error);
    }
};


const postContactRoute = async (req, res) =>{
    try {
        res.set('Access-Control-Allow-Origin', '*');
        res.json(await setContactSchema.create(req.body))
    } catch (error) {
        res.status(400).json(error);
    }
};


 const putContactRoute = async (req, res) =>{
    try {
        res.set('Access-Control-Allow-Origin', '*');
        res.json(await setContactSchema.findByIdAndUpdate(req.params.id, req.body))
    } catch (error) {
        res.status(400).json(error);
    }
};

const deleteContactRoute = async (req, res) =>{
    try {
        res.set('Access-Control-Allow-Origin', '*');
        res.json(await setContactSchema.findByIdAndRemove(req.params.id))
    } catch (error) {
        res.status(400).json(error);
    }
};



module.exports = {
    findAllContact,
    getContactByID,
    postContactRoute,
    putContactRoute,
    deleteContactRoute,

};