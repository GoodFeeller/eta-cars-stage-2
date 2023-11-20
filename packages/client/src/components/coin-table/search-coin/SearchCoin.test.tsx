import { FunctionComponent, useState } from 'react'
import SearchCoin from './SearchCoin'
import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

const TestComponent: FunctionComponent = () => {
  const [search, setSearch] = useState<string>('')
  return (
    <div>
      <SearchCoin search={search} setSearch={setSearch} />
      <article>{search}</article>
    </div>
  )
}
describe('SearchCoin test', () => {
  test('Snapshot test', () => {
    render(<TestComponent />)
    const input = screen.queryByTestId('search')
    expect(input).toMatchSnapshot()
  })
  test('Snapshot `test` search test', async () => {
    await act(async () => render(<TestComponent />))
    const input = screen.queryByTestId('search') as HTMLInputElement
    userEvent.type(input, 'bitcoin')
    expect(input).toMatchSnapshot()
  })
  test('Input test', async () => {
    await act(async () => render(<TestComponent />))
    const input = screen.queryByTestId('search') as HTMLInputElement
    userEvent.type(input, 'bitcoin')
    const search = screen.queryByRole('article') as HTMLElement
    expect(input.value).toContain('bitcoin')
    expect(search.textContent).toContain('bitcoin')
  })
})
