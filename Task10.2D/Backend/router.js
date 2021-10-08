const account = require('./Model/account');
const task = require('./Model/task');
const mailer = require('./mailer')
const {ObjectId} = require("mongodb");

module.exports = function (app)
{
	app.put('/account', function (req, res)
	{
		account.create(req.body, function (err)
		{
			if (err)
			{
				res.status(200).json({"success": false, "msg": err})
				return
			}

			mailer.sendMail(req.body.email, 'Welcome to iService', 'Dear ' + req.body.lastname + ', you are signed into SIT313 iService platform.', 'Signed In', (state) =>
			{
				console.log('send email success')
			})

			res.status(200).json({"success": true, "msg": err})
		})
	})

	app.get('/account', function (req, res)
	{
		account.findOne({email: req.query.email, password: req.query.password}, (err, data) =>
		{
			if (err)
			{
				res.status(200).json({"success": false, "msg": err})
				return
			}

			res.status(200).json({"success": data != null})
		})
	})

	app.put('/task', function (req, res)
	{
		task.create(req.body, function (err)
		{
			if (err)
			{
				res.status(200).json({"success": false, "msg": err})
				return
			}

			res.status(200).json({"success": true, "msg": err})
		})
	})

	app.delete('/task/:id', function (req, res)
	{
		const {id} = req.params
		console.log('Deleting ' + id)
		task.delete({_id: ObjectId(id)}, function (err)
		{
			if (err)
			{
				console.log('not deleted')
				res.status(200).json({"success": false, "msg": err})
				return
			}

			console.log('deleted')
			res.status(200).json({"success": true, "msg": err})
		})
	})

	app.get('/tasks', function (req, res)
	{
		task.findAll(function (err, data)
		{
			res.send(data)
			res.status(200)
		})
	})
}