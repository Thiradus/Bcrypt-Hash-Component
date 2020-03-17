const bcrypt = require('bcrypt');

const hash = {};

hash.generate = async (password) => {
	const hash = await bcrypt.hash(password, 12);

	return hash;
};

hash.validate = async (password, hash) => {
	const hashValidator = bcrypt.compare(password, hash);

	return hashValidator;
};

module.exports = hash;
