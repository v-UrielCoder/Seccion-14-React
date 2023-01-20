import { authReducer } from "../../../src/auth/context/authReducer"
import { types } from "../../../src/auth/types/types";

describe('Pruebas en authReducer', () => {

  const initState = {
    logged: false,
    user: ''
  }

  test('debe de retornar el estado por defecto', () => {
    const state = authReducer( initState );

    expect( state ).toEqual( initState )

  })

  test('debe de llamar el login y autentificar y establecer el user', () => {
    const action = {type: types.login, payload: 'Uriel' }
    const state = authReducer( initState, action )

    expect( state.logged ).toBe( true );
    expect( state.user ).toBe( 'Uriel' );
    
  })

  test('debe de borrar el name del usuario y logged en false', () => {
    const action = {type: types.login, payload: 'Uriel' }
    authReducer( initState, action )

    const actionLogout = {type: types.logout}
    const stateLogout = authReducer( initState, actionLogout )

    expect( stateLogout ).toEqual( {
      logged: false
    })
    

  })
})