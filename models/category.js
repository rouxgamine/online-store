const mongoose = require('mongoose');
const Schema = mongoose.Schema;

require('./mainMenu.js');

const categorySchema = new Schema({
  name: { type: String, required: true },
  MainMenu: { type: Schema.Types.ObjectId, ref: 'Category' },

  sortOrder: Number
}, {
  timestamps: true
});

module.exports = mongoose.model('Category', categorySchema);