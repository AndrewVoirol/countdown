import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from './app/page'
import Countdown from './components/Countdown'

describe('App', () => {
  it('renders', () => {
    render(<Home/>)
  })
  it('renders the title', ()=>{
    render(<Home/>)
    const title = screen.getByText('Hello, Next.js!')
    expect(title).toBeInTheDocument()
  })
})
describe('Countdown', () => {
    it('renders', () => {
        render(<Countdown targetDate={new Date()} />)
    })
    it('renders the title', () => {
        render(<Countdown targetDate={new Date()} />)
        const title = screen.getByText('Countdown')
        expect(title).toBeInTheDocument()
    })
})
describe('Button', () => {
    it('renders', () => {
        render(<Home/>)
        const button = screen.getByRole('button')
        expect(button).toBeInTheDocument()
    })
})
