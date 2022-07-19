const mongoose=require('mongoose')

const postSchema=mongoose.Schema({
    title: String,
    content: {
        authorName: String,
        type: String
    }
});

module.exports= mongoose.model('PostSchema',postSchema)
