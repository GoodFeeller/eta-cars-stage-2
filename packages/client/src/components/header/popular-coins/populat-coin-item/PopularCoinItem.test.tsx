import { ICoin } from '../../../../types/ICoin'
import { render, screen } from '@testing-library/react'
import PopularCoinItem from './PopularCoinItem'
import { BrowserRouter, useNavigate } from 'react-router-dom'
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

describe('PopularCoinItem test', () => {
  test('PopularCoinItem snapshot test', () => {
    render(
      <BrowserRouter>
        <PopularCoinItem coin={coin} />
      </BrowserRouter>,
    )
    const coinItem = screen.getByTestId('coin-item')
    expect(coinItem).toMatchSnapshot()
  })

  test('Img must have src assets/icons/btc@2x.png', () => {
    render(
      <BrowserRouter>
        <PopularCoinItem coin={coin} />
      </BrowserRouter>,
    )
    const img = screen.queryByRole('img') as HTMLImageElement
    expect(img.src).toContain(
      'https://assets.coincap.io/assets/icons/btc@2x.png',
    )
  })

  test('Onclick must call navigate to /coin/bitcoin', () => {
    render(
      <BrowserRouter>
        <PopularCoinItem coin={coin} />
      </BrowserRouter>,
    )
    const coinItem = screen.getByTestId('coin-item')
    userEvent.click(coinItem)
    expect(window.location.href).toBe('http://localhost/coin/bitcoin')
  })
})
