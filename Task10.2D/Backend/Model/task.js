const task = require("../Schema/task");

exports.create = function (info, callback)
{
	task.create(info, (error) =>
	{
		if (error)
			return callback(error.message)

		return callback(null)
	})
}

exports.delete = function (info, callback) {
	task.remove(info, (err) =>
	{
		if (err)
		{
			return callback(err);
		}
		return callback(null)
	})
}

exports.findAll = function (callback)
{
	task.find({}, null, {sort: {created: 'desc'}}, (err, info) =>
	{
		if (err) return callback(err)
		return callback(null, info)
	})
}