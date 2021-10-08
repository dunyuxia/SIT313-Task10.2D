const mongoose = require('mongoose');
// mongoose.connect('mongodb+srv://SIT313:SIT313@cluster0.lncoo.mongodb.net/iServiceDB?retryWrites=true&w=majority');
mongoose.connect('mongodb://127.0.0.1:27017/iServiceDB');
module.exports = mongoose;