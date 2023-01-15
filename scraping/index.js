import * as cheerio from 'cheerio'
const res = await fetch('https://store.steampowered.com/search/?term=silksong')
const html = await res.text()

const $ = cheerio.load(html)
const gameName = $('span.title:contains("Hollow")').text()
const priceGame = $('div.search_price').first().text()

if (priceGame.length === 45){
    console.log(`${gameName}: no tiene precio`);
}else
    console.log(`${gameName}: ${priceGame}`);