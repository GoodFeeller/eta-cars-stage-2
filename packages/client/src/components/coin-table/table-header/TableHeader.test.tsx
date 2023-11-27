import { FunctionComponent, useState } from 'react'
import { sortType } from '../../../hooks/useSortCoins'
import TableHeader from './TableHeader'
import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

const TestComponent: FunctionComponent<{ initialState: sortType }> = ({
  initialState,
}) => {
  const [sort, setSort] = useState<sortType>(initialState)
  return (
    <>
      <article data-testid="property">{sort.property}</article>
      <article data-testid="to">{sort.to}</article>
      <table>
        <TableHeader sort={sort} setSort={setSort} />
      </table>
    </>
  )
}
describe('TableHeader test', () => {
  test('Rank test up', async () => {
    await act(async () =>
      render(
        <TestComponent initialState={{ property: 'priceUsd', to: 'down' }} />,
      ),
    )
    const prop = screen.queryByText('#') as HTMLElement
    userEvent.click(prop)
    const property = screen.queryByTestId('property') as HTMLElement
    const to = screen.queryByTestId('to') as HTMLElement
    const head = screen.queryAllByTestId('thead')
    expect(property.textContent).toContain('rank')
    expect(to.textContent).toContain('up')
    expect(head).toMatchSnapshot()
  })
  test('Rank test down', async () => {
    await act(async () =>
      render(
        <TestComponent initialState={{ property: 'priceUsd', to: 'down' }} />,
      ),
    )
    const prop = screen.queryByText('#') as HTMLElement
    userEvent.click(prop)
    userEvent.click(prop)
    const property = screen.queryByTestId('property') as HTMLElement
    const to = screen.queryByTestId('to') as HTMLElement
    const head = screen.queryAllByTestId('thead')
    expect(property.textContent).toContain('rank')
    expect(to.textContent).toContain('down')
    expect(head).toMatchSnapshot()
  })
  test('PriceUsd test up', async () => {
    await act(async () =>
      render(<TestComponent initialState={{ property: 'rank', to: 'down' }} />),
    )
    const prop = screen.queryByText('Price') as HTMLElement
    userEvent.click(prop)
    const property = screen.queryByTestId('property') as HTMLElement
    const to = screen.queryByTestId('to') as HTMLElement
    const head = screen.queryAllByTestId('thead')
    expect(property.textContent).toContain('priceUsd')
    expect(to.textContent).toContain('up')
    expect(head).toMatchSnapshot()
    userEvent.click(prop)
    userEvent.click(prop)
    expect(to.textContent).toContain('up')
  })
  test('PriceUsd test down', async () => {
    await act(async () =>
      render(<TestComponent initialState={{ property: 'rank', to: 'down' }} />),
    )
    const prop = screen.queryByText('Price') as HTMLElement
    userEvent.click(prop)
    userEvent.click(prop)
    const property = screen.queryByTestId('property') as HTMLElement
    const to = screen.queryByTestId('to') as HTMLElement
    const head = screen.queryAllByTestId('thead')
    expect(property.textContent).toContain('priceUsd')
    expect(to.textContent).toContain('down')
    expect(head).toMatchSnapshot()
  })
  test('marketCapUsd test up', async () => {
    await act(async () =>
      render(<TestComponent initialState={{ property: 'rank', to: 'down' }} />),
    )
    const prop = screen.queryByText('Market Cap') as HTMLElement
    userEvent.click(prop)
    const property = screen.queryByTestId('property') as HTMLElement
    const to = screen.queryByTestId('to') as HTMLElement
    const head = screen.queryAllByTestId('thead')
    expect(property.textContent).toContain('marketCapUsd')
    expect(to.textContent).toContain('up')
    expect(head).toMatchSnapshot()
  })
  test('marketCapUsd test down', async () => {
    await act(async () =>
      render(<TestComponent initialState={{ property: 'rank', to: 'down' }} />),
    )
    const prop = screen.queryByText('Market Cap') as HTMLElement
    userEvent.click(prop)
    userEvent.click(prop)
    const property = screen.queryByTestId('property') as HTMLElement
    const to = screen.queryByTestId('to') as HTMLElement
    const head = screen.queryAllByTestId('thead')
    expect(property.textContent).toContain('marketCapUsd')
    expect(to.textContent).toContain('down')
    expect(head).toMatchSnapshot()
  })
  test('changePercent24Hr test up', async () => {
    await act(async () =>
      render(<TestComponent initialState={{ property: 'rank', to: 'down' }} />),
    )
    const prop = screen.queryByText('24h%') as HTMLElement
    userEvent.click(prop)
    const property = screen.queryByTestId('property') as HTMLElement
    const to = screen.queryByTestId('to') as HTMLElement
    const head = screen.queryAllByTestId('thead')
    expect(property.textContent).toContain('changePercent24Hr')
    expect(to.textContent).toContain('up')
    expect(head).toMatchSnapshot()
  })
  test('changePercent24Hr test down', async () => {
    await act(async () =>
      render(<TestComponent initialState={{ property: 'rank', to: 'down' }} />),
    )
    const prop = screen.queryByText('24h%') as HTMLElement
    userEvent.click(prop)
    userEvent.click(prop)
    const property = screen.queryByTestId('property') as HTMLElement
    const to = screen.queryByTestId('to') as HTMLElement
    const head = screen.queryAllByTestId('thead')
    expect(property.textContent).toContain('changePercent24Hr')
    expect(to.textContent).toContain('down')
    expect(head).toMatchSnapshot()
  })
})
