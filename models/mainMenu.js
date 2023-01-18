// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

const { Schema, model } = require('mongoose')

require('./category');

const mainMenuSchema = new Schema({
    name: { type: String, required: true },
    category: [{ type: Schema.Types.ObjectId, ref: 'Category' }],

  }, {
    timestamps: true
  });
  
module.exports = model('MainMenu', mainMenuSchema);