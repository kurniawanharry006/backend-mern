const router = require('express').Router();
const apicontroller = require('../controllers/apicontroller');
const {upload} = require('../middlewares/multer')

router.get('/landing-page',apicontroller.landingPage)
router.get('/detail-page/:id',apicontroller.detailPage)
router.post('/booking-page',upload, apicontroller.bookingPage)


module.exports = router