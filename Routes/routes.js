const express = require('express');
const {setUserSchema,setMarketingSchema,setContactSchema ,setProjectsSchema,setUpdatesSchema}= require('../models/projectSchema.js');
const {testGet , findAllUsers, getUserByID ,postUserRoute , putUserRoute ,deleteUserRoute} = require('../Controllers/userRoutes.js')
const {findAllMarketing, getMarketingByID ,postMarketingRoute , putMarketingRoute ,deleteMarketingRoute} = require('../Controllers/MarketingRoutes.js')
const {findAllContact, getContactByID ,postContactRoute , putContactRoute ,deleteContactRoute} = require('../Controllers/ContactRoutes.js')
const {findAllProjects, getProjectsByID ,postProjectsRoute , putProjectsRoute ,deleteProjectsRoute} = require('../Controllers/ProjectsRoutes.js')
const {findAllUpdates, getUpdatesByID ,postUpdatesRoute , putUpdatesRoute ,deleteUpdatesRoute} = require('../Controllers/UpdatesRoutes.js')
const router = express.Router();



router.get('/', testGet)

// this is on localhost:4000/home/user
router.get('/user', findAllUsers);
router.get('/user/:id', getUserByID);
router.post('/user', postUserRoute);
router.put('/user/:id', putUserRoute);
router.delete('/user/:id', deleteUserRoute);


// this is on localhost:4000/home/marketing
router.get('/marketing', findAllMarketing);
router.get('/marketing/:id', getMarketingByID);
router.post('/marketing', postMarketingRoute);
router.put('/marketing/:id', putMarketingRoute);
router.delete('/marketing/:id', deleteMarketingRoute);


// this is on localhost:4000/home/contact
router.get('/contact', findAllContact);
router.get('/contact/:id', getContactByID);
router.post('/contact', postContactRoute);
router.put('/contact/:id', putContactRoute);
router.delete('/contact/:id', deleteContactRoute);

// this is on localhost:4000/home/projects
router.get('/projects', findAllProjects);
router.get('/projects/:id', getProjectsByID);
router.post('/projects', postProjectsRoute);
router.put('/projects/:id', putProjectsRoute);
router.delete('/projects/:id', deleteProjectsRoute);

// this is on localhost:4000/home/updates
router.get('/updates', findAllUpdates);
router.get('/updates/:id', getUpdatesByID);
router.post('/updates', postUpdatesRoute);
router.put('/updates/:id', putUpdatesRoute);
router.delete('/updates/:id', deleteUpdatesRoute);

module.exports = router