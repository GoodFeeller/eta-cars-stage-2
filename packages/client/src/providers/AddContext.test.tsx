import { render, screen } from "@testing-library/react"
import AddProvider from "./AddContext"

test('Profile context test', () => {
    render(<AddProvider ><div/></AddProvider>)
    const provider = screen.queryByTestId('provider')
    expect(provider).toMatchSnapshot()
})