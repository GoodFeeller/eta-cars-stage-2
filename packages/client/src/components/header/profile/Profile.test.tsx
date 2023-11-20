import { render, screen } from '@testing-library/react'
import Profile from './Profile'
import useProfile from '../../../hooks/useProfile'
import { IProfileTotal } from '../../../service/ProfileTypes'

describe('Profile tests', () => {
  test('Full negative profile snapshot', () => {
    const profile: IProfileTotal = {
      totalPrice: 10000,
      id: ['bitcoin'],
    }
    const nowPrice = 9000
    jest.mock('../../../hooks/useProfile', () => {
      const original = jest.requireActual('../../../hooks/useProfile')
      return {
        __esModule: true,
        ...original,
        default: () => {
          return { profile, nowPrice }
        },
      }
    })
    render(<Profile />)
    const profileBox = screen.getByTestId('profile')
    expect(profileBox).toMatchSnapshot()
  })
  test('Full positive profile snapshot', () => {
    const profile: IProfileTotal = {
      totalPrice: 10000,
      id: ['bitcoin'],
    }
    const nowPrice = 11000
    jest.mock('../../../hooks/useProfile', () => {
      const original = jest.requireActual('../../../hooks/useProfile')
      return {
        __esModule: true,
        ...original,
        default: () => {
          return { profile, nowPrice }
        },
      }
    })
    render(<Profile />)
    const profileBox = screen.getByTestId('profile')
    expect(profileBox).toMatchSnapshot()
  })
  test('Empty profile snapshot', () => {
    const profile: IProfileTotal = {
      totalPrice: 0,
      id: [],
    }
    const nowPrice = 0
    jest.mock('../../../hooks/useProfile', () => {
      const original = jest.requireActual('../../../hooks/useProfile')
      return {
        __esModule: true,
        ...original,
        default: () => {
          return { profile, nowPrice }
        },
      }
    })
    render(<Profile />)
    const profileBox = screen.getByTestId('profile')
    expect(profileBox).toMatchSnapshot()
  })
})
