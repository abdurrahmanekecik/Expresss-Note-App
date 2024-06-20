const NoteModel = require("../models/notes");

const createNote = (req, res) => {

    const { title, content, status, } = req.body;
    NoteModel.create({
        title: title,
        content: content,
        status: status,
        created_at: new Date(),

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
    NoteModel.findByPK(id)
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
    NoteModel.findAll({
        attributes: ["id","title", "content", "status", "created_at"],
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
    NoteModel.update(
        {
            title: req.body.title,
        },
        {
            content: req.body.content,
        },

        {
            status: req.body.status,
        },


        {
            where: {
                id: req.body.id,
            },
        }
    )
        .then((result) => {
            return res.json(result);
        })
        .catch((error) => {
            console.log(error);
            return res.json({
                message: "Unable to update the record!",
            });
        });
};


const deleteNote = (req, res) => {
    NoteModel.destroy({
        where: {
            id: req.query.id,
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
