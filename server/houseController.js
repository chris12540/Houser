module.exports = {
	create: (req, res, next) => {
		req.app
			.get("db")
			.create_house({ ...req.body })
			.then()
			.catch(error => {
				console.log("Error POST endpoint", error);
				res.sendStatus(500);
			});
	},
	read: (req, res) => {
		req.app
			.get("db")
			.get_houses()
			.then(houses => {
				res.json(houses);
			})
			.catch(error => {
				console.log("Error GET endpoint", error);
				res.sendStatus(500);
			});
	},
	update: (req, res, next) => {},
	delete: (req, res, next) => {}
};
