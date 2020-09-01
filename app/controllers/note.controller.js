const Note = require('../models/note.model.js');

exports.create = (req, res) => {
    if (!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }

    const note = new Note({
        title: req.body.title || "Untitled Note",
        content: req.body.content
    });

    note.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Note."
            });
        });
};

exports.findAll = (req, res) => {
    Note.find().then(notes => {
        res.send(notes);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Error occured while retreiving note"
        })
    })
}