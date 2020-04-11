# Leaderboard 

Leaderboard is a simple leaderbaord which is a cloud-enabled pure Nodejs based application with easily configurable JSON file to hold the application data. The app automatically ranks and display's the result on the leaderboard based on the score of each player.

Check out the [demo](https://wills-quiz.herokuapp.com/)
(Huge thanks to Will H for organising the quiz and running it for us during the current caronavirus lockdown. Iam sure everyone throughly enjoyed it :-))


The application does not use express purposefully and uses nodes own http module as there are no complex routes or external dependencies.

The application has a configurable JSON file [ data.json - within the data folder] with options to :
  - Add new user/s
  - Modify existing users (i.e Change thier score etc)
  - Delete user/s

### Tech

Dillinger uses a number of open source projects to work properly:

* [NodeJS] - An evented I/O for the backend
  
### Installation

Leaderboard requires [Node.js](https://nodejs.org/) v12+ to run.

Install the dependencies and start the server.
```sh
$ npm start
```
### Credits

A shout-out for [Jonas Schmedtmann](https://codingheroes.io/) whose HTML template was the inspiration for this leaderboard.