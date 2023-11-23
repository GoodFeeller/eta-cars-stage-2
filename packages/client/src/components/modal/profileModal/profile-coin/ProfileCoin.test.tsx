import { render, screen } from '@testing-library/react'
import { IProfileCoin, IProfileTotal } from '../../../../service/ProfileTypes'
import ProfileCoin from './ProfileCoin.tsx'
import userEvent from '@testing-library/user-event'

const coin: IProfileCoin = {
  id: 'bitcoin',
  totalPrice: 20000,
  count: 3,
  symbol: 'BTC',
}
describe('Profile coin test', () => {
  test('Full page snapshot', () => {
    render(<ProfileCoin coin={coin} />)
    const profile = screen.queryByTestId('profile-coin')
    expect(profile).toMatchSnapshot()
  })
  test('Remove test', () => {
    render(<ProfileCoin coin={coin} />)
    localStorage.clear()
    localStorage.setItem('bitcoin', JSON.stringify(coin))
    localStorage.setItem(
      '//profile//',
      JSON.stringify({
        id: ['bitcoin', 'litecoin'],
        totalPrice: 30000,
      }),
    )
    const btn = screen.queryByText('remove') as HTMLButtonElement
    userEvent.click(btn)
    const bitcoin = localStorage.getItem('bitcoin')
    const profile = localStorage.getItem('//profile//')
    if (profile) {
      const profileObj: IProfileTotal = JSON.parse(profile)
      expect(profileObj.id).toEqual(['litecoin'])
      expect(profileObj.totalPrice).toBe(10000)
    } else expect(false).toBe(true)
    expect(bitcoin).toBeNull()
  })
})
