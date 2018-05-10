export default {
  host: process.env.ILUSION_HOST || 'http://dados.gov.br',
  path: process.env.ILUSION_PATH || 'dataset',
  search_qs: process.env.ILUSION_SEARCH_QS || 'q'
}
