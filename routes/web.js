import express from 'express'
import { StudentController } from '../controllers/studentController.js'
const router = express.Router()

router.get('/',StudentController.getAllDoc)
router.post('/',StudentController.createDoc)
router.get('/edit/:id',StudentController.editDoc)
router.get('/delete/:id',StudentController.deleteDocById)
router.post('/update/:id',StudentController.updateDocById)
export default router