# Leaderboard 

Leaderboard is a simple leaderbaord which is a cloud-enabled Nodejs based application with easily configurable player data file to hold the player data. 

The application supports JSON, csv and xlsx file formats for player data storage. 

To aid with ease of use, csv has been chosen as the default format 

The app automatically ranks and display's the results on the leaderboard based on the score of each player.

Check out the [demo](https://wills-quiz.herokuapp.com/)

(Huge thanks to Will H for organising the quiz and running it for us during the current caronavirus lockdown. I am sure everyone throughly enjoyed it :-))

The application does not use expressJS purposefully and uses nodes own http module as there are no complex routes or external dependencies.

The application has a configurable CSV file [ player.csv - within the data folder] with options to :
  - Add new user/s
  - Modify existing users (i.e Change thier scores etc)
  - Delete user/s

### Tech

Leaderboard uses  

* [NodeJS] - An evented I/O for the backend along with a couple of plugins
  
### Installation

Leaderboard requires [Node.js](https://nodejs.org/) v12+ to run.

To start the server.
```sh
$ npm start
```
To start the server with JSON as the file format.
```sh
$ node index.js json
```

To start the server with Excel (XLSX) as the file format.
```sh
$ node index.js excel
```

### Credits

A shout-out for [Jonas Schmedtmann](https://codingheroes.io/) whose HTML template was the inspiration for this leaderboard.