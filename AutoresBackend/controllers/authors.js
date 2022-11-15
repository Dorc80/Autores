const Author = require('../model/author');

const authorsPost = (req, resp) => {

    const { name } = req.body;

    const author = new Author();
    author.name = name;

    author.save()
        .then(_author => resp.status(201).json({ message: "Success", _author }))
        .catch(error => resp.status(500).json({ message: "Fail", error }));

}

const authorsGet = (req, resp) => {

    Author.find()
        .then(authors => resp.status(200).json({ message: "Success", authors }))
        .catch(error => resp.status(500).json({ message: "Fail", error }));

}

const authorGet = (req, resp) => {

    const { id } = req.params;

    Author.findById(id)
        .then(author => {
            if (author) {
                resp.status(200).json({ message: "Success", author });
            } else {
                resp.status(404).json({ message: "Not found" });
            }
        })
        .catch(error => resp.status(500).json({ message: "Fail", error }));

}

const authorsPut = (req, resp) => {

    const { id } = req.params;
    const { name } = req.body;

    Author.findByIdAndUpdate(id, { name: name }, { new: true, runValidators: true })
        .then(author => resp.status(200).json({ message: "Success", author }))
        .catch(error => resp.status(500).json({ message: "Fail", error }));

}

const authorsDelete = (req, resp) => {

    const { id } = req.params;

    Author.findByIdAndDelete(id)
        .then((author) => {   
            if(author) {
                resp.status(200).json({ message: "Success", author });
            } else {
                resp.status(404).json({ message: "Not found" });
            }
        })
        .catch(error => resp.status(500).json({ message: "Fail", error }));

}

const notFound = (req, resp) => {
    console.log('url', req.url);
    resp.status(404).json('not found');
}

module.exports = {
    authorsPost,
    authorsGet,
    authorGet,
    authorsPut,
    authorsDelete,
    notFound
}