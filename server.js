const fetch = require('node-fetch')
const cors = require("cors");
const express = require('express')

const app = express();

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use(express.static("public"));

app.get('/', (req, res)=>{
  const url = req.query.url
         const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'article-extractor2.p.rapidapi.com',
		'X-RapidAPI-Key': process.env.scrapperAPIKey
	}
};

fetch(`https://article-extractor2.p.rapidapi.com/article/parse?url=${url}`, options)
	.then(response => response.json())
	.then(response => {console.log(response)
                    res.send(response)
})
	.catch(err => console.error(err));
})

app.listen(process.env.PORT || 8000);