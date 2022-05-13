const fetch = require('node-fetch')
const express = require('express')

const app = express();

app.get('/', (req, res)=>{
  const url = req.query.url
         const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'article-extractor2.p.rapidapi.com',
		'X-RapidAPI-Key': '4d28f8767fmsh77c6703eafddd9fp1dc387jsn58cdd45aac27'
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