const express = require('express');
const router = express.Router();
const interestsCtrl = require('../controllers/interests')

router.get('/new', interestsCtrl.newInterest)
router.get('/', interestsCtrl.index)
router.post('/showmekrissuggestion', interestsCtrl.showSuggestion)
router.post('/savedSuggestions', interestsCtrl.saveSuggestion)
router.post('/showmekrissuggestion', interestsCtrl.scrapSuggestion)
// router.delete('/savedSuggestions/:id', interestsCtrl.deleteSuggestion)

module.exports = router;