import { fireEvent, render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { AuthContext } from "../../../src/auth/context"
import { Navbar } from "../../../src/ui/components/NavBar"

const mockUsedNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
  ...jest.requireActual(),
  useNavigate: () => mockUsedNavigate
}));

describe('pruebas en el NavBar', () => { 

  test('debe de mostrar el nombre del usuario', () => { 
    
    const contextValue = {
      logged: true,
      user: {
        id: 'abc',
        name: 'Uriel'
      }
    }

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/marvel']}>
          <Navbar/>
        </MemoryRouter>
      </AuthContext.Provider>  
    )

    expect( screen.getByText('Uriel') ).toBeTruthy()

  })

  test('debe de llamar el logout y e navigate cunado se hace click en el boton de logout', () => {
    const contextValue = {
      logout: jest.fn() ,
      logged: true,
      user: {
        id: 'abc',
        name: 'Uriel'
      }
    }

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <Navbar/>
        </MemoryRouter>
      </AuthContext.Provider>  
    )

    const buttonItem = screen.getByRole('button')

    fireEvent.click(buttonItem)

    expect( contextValue.logout ).toHaveBeenCalled()
    expect( mockUsedNavigate ).toHaveBeenCalledWith('/login', {'replace': true})
  })
})