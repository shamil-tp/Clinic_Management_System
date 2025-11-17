const mongoose = require('mongoose');

async function connectDB() {
	try {
		await mongoose.connect(process.env.DB);
		console.log('MongoDB Connected Successfully!');
	} catch (err) {
		console.error('MongoDB Connection Error:', err.message);
		process.exit(1);
	}
}

module.exports = connectDB;