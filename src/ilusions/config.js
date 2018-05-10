export default {
  protocol: process.env.ILUSION_PROTOCOL || 'http',
  host: process.env.ILUSION_HOST || 'dados.gov.br',
  path: process.env.ILUSION_PATH || 'dataset',
  search_qs: process.env.ILUSION_SEARCH_QS || 'q'
}
