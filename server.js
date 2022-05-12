import express from 'express';
import { extract } from 'article-parser'

const app = express();
app.get('/', (req, res) => {
    const getArticle = async (url) => {
        try {
          const article = await extract(url)
          return article
          res.send(article);
          console.log(article);
        } catch (err) {
          console.trace(err)
          return null
        }
      }
      
      getArticle('https://www.binance.com/en/blog/markets/15-new-years-resolutions-that-will-make-2022-your-best-year-yet-421499824684903249&apikey=demo-orePhhidnWKWPvF8EYKap7z55cN')
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
// const url = 'https://westafricaweekly.substack.com/p/cornflakes-for-jihad-the-boko-haram?s=r'

