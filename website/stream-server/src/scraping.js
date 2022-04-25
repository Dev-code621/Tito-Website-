const Router = require('express').Router()
const { v4: uuidv4 } = require('uuid')
const dbEnv = require('../mongodb.env')

const node_env = process.env.node_env
const Video = require('./models/video.model')
const Tournaments = require('./models/tournaments.model')
const Sports = require('./models/sports.model')

var request = require('request');

const axios = require('axios');
const cheerio = require('cheerio');
var fs = require('fs'),
http = require('http'),
https = require('https');
const prettylink = require('prettylink');
var path = "public/";
var Stream = require('stream').Transform;
const sportsCategores = ["Football", "NBA","Cricket","La Liga","UEFA","Tennis"]

var downloadImageFromURL = async(url, filename,teamName ,callback) => {
  if (fs.existsSync(path + filename)) {
    // path exists
    console.log("exists:", filename);
    return
  }


  var client = http;
  if (url.toString().indexOf("https") === 0){
    client = https;
   }

  client.request(url, function(response) {                                        
    var data = new Stream();                                                    

    response.on('data', function(chunk) {                                       
       data.push(chunk);                                                         
    });                                                                         

    response.on('end', function() {                                             
       fs.writeFileSync(path + filename, data.read());                               
    });                                                                         
 }).end();
   
};
function getLinks(runtime,league,href_link,title,home_team_image,away_team_image,home_team_name,away_team_name) {
  var playurl ="";
 request(href_link, function(error, response, body) {
   var $ = cheerio.load(body);
   $('#player > iframe').each(async function(index, element) {
   var url = $(element).attr('src'); // --> Get the URL of the iframe
       playurl= url;
       console.log("start_time:"+runtime);
       console.log("league:"+league);
       console.log("playurl:"+playurl);
       console.log("title:"+title);    
       console.log("home_team_image:"+home_team_image);
       console.log("away_team_image:"+away_team_image);        
      console.log("home_team_name:"+home_team_name);
       console.log("away_team_name:"+away_team_name);
       console.log("==================");     
       var array = home_team_image.split('/')
       var home_team_logo_name = array[array.length -1]
       array = away_team_image.split('/')
       var away_team_logo_name =   array[array.length -1]
        await downloadImageFromURL(home_team_image, home_team_logo_name , home_team_name);
        await downloadImageFromURL(away_team_image, away_team_logo_name,away_team_name);  
     

    

       let video = new Video({
        video_url:playurl,
        alive:true,
        start_time:runtime,
        league:league,
        createdBy: 'bot',
        title:title,
        away_team_image:"http://localhost:8342/" + away_team_logo_name,
        away_team_name,
        home_team_name,
        home_team_image:"http://localhost:8342/" + home_team_logo_name,

         });         
          let saved = await video.save()
          .then((result)=>{
          })
          .catch((error) => {
            return { success: true }
            // return new UserInputError('Already subscribed to '+room['title']);
          })
          

      });
 });
  return playurl;
 
}


module.exports.index = async function index() { 
  try {
    if (!fs.existsSync(path)) {
      fs.mkdirSync(path)
    }
  } catch (err) {
    console.error(err)
  }
  var URL = 'https://mitom1.tv';
  const removevideos = await Video.remove({ })
      request(URL, function(error, response, body) {
        if(error) { return  console.error('There was an error!'); }

        var $ = cheerio.load(body);

        // sportsCategores.forEach(async (item,index)=> {
        //   let sports = new Sports({
        //     name:item,
        //     type:item,         
        //     weight:index,
        //     }); 
        //     let saved = await sports.save()
        //       .then((result)=>{
        //       })
        //       .catch((error) => {
        //         // console.log(error);
        //         return { success: true }
        //       })
        // })
  
        const listItems = $("option");
          listItems.each(async function (idx, el) {
          let tournaments = new Tournaments({
            league:$(el).text(),
            // league:true,
            type:"Football",         
            }); 
            let saved = await tournaments.save()
              .then((result)=>{
              })
              .catch((error) => {
                return { success: true }
                // return new UserInputError('Already subscribed to '+room['title']);
              })
          });

        $('div.matches__item').each(function(i) {
          if($(this).attr('data-runtime')!=undefined){
            var runtime = $(this).attr('data-runtime');
            var league = $(this).attr('data-league');
             var href_link = $(this).find('a.redirectPopup').attr('href');
             var title = $(this).find('a.redirectPopup').attr('title');
             var home_team_image = $(this).find('div.matches__team--home img.img-fluid ').attr('data-src');
             var home_team_name = $(this).find('div.matches__team--home div.team__name').text();         
             var away_team_image = $(this).find('div.matches__team--away img.img-fluid ').attr('data-src');
             var  away_team_name = $(this).find('div.matches__team--away div.team__name').text();
             //console.log(away_team_name);
           getLinks(runtime,league,href_link,title,home_team_image,away_team_image,home_team_name,away_team_name);
          }
        });
      });
     
};