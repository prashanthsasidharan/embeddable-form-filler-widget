let mongoose = require('mongoose');

let fieldSchema = mongoose.Schema({
  selector: {
    type: String,
    required: true
  },
  value: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
});

let formSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  selector: {
    type: String,
    required: true,
  }, 
  fields: {
    type: [fieldSchema],
    required: true
  }
});

exports.Form = mongoose.model('Form', formSchema);
exports.Field =  mongoose.model('Field', fieldSchema);
