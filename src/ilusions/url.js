import config from './config'

/**
 * Mount URL for search page.
 * @param {String} searchValue Value used in querystring search.
 * @returns {String}
 */
export function mountSearchUrl (searchValue) {
  // TODO: Refactor
  return `${config.protocol}://${config.host}/${config.path}?${config.search_qs}=${searchValue}`
}
