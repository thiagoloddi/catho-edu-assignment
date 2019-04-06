import server from './api/server';
import path from 'path';
import express from "express";
import mongodb from "./api/db";
import { PORT } from './env.config';

mongodb()
	.then(async () => {
		const app = await server();

		app.use(express.static(path.join(__dirname, "public")));
		app.set("views", path.join(__dirname, "views"));
		app.set("view engine", "ejs");
		
		app.get("*", (req, res) => {
			res.render("index");
		});
	
		app.listen(PORT, err => {
			if(err) {
				console.log(err);
			} else {
				console.log(`Server online - Listening to port ${PORT}`);
			}
		});
})
	.catch(e => {
		console.log('MONGODB:', 'Failed to connect.');
		console.log(e);
});