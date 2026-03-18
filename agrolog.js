const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/mydata', { usenewurlparser: true, useunifiedtopology: true});

const mymodel = mongoose.model('mymodel', new mongoose.scheme({ name: string}));
const mydoc = new mymodel({ name: 'mich' });
mydoc.save();
mymodel.find().then(docs => console.log(docs));
mymodel.updateone({ name: 'mich' }, { name: 'mich'}).then(() => console.log('updated'))
mymodel.deleteone({ nmae: 'mich'}).then(() => console.log('deleted'))