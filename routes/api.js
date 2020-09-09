const router = require('express').Router();
const apicontroller = require('../controllers/apicontroller');
// const {upload,uploadMultiple} = require('../middlewares/multer')

router.get('/landing-page',apicontroller.landingPage)


module.exports = router