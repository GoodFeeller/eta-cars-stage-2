import { render, screen } from '@testing-library/react'
import Modal from './Modal'
import userEvent from '@testing-library/user-event'
const setCoin = jest.fn((_a: any) => null)
const setShow = jest.fn((_a: any) => null)

jest.mock('react', () => {
  const actual = jest.requireActual('react')
  return {
    __esModule: true,
    ...actual,
    useContext: () => {return {
      setCoin,
      setShow
    }
  }
}})
describe('Modal testing', () => {
  test('Snapshot test', () => {
    render(
      <Modal>
        <div />
      </Modal>,
    )
    const modal = screen.queryByTestId('modal')
    expect(modal).toMatchSnapshot()
  })
  test('Context test', () => {
    render(
      <Modal>
        <div />
      </Modal>,
    )
    const modal = screen.queryByTestId('modal') as HTMLElement
    userEvent.click(modal)
    expect(setCoin).toHaveBeenCalled()
    expect(setShow).toHaveBeenCalled()
  })
})
