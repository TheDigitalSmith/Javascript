// let thoughts = new CreatePost("How to eat a lizard","Cook the lizard","Tash")
// const post = {
//     ...thoughts,
//     views: 30,
//     comments:[{
//         author:"Tash",
//         body:"Best way to cook chicken I know, thanks Tash"
//     },{
//         author:"Aneiq",
//         body:"Good tip bro!, thanks Tash"
//     }],
//     isLive: true
// }

function CreatePost (title,body, author){
    this.title = title
    this.body = body
    this.author = author
    this.views = 0
    this.comments = []
    this.isLive = false
}

let post = new CreatePost("How to eat a lizard","Cook the lizard","Tash")
console.log(post);