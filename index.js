import * as cheerio from 'cheerio'
import { listofGames } from './list.js'

for (const games of listofGames){
    const res = await fetch(`${games.url}`)
    const html = await res.text()

    const $ = cheerio.load(html)
    const gameName = $(`span.title:contains("${games.id}")`).first().text()
    const priceGame = $('div.search_price').first().text().replace(/\s/g, '')

    if (priceGame.length === 0) {
        console.log(`${gameName}: No tiene precio`);
    } else
        console.log(`${gameName}: ${priceGame}`);
}