const MainMenu = require('../../models/mainMenu');

module.exports = {
  index,
  show
};

async function index(req, res) {
  try{
    const mainMenus = await MainMenu.find({}).populate('category').exec();
    res.status(200).json(mainMenus);
  }catch(e){
    res.status(400).json({ msg: e.message });
  }
}

async function show(req, res) {
  try{
    const mainMenu = await MainMenu.findById(req.params.id);
    res.status(200).json(mainMenu);
  }catch(e){
    res.status(400).json({ msg: e.message });
  }  
}