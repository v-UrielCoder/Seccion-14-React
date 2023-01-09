
export const SearchMessage = ({ q = '', heroes = [] }) => {
  return (
    <>
      {
        ( q === '' )
          ? <div className="alert alert-primary animate__animated animate__fadeIn">Search a hero</div>
          : ( heroes.length === 0)
            && <div className="alert alert-danger animate__animated animate__fadeIn">No hero with <b>{ q }</b></div>
      }
    </>
  )
}
