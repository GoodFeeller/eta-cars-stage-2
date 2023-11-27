import { render, screen } from "@testing-library/react"
import ProfileInfo from "./ProfileInfo"

describe('Profile info test', () => {
    test('Text must be black snapshot', () => {
        render(<ProfileInfo nowPrice={100} oldPrice={100}/>)
        const info = screen.queryAllByTestId('profile-info')
        expect(info).toMatchSnapshot()
    })
    test('Text must be red snapshot', () => {
        render(<ProfileInfo nowPrice={50} oldPrice={100}/>)
        const info = screen.queryAllByTestId('profile-info')
        expect(info).toMatchSnapshot()
    })
    test('Text must be green snapshot', () => {
        render(<ProfileInfo nowPrice={150} oldPrice={100}/>)
        const info = screen.queryAllByTestId('profile-info')
        expect(info).toMatchSnapshot()
    })
})