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
        let messages = await Message.findAll({
            attributes: ['id', 'name', 'email', 'message'],
            order: [['id', 'DESC']]
        });
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
            //console.log(message);
        });
        const json = JSON.stringify(obj);
        res.json(json);
    } catch (error) {
        console.error(error);
    }
})

router.put('/admin/contact/api', async (req, res) => {
    try {
        await Message.update({ name: req.body.name, email: req.body.email, message: req.body.message }, {
            where: {
                id: req.body.id
            }
        });
        res.json(JSON.stringify({editSuccess: true}));
    } catch (error) {
        console.error(error);
    }
})

router.post('/admin/contact/api', async (req, res) => {
    try {
        await Message.create({
            name: req.body.name,
            email: req.body.email,
            message: req.body.message,
        });
    } catch (error) {
        console.log(error);
    }
    res.json(JSON.stringify({
        addSuccess: true
    }));
});

router.get('/crud', (req, res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'));
});

module.exports = router;