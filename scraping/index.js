import * as cheerio from 'cheerio'
const res = await fetch('https://store.steampowered.com/search/?term=Atomic+Heart')
const html = await res.text()

const $ = cheerio.load(html)
const gameName = $('span.title:contains("Atomic")').first().text()
const priceGame = $('div.search_price').first().text().replace(/\s/g, '')

if (priceGame.length === 45){
    console.log(`${gameName}: no tiene precio`);
}else
    console.log(`${gameName}: ${priceGame}`);