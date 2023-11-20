import { render, screen } from '@testing-library/react'
import CoinItem from './CoinItem'
import { ICoin } from '../../../types/ICoin'
import { BrowserRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
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
const emtyCoin: ICoin = {
  rank: '1',
  symbol: 'BTC',
  name: 'Bitcoin',
  id: 'bitcoin',
  priceUsd: '0.0313125256326',
  maxSupply: '1000000.223',
  supply: '141312',
  marketCapUsd: '0.001242412321',
  changePercent24Hr: '0.24',
}
describe('CoinItem test', () => {
  test('Default item snapshot', () => {
    render(
      <BrowserRouter>
        <table>
          <tbody>
            <CoinItem item={coin} />
          </tbody>
        </table>
      </BrowserRouter>,
    )
    const tr = screen.queryByTestId('tr')
    expect(tr).toMatchSnapshot()
  })
  test('Empty item test', () => {
    render(
      <BrowserRouter>
        <table>
          <tbody>
            <CoinItem item={emtyCoin} />
          </tbody>
        </table>
      </BrowserRouter>,
    )
    const tr = screen.queryByTestId('tr')
    expect(tr).toBeNull()
  })
  test('Navigate test, must be http://localhost/con/bitcoin', () => {
    render(
      <BrowserRouter>
        <table>
          <tbody>
            <CoinItem item={coin} />
          </tbody>
        </table>
      </BrowserRouter>,
    )
    const tr = screen.queryByTestId('tr') as HTMLElement
    userEvent.click(tr)
    expect(document.location.href).toContain('http://localhost/coin/bitcoin')
  })
})
