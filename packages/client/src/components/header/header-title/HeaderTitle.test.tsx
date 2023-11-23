import { render, screen } from '@testing-library/react'
import HeaderTitle from './HeaderTitle.tsx'
test('HeaderTitle snapshot test', () => {
  render(<HeaderTitle />)
  const title = screen.queryAllByRole('div')
  expect(title).toMatchSnapshot()
})
