const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const multer = require('multer');
const Event = require('../models/Event');

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});
const upload = multer({ storage });

router.post('/', auth, upload.single('poster'), async (req, res) => {
  const { title, description, date, location } = req.body;
  const poster = req.file ? `/uploads/${req.file.filename}` : null;
  const event = new Event({ title, description, date, location, poster, createdBy: req.user.id });
  await event.save();
  res.json(event);
});

router.get('/', auth, async (req, res) => {
  const events = await Event.find().sort({ date: 1 });
  res.json(events);
});

router.put('/:id', auth, upload.single('poster'), async (req, res) => {
  const { title, description, date, location } = req.body;
  const update = { title, description, date, location };
  if (req.file) update.poster = `/uploads/${req.file.filename}`;
  const event = await Event.findByIdAndUpdate(req.params.id, update, { new: true });
  res.json(event);
});

router.delete('/:id', auth, async (req, res) => {
  await Event.findByIdAndDelete(req.params.id);
  res.json({ msg: 'Deleted' });
});

module.exports = router;
