import { ICoin } from '../../../types/ICoin.ts'
import { act, render, screen } from '@testing-library/react'
import PopularCoins from './PopularCoins.tsx'
const coins: ICoin[] = [
  {
    rank: '1',
    symbol: 'BTC',
    name: 'Bitcoin',
    id: 'bitcoin',
    priceUsd: '21000.2313125256326',
    maxSupply: '1000000.223',
    supply: '141312',
    marketCapUsd: '32131412123.231242412321',
    changePercent24Hr: '0.24',
  },
  {
    rank: '2',
    symbol: 'LTC',
    name: 'Litecoin',
    id: 'litecoin',
    priceUsd: '21000.2313125256326',
    maxSupply: '1000000.223',
    supply: '141312',
    marketCapUsd: '32131412123.231242412321',
    changePercent24Hr: '0.24',
  },
  {
    rank: '3',
    symbol: 'DGC',
    name: 'DogyCoin',
    id: 'asfaw',
    priceUsd: '21000.2313125256326',
    maxSupply: '1000000.223',
    supply: '141312',
    marketCapUsd: '32131412123.231242412321',
    changePercent24Hr: '0.24',
  },
]
jest.mock('../../../service/PopularCoinService', () => {
  const original = jest.requireActual('../../../service/PopularCoinService')
  return {
    __esModule: true,
    ...original,
    default: {
      getCoins: async () => coins,
    },
  }
})
jest.mock('react-router-dom')
describe('PopularCoins testing', () => {
  test('Coins must be in document', async () => {
    await act(async () => render(<PopularCoins />))
    const btc = screen.queryByText('BTC') as HTMLSpanElement
    const ltc = screen.queryByText('LTC') as HTMLSpanElement
    const dgc = screen.queryByText('DGC') as HTMLSpanElement
    expect(btc.textContent).toContain('BTC')
    expect(ltc.textContent).toContain('LTC')
    expect(dgc.textContent).toContain('DGC')
  })
  test('Snapshot test', async () => {
    await act(async () => render(<PopularCoins />))
    const coin = screen.getByTestId('popular-coins')
    expect(coin).toMatchSnapshot()
  })
})
