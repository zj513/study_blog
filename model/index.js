/**
 * Created by Administrator on 2016/10/30.
 */
var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;
//数据库连接
mongoose.connect('mongodb://127.0.0.1/myBlog');
mongoose.Promise = Promise;
var UserSchema = new mongoose.Schema({
    username:String,
    password:String,
    email:String,
    avatar:String
},{collection:'user'});

//定义操作数据库的模型的model
exports.User = mongoose.model('User',UserSchema);
var ArticleSchema = new mongoose.Schema({
    title:String,
    content:String,
    user:{type:ObjectId,ref:'User'}
});
exports.Article = mongoose.model('Article',ArticleSchema);