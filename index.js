import * as cheerio from 'cheerio'
import { listofGames } from './list.js'

for (const games of listofGames){
    const res = await fetch(`https://store.steampowered.com/search/?term=${games.id}`)
    const html = await res.text()

    const $ = cheerio.load(html)
    const gameName = $(`span.title:contains("${games.name}")`).first().text()
    const priceGame = $('div.search_price').first().text().replace(/\s/g, '')

    if (priceGame.length === 0) {
        console.log(`${gameName} no tiene precio`)
    } else
        console.log(`${gameName} ${priceGame}`);
}
