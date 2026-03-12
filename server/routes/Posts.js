const express = require('express');
const router = express.Router();
const { Posts } = require("../models");

//GET
router.get("/", async (req, res) => {
    const listOfPosts = await Posts.findAll({
        order: [["createdAt", "DESC"]] // show newest first
    });
    res.json(listOfPosts);
});

router.get("/:id", async (req, res) => {
    const id = req.params.id;
    const post = await Posts.findByPk(id);
    res.json(post);
});

//POST
router.post("/", async (req, res) =>{
    const post = req.body;
    await Posts.create(post);
    res.json(post);
})

//UPDATE
router.put("/:id", async (req, res) => {
    const id = req.params.id;
    const post = req.body;

    await Posts.update(post, {
        where: { id: id }
    });
    res.json(post);
});

//DELETE
router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    await Posts.destroy({
        where: { id: id }
    });
    res.json({message: "Post deleted"});
});

module.exports = router;