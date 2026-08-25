import { Router } from 'express';
import multer from 'multer';
import { login } from '../controllers/admin.controller.js';
import { verifyAdmin } from '../middlewares/auth.middleware.js';
import { uploadSpreadsheet, getParticipants, updateStatus } from '../controllers/participant.controller.js';

const router = Router();

// Setup multer for memory storage
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/login', login);

// Protected admin routes
router.use(verifyAdmin);

router.post('/upload', upload.single('file'), uploadSpreadsheet);
router.get('/participants', getParticipants);
router.put('/participants/:id/status', updateStatus);

export default router;