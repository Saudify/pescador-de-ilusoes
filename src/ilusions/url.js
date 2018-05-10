import { stringify } from 'querystring'
import config from './config'

/**
 * Mount URL for search page.
 * @param {String} searchValue Value used in querystring search.
 * @returns {String}
 */
export function mountSearchUrl (searchValue) {
  const qs = stringify({
    [config.search_qs]: searchValue
  })

  return `${config.protocol}://${config.host}/${config.path}?${qs}`
}
