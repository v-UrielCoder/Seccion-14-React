import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../src/auth";
import { PrivateRoute } from "../../src/router/PrivateRoute";

describe('pruebas en el privateRoute', () => {

  test('debe de mostrar el children si esta autenticado', () => {

    Storage.prototype.setItem = jest.fn();

    const contextValue = {
      logged: true,
      user: {
        id: 'abv',
        name: 'juan'
      }
    }
    render (
      <AuthContext.Provider value={contextValue} >
        <MemoryRouter>
        <PrivateRoute>
          <h1>Ruta privada</h1>
        </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    )

    expect( screen.getByText('Ruta privada') ).toBeTruthy();
    expect( localStorage.setItem ).toHaveBeenCalledWith('lastPath', '/');
  })
})