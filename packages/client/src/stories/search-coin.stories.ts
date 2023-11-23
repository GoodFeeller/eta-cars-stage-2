import { Meta, StoryObj } from '@storybook/react'
import SearchCoin from '../components/coin-table/search-coin/SearchCoin'
const meta: Meta<typeof SearchCoin> = {
  component: SearchCoin,
}

export default meta
type Story = StoryObj<typeof SearchCoin>
export const Empty: Story = {
  args: {
    search: '',
    setSearch: () => null,
  },
}
export const WithText: Story = {
  args: {
    search: 'bitcoin',
    setSearch: () => null,
  },
}
