var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
    fake_url = "https://fake.com/path" + req.url
    const url = new URL(fake_url)
    const search_params = url.searchParams
    if (req.method === 'GET') {
        vl = search_params.get("x")
        if(vl === null)
        {
            vl=Math.round(Math.random()*1000);
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('Math.fround() applied to ' + vl + ' is ' + Math.fround(vl))
        res.write('<br/>Math.random() applied to ' + vl + ' is ' + Math.random(vl))
        res.write('<br/>Math.round() applied to ' + vl + ' is ' + Math.round(vl))
        res.end()
    }
});

module.exports = router;