const router = require('express').Router();
const path = require('path');

// const app = express();

//Routes
router.get(`/notes`, (req, res) => {
    console.log(`Note page requested`);
    res.sendFile(path.join(__dirname, `../public/notes.html`));
  });
  
router.get(`/`, (req, res) => {
    console.log(`Home page requested`);
    res.sendFile(path.join(__dirname, `../public/index.html`));
  });

module.exports = router;