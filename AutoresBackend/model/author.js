const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name required'],
        minLength: [3, 'name must have more than three characters']
    }
});

module.exports = mongoose.model('Author', AuthorSchema);