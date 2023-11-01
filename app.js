const path = require("path");
const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const sequelize = require("./util/database");
const blog = require("./models/blog");
const comment = require("./models/comment");
const user = require("./models/user");

const blogRoutes = require("./routes/blog");
const cors = require("cors");
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "public")));

app.use((req,res,next)=>{
  user.findByPk(1).then(user=>{
    req.user=user;
    next()
  }).catch(err=>{
    console.log(err)
    next();
  })
})

app.use("/", blogRoutes);

blog.belongsTo(user, { constraints: true, onDelete: "CASCADE" });
user.hasMany(blog)

comment.belongsTo(blog)
blog.hasMany(comment)

sequelize
  // .sync({force:true})
  .sync()

  .then((result) => {
   return user.findByPk(1)
   
  }).then(User=>{
    if(!User){
      return user.create({name:'Max',email:'test@test.com'})
    }
    return user;
  }).then(user=>{
    // console.log(user)
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
