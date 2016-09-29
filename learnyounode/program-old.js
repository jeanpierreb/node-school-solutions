const fs = require('fs');
const path = require('path');

module.exports = (dir, ext, callback) => {
	ext = '.' + ext;

	fs.readdir(dir, (err, files) => {
		let results = [];

		if (err) {
			return callback(err);
		}

		files.forEach(function(item){
			if (path.extname(item) === ext) {
				results.push(item)
			}
		})
		callback(null, results);
	});
}
