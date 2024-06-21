const Note = require("../models/notes");

const createNote = (req, res) => {
    console.log(req.body);
    const { title, content, status, } = req.body;

    Note.create({
        title: title,
        content: content,
        status: status,
    })
        .then((result) => {
            return res.json({
                message: "Record created successfully!",
            });
        })
        .catch((error) => {
            console.log(error);
            return res.json({
                message: "Unable to create a record!",
            });
        });
}




const getNote = (req, res) => {
    const id = req.query.id;
    Note.findByPK(id)
        .then((result) => {
            return res.json(result);
        })
        .catch((error) => {
            console.log(error);
            return res.json({
                message: 'Unable to fetch the record!'
            });
        });
};



const getAllNotes = (req, res) => {
    Note.findAll({
        attributes: ["id", "title", "content", "status", "created_at"],
    })
        .then((result) => {
            return res.json(result);
        })
        .catch((error) => {
            console.log(error);
            return res.json({
                message: "Unable to fetch records!",
            });
        });
};
const editNote = (req, res) => {
    Note.update(
        {
            title: req.body.title,
            content: req.body.content,
            status: req.body.status,
        },
        {
            where: {
                id: req.body.id,
            },
        }
    )
        .then((result) => {
            if (result[0] === 1) {
                return res.json({ message: "Record updated successfully" });
            } else {
                return res.json({ message: "Record not found or no changes made" });
            }
        })
        .catch((error) => {
            console.log(error);
            return res.status(500).json({
                message: "Unable to update the record!",
            });
        });
};


const deleteNote = (req, res) => {

    Note.destroy({
        where: {
            id: req.body.id,
        },
    })
        .then((result) => {
            return res.json(result);
        })
        .catch((error) => {
            console.log(error);
            return res.json({
                message: "Unable to delete the record!",
            });
        });
};


module.exports = { createNote, getAllNotes, getNote, editNote, deleteNote };
