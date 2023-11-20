import { render, screen } from '@testing-library/react'
import { ICoin } from '../../types/ICoin'
import CoinTextInfo from './CoinTextInfo'

const coin: ICoin = {
  rank: '1',
  symbol: 'BTC',
  name: 'Bitcoin',
  id: 'bitcoin',
  priceUsd: '21000.2313125256326',
  maxSupply: '1000000.223',
  supply: '141312',
  marketCapUsd: '32131412123.231242412321',
  changePercent24Hr: '0.24',
}
test('CoinTextInfo snapshot test', () => {
  render(<CoinTextInfo coin={coin} />)
  const info = screen.queryByTestId('info')
  expect(info).toMatchSnapshot()
})
