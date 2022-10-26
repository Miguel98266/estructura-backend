import  express  from "express";
import * as userController from '../controllers/userController.js'

const router= express.Router();

router.route('/user').post(
    userController.create
)
router.route('/user').get(
    userController.read
)
router.route('/user:id').patch(
    userController.update
)
router.route('/user:id').delete(
    userController.remove
)


export default router;