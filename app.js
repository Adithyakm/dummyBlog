const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require('lodash');
const homeStartingContent = "klsalksaklk l;sa;las;l kkkajkasjfj lkaslkasklas lkasklsaklsak lkasklsaklsalksam aslkaskllksalk aasffddffddf gghhfhgfgfgfh fdfdgffdggfgfgffggfgfffggf ldsldsldkf klsalksaklsa lksaklasklas klsaklsakksa klsaklasklskal lksaksakksal ioeoieieiio mcmccn nmdsnsnm dnmdnndsjkj sdmdmds m,dm,dsmds dmmdmdmdm,ds mjkjffjjf nmnnfdnndfnfdnfdnfd nfnfnfnfnfd krejkrejkre fdkfkjfdjkfjfj jkrerkrkrrkkrkrkr rklrkrkrkrkkreremr rklreklerklrekr mlmrklremmfm,fmfdlkfdfkdkfklrrrelrlrle;rll;relrelrlelrrlrllr;lrrllrlrlr";
const aboutContent = "jkedjkejk ejkejkekj uiuiuiwji iwioiowioi ewoieiioi ndndndn kewlkelkewkl klwklewklek wekleklelk ewlkewkeklk ewklkelkeklew klewlkewlk elkewlkelk ewlelkelkelk weklewkleklekl dwdnmmndsmnd nmdsnmdmnd";
const contactContent = "jnsjnnjnj ncmncn dwjkdjkd jkdwjkdj djkdkdnmmnd wjkwdndwnm dwkdwkdwk dw d mnmndndmnmddnm smsmsmnsnm swmkkewkwekewkjk kjewjkjkewjkew ejkewjkejkew ewkjekewkjew ewjkewjkewjkewj ejejkewjkejewj";
const app = express();
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

let posts = []; 

app.listen(3000,function(){
    console.log("Server started on port 3000");
})

app.get("/",function(req,res){
    res.render("home",{homeContent:homeStartingContent,post:posts});
    posts.forEach(function(post){
        console.log(post.title);
    })
});

app.get("/posts/:title",function(req,res){
    console.log(req.params.title);
    const postVal = req.params.title;
    let postArr = [];
    posts.forEach(function(post){
        if(_.lowerCase(post.title)===_.lowerCase(postVal)){
            res.render("post",{title:post.title,content:post.content}); 
            console.log("Match Found");
        }
    })
})

app.get("/about",function(req,res){
    res.render("about",{aboutCont:aboutContent});
});

app.get("/contact",function(req,res){
    res.render("contact",{contactCont:contactContent});
})

app.get("/compose",function(req,res){
    res.render("compose")
})

app.post("/compose",function(req,res){
    
    const post = {
        title:req.body.Title,
        content:req.body.Post
    };

    posts.push(post);
    res.redirect("/");
    
})