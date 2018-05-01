import test from 'ava'
import { hit } from '../../../src/fisher'

test('hit: should return loaded page with cheerio', async t => {
  const $ = await hit('github.com/Saudify')
  const actual = $('h1.org-name.lh-condensed').text().trim()
  const expected = 'Saudify'
  t.is(actual, expected)
})
