let express = require('express');
let router = express.Router();
let { Form, Field } = require('../models/form');

// Get all forms
router.get('/', async (req, res) => {
  try {
    let forms = await Form.find();
    res.status(200).send({data: forms});
  } catch(err) {
    res.status(500).send({message: err.message});
  }
})

// Create form with fields
router.post('/', CreateForm, async(req, res) => {
 return res.status(200).send({message: 'Successfully added new form'});
});

// Create Field for a form
router.post('/fields/:formId', GetForm, async(req, res) => {
  let { form } = res;
  try {
    let field = await Field.create(req.body);
    form.fields.push(field);
    await form.save();
    return res.status(200).send({message: 'Successfully added new field'});
  } catch(err) {
    return res.status(500).send({message: err.message});
  }
});

// Edit 
router.put('/', async(req, res) => {
  try {
    await Form.deleteMany({});
    await Field.deleteMany({});

    let forms = req.body || [];

    for(const form of forms) {
      await CreateForm({body: form}, res);
    }

    // foreach won't work for asycn functions
    https://stackoverflow.com/questions/37576685/using-async-await-with-a-foreach-loop
    // forms.forEach(async (form) => {
    //   await CreateForm({body: form}, res);
    // });
    return res.status(200).send({message: 'Successfully updated form'});
  } catch(err) {
    return res.status(404).send({message: err.message});
  }
});


// // Delete Form
router.delete('/:formId',GetForm,  async(req, res) => {
  await Form.deleteOne({id: res.form.id})
  res.status(200).send({data: await Form.find()});
});

// //Delete all forms;

// router.delete('/', GetForm, async(req, res) => {
//   await Form.deleteMany({name: 'hsbcRegForm'})
//   res.status(200).send({data: 'Form deleted successfully'});
// });

// // Delete Field
router.delete('/field/:fieldId', async(req, res) => {
  await Form.deleteMany({});
  await Field.deleteMany({});
});

//middleWares

async function CreateForm(req, res, next) {
  let formData = req.body;
  try {
    let dbFields = await Promise.all(formData.fields.map(async (field) => {
      try {
        let dbField = await Field.create(field);
        await dbField.save();
        return dbField;
      } catch(err) {
        console.log(err.message);
      }
    }));

    formData.fields = dbFields;
    let dbForm = await Form.create(formData);
    await dbForm.save();
    next && next();
  } catch(err) {
    return res.status(500).send({message: err.message});
  }
} 

async function GetForm(req, res, next) {
  let form;
  try {
    form =await Form.findOne({id: req.params.formId});
    if (form === null) {
      return res.status(404).json({message: 'Cannot find form'});
    }
  } catch(err) {
    return res.status(500).json({message: err.message})
  }
  res.form = form;
  next();
}




module.exports = router;
