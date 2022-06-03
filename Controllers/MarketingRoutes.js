const {setMarketingSchema}= require('../models/projectSchema.js');


const findAllMarketing = async (req, res) => {
    try {
        res.set('Access-Control-Allow-Origin', '*');
        res.json(await setMarketingSchema.find({}));
    } catch (error) {
        res.status(400).json(error);
    }
};



const getMarketingByID = async (req, res) =>{
    try {
        res.set('Access-Control-Allow-Origin', '*');
        res.json(await setMarketingSchema.findById(req.params.id, req.body))
    } catch (error) {
        res.status(400).json(error);
    }
};


const postMarketingRoute = async (req, res) =>{
    try {
        res.set('Access-Control-Allow-Origin', '*');
        res.json(await setMarketingSchema.create(req.body))
    } catch (error) {
        res.status(400).json(error);
    }
};


 const putMarketingRoute = async (req, res) =>{
    try {
        res.set('Access-Control-Allow-Origin', '*');
        res.json(await setMarketingSchema.findByIdAndUpdate(req.params.id, req.body))
    } catch (error) {
        res.status(400).json(error);
    }
};

const deleteMarketingRoute = async (req, res) =>{
    try {
        res.set('Access-Control-Allow-Origin', '*');
        res.json(await setMarketingSchema.findByIdAndRemove(req.params.id))
    } catch (error) {
        res.status(400).json(error);
    }
};



module.exports = {
    findAllMarketing,
    getMarketingByID,
    postMarketingRoute,
    putMarketingRoute,
    deleteMarketingRoute,

};