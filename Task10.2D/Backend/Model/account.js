const account = require("../Schema/account");

exports.create = function (info, callback)
{
	account.create(info, (error) =>
	{
		if (error)
		{
			return callback(error.message)
		}

		return callback(null)
	})
}

exports.findOne = function (info, callback)
{
	account.findOne(info, null, (err, info) =>
	{
		if (err)
		{
			return callback(err)
		}
		return callback(null, info)
	})
}
