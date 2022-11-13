import * as dotenv from "dotenv";
import { Router } from "express";
import axios from "axios";

dotenv.config();
const router = Router();

function baseUrl(category: string) {
	return `https://newsdata.io/api/1/news?apikey=${process.env.API_KEY}&language=en&category=${category}`;
}

router.get("/", async (req, res) => {
	try {
		const { data } = await axios.get(baseUrl("science,technology"));

		if (data.status != "success") {
			res.status(400).send("error in api call");
		}

		res.json(data);
	} catch (error) {
		res.status(400).send("error in api call");
	}
});

router.get("/technology", async (req, res) => {
	try {
		const { data } = await axios.get(baseUrl("technology"));

		if (data.status != "success") {
			res.status(400).send("error in api call");
		}

		res.json(data);
	} catch (error) {
		res.status(400).send("error in api call");
	}
});
router.get("/science", async (req, res) => {
	try {
		const { data } = await axios.get(baseUrl("science"));

		if (data.status != "success") {
			res.status(400).send("error in api call");
		}

		res.json(data);
	} catch (error) {
		res.status(400).send("error in api call");
	}
});

export { router };
