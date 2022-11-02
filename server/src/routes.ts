import * as dotenv from "dotenv";
import { Router } from "express";
import axios from "axios";

dotenv.config();
const router = Router();

router.get("/", async (req, res) => {
	const techNews = await axios.get(
		`${process.env.BASE_URL}technology&apiKey=${process.env.API_KEY}`
	);
	const scienceNews = await axios.get(
		`${process.env.BASE_URL}science&apiKey=${process.env.API_KEY}`
	);

	const allNews: Array<any> = [];

	techNews.data.sources.forEach((element: Object, index: number) => {
		if (index % 2 === 0) {
			allNews[index] = element;
			allNews[index + 1] = scienceNews.data.sources[index];
		}
	});

	res.send(allNews.filter((n) => n));
});

router.get("/technology", async (req, res) => {
	const { data } = await axios.get(
		`${process.env.BASE_URL}technology&apiKey=${process.env.API_KEY}`
	);

	res.send(data.sources.filter((n) => n));
});
router.get("/science", async (req, res) => {
	const { data } = await axios.get(
		`${process.env.BASE_URL}science&apiKey=${process.env.API_KEY}`
	);

	res.send(data.sources.filter((n) => n));
});

export { router };
