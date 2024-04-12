const express = require('express');
const app = express();
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('db.json');
const db = low(adapter);
const uuid = require('uuid');
const cors = require('cors')
const bodyParser = require('body-parser');
const tennis = require('./tennis');

db.defaults({ games: [], players: [] }).write();
app.use(bodyParser.json());
app.use(cors());

app.get('/players/:id', function (req, res) {
	let player = db.get('players').find({id: req.params.id}).value();
	res.status(200).json(player);
});

app.get('/players', function (req, res) {
	let players = db.get('players').value();
	res.status(200).json(players);
});

app.post('/players', function (req, res) {
	let id = uuid.v4();

	let name = req.body.name;
	let player = {id, name};

	db.get('players').push(player).write();
	res.status(201).json(player);
});

app.get('/games/:id', function (req, res) {
	let game = db.get('games').find({id: req.params.id}).value();
	game = deserialize(game.game);
	let score = game.getScore();
	res.status(200).json({score});
});

app.get('/games', function (req, res) {
	let games = db.get('games').value();

	let result = [];
	games = games.map(g => {
		let game = deserialize(g.game);
		result.push({
			id: g.id,
			player1Name: game.player1Name, 
			player2Name: game.player2Name, 
			player1Id: g.player1id, 
			player2Id: g.player2id, 
			score: game.getScore()
		});
	});
	
	res.status(200).json(result);
});

app.post('/games', function (req, res) {
	let id = uuid.v4();

	let player1id = req.body.player1id;
	let player2id = req.body.player2id;

	let player1 = db.get('players').find({id: player1id}).value();
	let player2 = db.get('players').find({id: player2id}).value();
	let game = new tennis(player1.name, player2.name);
	
	db.get('games').push({id, game: serialize(game), player1id, player2id}).write();
  	
  	res.status(201).json({id});
});

app.put('/games/:id', function (req, res) {
	let playerid = req.body.playerid;

	let game = db.get('games').find({id: req.params.id}).value();
	let player = db.get('players').find({id: playerid}).value();

	game = deserialize(game.game);
	game.wonPoint(player.name);
	let score = game.getScore();
	db.get('games').find({id: req.params.id}).assign({game: serialize(game)}).write();
	res.status(200).json({score});
});

const serialize = (game) => JSON.stringify(Object.entries(game));
const deserialize = (game) => {
	const result = new tennis();
	JSON.parse(game).map(([key, value]) => (result[key] = value));
	return result;
}
 
app.listen(process.env.PORT || 3000);