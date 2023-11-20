import { FunctionComponent, useState } from 'react'
import { intervalType } from '../../../hooks/useHistory'
import ChartParams from './ChartParams'
import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import styles from '../Chart.module.scss'

const TestComponent: FunctionComponent<{ initialState: intervalType }> = ({
  initialState,
}) => {
  const [interval, setNewInterval] = useState<intervalType>(initialState)
  return <ChartParams interval={interval} setNewInterval={setNewInterval} />
}

describe('ChartParams testing', () => {
  test('Snapshot test', async () => {
    render(<TestComponent initialState="m1" />)
    const params = screen.queryByTestId('params')
    expect(params).toMatchSnapshot()
  })
  test('Interval must be m1', async () => {
    await act(async () => render(<TestComponent initialState="m15" />))
    const m1 = screen.queryByText('1 Day') as HTMLSpanElement
    userEvent.click(m1)
    expect(m1.classList.contains(styles.chosenParam)).toBe(true)
  })
  test('Interval must be m1', async () => {
    await act(async () => render(<TestComponent initialState="m1" />))
    const m1 = screen.queryByText('1 Day') as HTMLSpanElement
    userEvent.click(m1)
    expect(m1.classList.contains(styles.chosenParam)).toBe(true)
  })
  test('Interval must be h1', async () => {
    await act(async () => render(<TestComponent initialState="m1" />))
    const h1 = screen.queryByText('1 Month') as HTMLSpanElement
    userEvent.click(h1)
    expect(h1.classList.contains(styles.chosenParam)).toBe(true)
  })
  test('Interval must be d1', async () => {
    await act(async () => render(<TestComponent initialState="m1" />))
    const d1 = screen.queryByText('1 Year') as HTMLSpanElement
    userEvent.click(d1)
    expect(d1.classList.contains(styles.chosenParam)).toBe(true)
  })
})
