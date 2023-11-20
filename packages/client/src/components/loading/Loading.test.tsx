import { render, screen } from '@testing-library/react'
import Loading from './Loading'
test('Loading snapshot test', () => {
  render(<Loading />)
  const load = screen.queryByRole('div')
  expect(load).toMatchSnapshot()
})
