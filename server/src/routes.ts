import * as dotenv from "dotenv";
import { Router } from "express";
import axios from "axios";

dotenv.config();
const router = Router();

function baseUrl(category: string, numberOfArticles: number) {
	return `https://newsapi.org/v2/everything?q=${category}&sortBy=publishedAt&pageSize=${numberOfArticles}&apiKey=${process.env.API_KEY}`;
}

router.get("/", async (req, res) => {
	const techNews = await axios.get(baseUrl("technology", 10));
	const scienceNews = await axios.get(baseUrl("science", 10));

	const allNews: Array<Object> = [];

	techNews.data.articles.forEach((element: Object, index: number) => {
		if (index % 2 === 0) {
			allNews[index] = element;
			allNews[index + 1] = scienceNews.data.articles[index];
		}
	});

	res.send(allNews.filter((n) => n));
});

router.get("/technology", async (req, res) => {
	const { data } = await axios.get(baseUrl("technology", 20));

	res.send(data.articles.filter((n) => n));
});
router.get("/science", async (req, res) => {
	const { data } = await axios.get(baseUrl("science", 20));

	res.send(data.articles.filter((n) => n));
});

export { router };
