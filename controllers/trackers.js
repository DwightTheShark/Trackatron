const FBTracker = require('../models/FBTracker')
const TTTracker = require('../models/TTTracker')

const axios = require('axios').default;

module.exports = {
    getTrackers: async(req, res) => {
        try {
            const fbTrackers = await FBTracker.find({ userId: req.user.id })
            const ttTrackers = await TTTracker.find({ userId: req.user.id })
            res.render('trackers.ejs', { fbTrackers: fbTrackers, ttTrackers: ttTrackers, user: req.user })
        } catch (err) {
            console.log(err)
        }
    },
    createFBTracker: async(req, res) => {
        try {
            await FBTracker.create({ name: req.body.name, fb_token: req.body.fb_token, fb_pixel_id: req.body.fb_pixel_id, userId: req.user.id })
            console.log('FBTracker has been added!')
            res.redirect('/trackers')
        } catch (err) {
            console.log(err)
        }
    },
    deleteFBTracker: async(req, res) => {
        try {
            await FBTracker.findOneAndDelete({ _id: req.body.fbTrackerId })
            res.json('Deleted It')
        } catch (err) {
            console.log(err)
        }
    },
    doFBTrack: async(req, res) => {
        console.log(req.params.trackerId)
        try {
            let record = await FBTracker.findOne({ _id: req.params.trackerId })
            let url = "https://graph.facebook.com/v13.0/" + record.fb_pixel_id + "/events" + "?access_token=" + record.fb_token
            console.log(url)
            let ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress
            var page_url = "https://trackaton.com/trackers/fbtrack/"+req.params.trackerId

            if (req.query.url) {
                page_url = req.query.url
            }

            let payload = {
                'event_name': 'Lead',
                'event_time': new Date().getTime(),
                'user_data': {
                    'client_ip_address': ip,
                    'client_user_agent': req.get('User-Agent')
                },
                'event_source_url': page_url,
                'action_source': 'website'
            }

            axios.post(url, payload).then((resp) => {
                console.log(resp)
            }).catch((err) => {
                console.log(err)
            })


        } catch (err) {
            console.log(err)
        }
    },
    createTTTracker: async(req, res) => {
        try {
            await TTTracker.create({ name: req.body.name, tt_token: req.body.tt_token, tt_pixel_id: req.body.tt_pixel_id, userId: req.user.id })
            console.log('TTTracker has been added!')
            res.redirect('/trackers')
        } catch (err) {
            console.log(err)
        }
    },
    deleteTTTracker: async(req, res) => {
        try {
            await TTTracker.findOneAndDelete({ _id: req.body.TTTrackerId })
            res.json('Deleted It')
        } catch (err) {
            console.log(err)
        }
    },
    doTTTrack: async(req, res) => {
        console.log(req.params.trackerId)
        try {
            let record = await TTTracker.findOne({ _id: req.params.trackerId })
            let url = "https://business-api.tiktok.com/open_api/v1.2/pixel/track/"
            let ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress
            var page_url = "https://trackatron.com/trackers/tttrackers/" + req.params.trackerId

            if (req.query.url) {
                page_url = req.query.url
            }

            let payload = {
                'pixel_code': record.tt_pixel_id,
                'event': 'SubmitForm',
                'timestamp': new Date().getTime(),
                'context': {
                    'ip': ip,
                    'user_agent': req.get('User-Agent'),
                    'page': {
                        'url': page_url,
                        'referrer': req.get('Referer')
                    }
                }
            }


            axios.post(url, payload, {
                headers: {
                    "Access-Token": record.tt_token
                },
            }).then((resp) => {
                console.log(resp)
            }).catch((err) => {
                console.log(err)
            })


        } catch (err) {
            console.log(err)
        }
    }
}