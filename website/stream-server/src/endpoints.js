const Router = require('express').Router()
const axios = require('axios')
const { v4: uuidv4 } = require('uuid')
const dbEnv = require('../mongodb.env')

const node_env = process.env.node_env
const Video = require('./models/video.model')
const Team = require('./models/team.model')
const Sports = require('./models/sports.model')
const Tournaments = require('./models/tournaments.model')

let router_count = 0;

module.exports = (imports) => {
    const {
        worker 
    } = imports;

    let videos = {}
    const traceEvents = [
        'probation',
        'rtp',
        'keyframe',
        'nack',
        'pli',
        'fir'
    ];

    const traceLogger = trace => {
        console.log({ trace })
    }

    Router.get('/routers', async (req, res) => {
        res.json(videos)
    })
    Router.get('/video/:video_id/load', async (req, res) => {
        const video_id = req.params.video_id            
        let games = await Video.findOne({_id:video_id})
        console.log("aaaa ", games);
       res.status(200).json({"video":games['video_url']})
       return
    })

    Router.get('/video/:video_id/data', async (req, res) => {
        const video_id = req.params.video_id
        let games = await Video.findOne({_id:video_id})
        res.status(200).json(games)

    })

    Router.post('/videos/list', async (req, res) => {
        //const games = await Video.find({}, null, { sort: { createdAt: -1 }})    
        var type = req.body.type;
        var query = {};
         if(type!=undefined){
            let tournaments = await Tournaments.find({type:type})
            var array = [];
            tournaments.forEach(async (item,index)=> {
                array.push(item.league);
            })
            query = {league:array}
            console.log(query, type);
         }
        let games = await Video.find(query)
        .sort({
            "start_time": 1
        })        
        const response = []
        res.json(games)

    })

    Router.get('/category/list', async (req, res) => {

        let games = await Sports.find({})
        .sort({
            "weight": 1
        })
        // console.log('sportsList', games)
        const response = []
        res.json(games)

    })

    return Router;
}