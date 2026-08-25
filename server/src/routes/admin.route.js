import { Router } from 'express';
import multer from 'multer';
import { login } from '../controllers/admin.controller.js';
import { verifyAdmin } from '../middlewares/auth.middleware.js';
import { uploadSpreadsheet, getParticipants, updateStatus } from '../controllers/participant.controller.js';

const router = Router();

// Setup multer for memory storage with file filtering
const storage = multer.memoryStorage();
const fileFilter = (req, file, cb) => {
    // Accept only excel and csv mime types
    const allowedMimeTypes = [
        "application/vnd.ms-excel",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "text/csv"
    ];
    if (allowedMimeTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error("Invalid file type. Only Excel and CSV files are allowed."), false);
    }
};

const upload = multer({
    storage,
    fileFilter,
    limits: { fileSize: 10 * 1024 * 1024 } // 10MB limit
});

router.post('/login', login);
router.get('/participants', getParticipants); // Publicly viewable list of teams

// Protected admin routes
router.use(verifyAdmin);

router.post('/upload', (req, res, next) => {
    upload.single('file')(req, res, (err) => {
        if (err instanceof multer.MulterError) {
            return res.status(400).json({ message: "File upload error", error: err.message });
        } else if (err) {
            return res.status(400).json({ message: err.message });
        }
        next();
    });
}, uploadSpreadsheet);

router.put('/participants/:id/status', updateStatus);

export default router;