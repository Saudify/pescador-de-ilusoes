import test from 'ava'
import { mountSearchUrl } from '../../../src/ilusions/url'

test('mountSearchUrl: should mount url for search page', t => {
  const actual = mountSearchUrl('upa')
  const expected = 'http://dados.gov.br/dataset?q=upa'
  t.is(actual, expected)
})
