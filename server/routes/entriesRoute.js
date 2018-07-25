import { Router } from 'express';
import entriesCtrl from '../controllers/entriesCtrl';
const router = new Router();

// Get all Entries
router.get('/entries', (req, res) => {
  entriesCtrl.getAllEntries(req, res);
});

export default router;