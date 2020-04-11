
const http = require('http');
const url = require( 'url');
const fs = require('fs');

const tempLanding = fs.readFileSync(`${__dirname}/templates/template-landing.html`, 'utf-8');
const tempCard = fs.readFileSync(`${__dirname}/templates/template-card.html`, 'utf-8');




let jsonData = fs.readFileSync(`${__dirname}/data/data.json`, 'utf-8');

let players =  JSON.parse(jsonData)

var scores = new Set(Object.keys(players).map(function (key) {
    return players[key].score;
  }));

  
var ordered_scores = Array.from(scores).sort(function(a, b) {
    return b - a;
  });

  
Object.keys(players).forEach(function (key) {
var player = players[key];
player.rank = ordered_scores.indexOf(player.score) + 1;
});

function sortByProperty(property){  
    return function(a,b){  
       if(a[property] > b[property])  
          return 1;  
       else if(a[property] < b[property])  
          return -1;  
   
       return 0;  
    }  
 }

 players.sort(sortByProperty("rank"));


const replaceTemplate = (template, participant) => {
    const first =  "🥇";
    const second =  "🥈";
    const third =  "🥉";
    let output = template.replace(/{%NAME%}/g, participant.Name);
    output = output.replace(/{%SCORE%}/g, participant.score);
    switch (participant.rank) {
        case 1:
            output = output.replace(/{%IMAGE%}/g, first)
          break;
        case 2:
            output = output.replace(/{%IMAGE%}/g, second)
          break;
        case 3:
            output = output.replace(/{%IMAGE%}/g, third)
          break;
        default:
            output = output.replace(/{%IMAGE%}/g, participant.image);
      }
   
    return output;
}

const server  = http.createServer((request, response)=> {

    console.log(request.url);
 
    let pathName = request.url
    
    if (pathName == '/') {
        response.writeHead(200, {
            'Content-type': 'text/html',
        })

        const cardsHtml  =  players.map(el => replaceTemplate(tempCard, el)).join('');

        const tempLandingUpdated = tempLanding.replace('{%PARTICIPANT_CARDS%}', cardsHtml );

        response.end(tempLandingUpdated);

    } 
    else {
        response.writeHead(404, {
            'Content-type': 'text/html',
        })
        response.end('<h1>404 Page not found</h1>')
    }

})

const port = process.env.PORT || 3000;

server.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`Listening to requests on port ▶ ${port}`);
});

