import { render, screen } from '@testing-library/react'
import CoinInfoTitle from './CoinInfoTitle'
import { BrowserRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'

describe('CoinInfoTitle test', () => {
  test('Snapshot test', () => {
    render(
      <BrowserRouter>
        <CoinInfoTitle />
      </BrowserRouter>,
    )
    const title = screen.queryByTestId('title')
    expect(title).toMatchSnapshot()
  })
  test('Link test, url must be localhost/', () => {
    render(
      <BrowserRouter>
        <CoinInfoTitle />
      </BrowserRouter>,
    )
    const link = screen.queryByText('Back') as HTMLElement
    userEvent.click(link)
    expect(document.location.href).toContain('http://localhost/')
  })
})
