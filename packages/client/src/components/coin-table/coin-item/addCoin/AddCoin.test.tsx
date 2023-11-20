import { render, screen, act } from '@testing-library/react'
import AddCoin from './AddCoin'
import { ICoin } from '../../../../types/ICoin'
import { AddContext } from '../../../../providers/AddContext'
import { FunctionComponent, PropsWithChildren, useState } from 'react'
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

const TestComponent: FunctionComponent<PropsWithChildren<unknown>> = ({
  children,
}) => {
  const [coin, setCoin] = useState<ICoin | null>(null)
  return (
    <AddContext.Provider value={{ coin, setCoin }}>
      {coin ? <article>{coin.id}</article> : <></>}
      {children}
    </AddContext.Provider>
  )
}
describe('AddCoin test', () => {
  test('Snapshot test', () => {
    render(<AddCoin coin={coin} />)
    const btn = screen.queryByText('ADD')
    expect(btn).toMatchSnapshot()
  })
  test('Context test', async () => {
    await act(async () => {
      return render(
        <TestComponent>
          <AddCoin coin={coin} />
        </TestComponent>,
      )
    })
    const btn = screen.queryByRole('button') as HTMLButtonElement
    userEvent.click(btn)
    const coinID = screen.queryByRole('article') as HTMLElement
    expect(coinID.textContent).toContain('bitcoin')
  })
})
