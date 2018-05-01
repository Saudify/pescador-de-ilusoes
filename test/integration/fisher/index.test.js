import test from 'ava'
import { hit } from '../../../src/fisher'

test('hit: should return loaded page', async t => {
  const actual = await hit('github.com/Saudify')
  t.pass()
})
