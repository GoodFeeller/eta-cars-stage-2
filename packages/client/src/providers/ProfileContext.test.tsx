import { render, screen } from "@testing-library/react"
import ProfileProvider from "./ProfileContext"

test('Profile context test', () => {
    render(<ProfileProvider ><div/></ProfileProvider>)
    const provider = screen.queryByTestId('provider')
    expect(provider).toMatchSnapshot()
})