const nodemailer = require("nodemailer");

const email = '100990916@qq.com'
const password = 'rwizgdvmssdlcbaf'

const transporter = nodemailer.createTransport({
	service: 'qq',
	port: 465,
	secure: true,
	auth: {
		user: email, // 发送方的邮箱
		pass: password // smtp 的授权码
	}
});

exports.sendMail = function (to, subject, text, message, callback)
{
	const mailOptions = {
		from: email,
		to: to,
		subject: subject,
		text: text
	};

	const result = {
		httpCode: 200,
		message: message
	};

	try
	{
		transporter.sendMail(mailOptions, function (err, info)
		{
			if (err)
			{
				result.httpCode = 500
				result.message = err
				callback(result)
				return
			}

			callback(result)
		});
	}
	catch (err)
	{
		result.httpCode = 500
		result.message = err
		callback(result)
	}
}