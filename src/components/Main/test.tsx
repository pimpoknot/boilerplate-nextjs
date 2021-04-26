import { render, screen } from '@testing-library/react'
import Main from '.'

describe('<Main />', () => {
  it('render heading is OK', () => {
    const { container } = render(<Main />)

    expect(screen.getByRole('heading', { name: /test/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot
  })
})
