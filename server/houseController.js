module.exports = {
	create: (req, res) => {
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
	update: (req, res) => {},
	delete: (req, res) => {
		req.app
			.get("db")
			.delete_house({ ...req.params })
			.then(response => {
				res.sendStatus(200);
			})
			.catch(error => {
				console.log("Error DELETE endpoint", error);
				res.sendStatus(500);
			});
	}
};
