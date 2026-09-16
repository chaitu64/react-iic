import { Router } from 'express';
import { login } from '../controllers/admin.controller.js';
import { verifyAdmin } from '../middlewares/auth.middleware.js';
import { getParticipants, updateStatus, updateField } from '../controllers/participant.controller.js';

const router = Router();

router.post('/login', login);
router.get('/participants', getParticipants); // Publicly viewable list of teams

// Protected admin routes
router.use(verifyAdmin);

router.put('/participants/:id/status', updateStatus);
router.put('/participants/:id/field', updateField);

export default router;
