import got from 'got'
import cheerio from 'cheerio'

/**
 * Request a web page.
 * @param {String} url Page url.
 * @param {Object} options Request options.
 * @returns {Function} Page loaded with cheerio.
 */
export async function hit (url, options = {}) {
  const response = await got(url, options)
  const $ = cheerio.load(response.body)
  return $
}
