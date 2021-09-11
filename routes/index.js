const express = require('express');
const path = require('path');
const router = express.Router();
const db = require('../db/index.js');

//extracting the Message class from the db object.
const { Message } = db.models;

router.get('/', (req, res) => {
    //console.log('sendingHTML');
    res.sendFile(path.join(__dirname, '../views/index.html'));
});

//decides which html file to send.
router.get('/contact', (req, res) => {
    if(req.query.success){
        res.sendFile(path.join(__dirname, '../views/contactsuccess.html'));
    } else {
        res.sendFile(path.join(__dirname, '../views/contact.html'));
    }
    
});

//allows recieving data from the contact form. Creates a database entry for the data.
router.post('/contact', async (req, res) => {
    console.log(req.body);
    try {
        await Message.create({
            name: req.body.name,
            email: req.body.email,
            message: req.body.message,
        });
    } catch (error) {
        console.log(error);
    }
    res.redirect("/contact?success=true");
});

router.get('/admin/contact/api', async (req, res) => {
    try {
        const messages = await Message.findAll();
        res.json(messages);
    } catch (error) {
        console.log(error);
    }
})

router.delete('/admin/contact/api', (req, res) => {
    try {
        let message = {};
        const obj = {
            deleteSuccess: true
        };
        req.body.map(async (id) => {
            message = await Message.destroy({
                where: {
                    id: id
                }
            });
            console.log(message);
        });
        const json = JSON.stringify(obj);
        res.json(json);
    } catch (error) {
        console.error(error);
    }
})

module.exports = router;