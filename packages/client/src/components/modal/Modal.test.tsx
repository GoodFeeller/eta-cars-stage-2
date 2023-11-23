import { render, screen } from '@testing-library/react'
import Modal from './Modal'
jest.mock('react')
describe('Modal testing', () => {
  test('Snapshot test', () => {
    render(
      <Modal>
        <div />
      </Modal>,
    )
    const modal = screen.findByTestId('modal')
    expect(modal).toMatchSnapshot()
  })
})
