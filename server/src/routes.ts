import * as dotenv from "dotenv";
import { Router } from "express";
import axios from "axios";

dotenv.config();
const router = Router();

function baseUrl(category: string) {
	return `https://newsdata.io/api/1/news?apikey=${process.env.NEWS_API_KEY}&country=us&category=${category}`;
}

function getImage(query: string) {
	return `https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=${process.env.IMAGES_API_KEY}`;
}

router.get("/", async (req, res) => {
	try {
		const { data } = await axios.get(baseUrl("science,technology"));

		if (data.status != "success") {
			res.status(400).send("error in api call");
		}

		await Promise.all(
			data.results.map(async (element) => {
				if (element.image_url) return;

				const { data } = await axios.get(getImage(element.category[0]));
				const random = Math.floor(Math.random() * 10);
				element.image_url = await data.results[random].urls.small;
			})
		);

		const news = data.results.filter((e) => e.description);

		res.json(news);
	} catch (error) {
		res.status(400).send("error in api call " + error);
	}
});

router.get("/technology", async (req, res) => {
	try {
		const { data } = await axios.get(baseUrl("technology"));

		if (data.status != "success") {
			res.status(400).send("error in api call");
		}

		await Promise.all(
			data.results.map(async (element) => {
				if (element.image_url) return;

				const { data } = await axios.get(getImage(element.category[0]));
				const random = Math.floor(Math.random() * 10);
				element.image_url = await data.results[random].urls.small;
			})
		);

		const news = data.results.filter((e) => e.description);

		res.json(news);
	} catch (error) {
		res.status(400).send("error in api call " + error);
	}
});
router.get("/science", async (req, res) => {
	try {
		const { data } = await axios.get(baseUrl("science"));

		if (data.status != "success") {
			res.status(400).send("error in api call");
		}

		await Promise.all(
			data.results.map(async (element) => {
				if (element.image_url) return;

				const { data } = await axios.get(getImage(element.category[0]));
				const random = Math.floor(Math.random() * 10);
				element.image_url = await data.results[random].urls.small;
			})
		);

		const news = data.results.filter((e) => e.description);

		res.json(news);
	} catch (error) {
		res.status(400).send("error in api call " + error);
	}
});

export { router };
