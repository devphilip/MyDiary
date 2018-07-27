import { Router } from 'express';
import entriesCtrl from '../controllers/entriesCtrl';
const router = new Router();

// Get all Entries
router.get('/entries', (req, res) => {
  entriesCtrl.getAllEntries(req, res);
});

// Get one Entry by id
router.get('/entries/:id', (req, res) =>{
  entriesCtrl.getOneEntry(req,res);
});

// Add a new Entry
router.post('/entries', (req, res) => {
  entriesCtrl.createEntry(req, res);
});

// Update an Entry by id
router.put('/entries/:id', (req, res) => {
  entriesCtrl.update(req, res);
});

// Delete an Entry by id
router.delete('/entries/:id', (req, res) => {
  entriesCtrl.delete(req, res);
});

export default router;