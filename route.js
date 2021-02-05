const mongoose = require("mongoose")
const ObjectId = mongoose.Types.ObjectId
const { updateOne } = require("./Model/book")
const router = require("express").Router()
const Book = require("./Model/book")

router.get("/books",async (req,res)=>{
    var book = await Book.find()
    //res.send("Hello from Books API")
    res.status(200).json({
        msg:book
    })
})

// router.post('/books', async (req,res)=>{

//     const book = new Book({
//         b_title : req.body.b_title,
//         b_author : req.body.b_author,
//         b_qty : req.body.b_qty,
//         b_adition : req.body.b_adition,
//         b_cost : req.body.b_cost
//     })
    
//     await book.save();
//     res.status(200).json({
//         msg: book
//     })

// })

// router.delete("/books/:id",async (req,res)=>{
//     var id = req.params.id
//      Book.remove({_id: id},(err,data)=>{
//             if(!err){
//                 res.send(data)
//             }else{
//                 res.send(err)
//             }
//         })
//     })

// router.patch("/books/:id",async(req,res)=>{
//     var id = ObjectId(req.params.id);
//     const UpdateBook = req.body
//     const data = await Book.findOneAndUpdate({_id:id},UpdateBook)
//     if (!data) {
//         res.send("Match not found...!!")
//     } else {
//         res.send("Updated sucessfully...!!")
//     }
// })


module.exports = router;
