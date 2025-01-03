import { Router, Request, Response } from 'express';
import { uploadToS3 } from '../middlewares/uploadToS3.middleware';
import { normalizePatientData } from '../middlewares/normalizePatientData.middleware';
import { postPatient } from '../controllers/patientPost.controller';
import { getPatientIdByEmail } from '../controllers/patientGet.controller';
import { getPatientById } from '../controllers/getPatientById.controller';

const router = Router();

router.post('/', uploadToS3, normalizePatientData, postPatient);
router.get('/id', getPatientIdByEmail);
router.get('/:id', getPatientById);

export default router;
