import React from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { getHeroById } from '../helpers';

export const Hero = () => {

  const { id } = useParams();

  const hero = getHeroById( id );

  if( !hero ){
    return <Navigate to={'/marvel'} />
  }

  return (
    <>
      <h1>{hero.superhero}</h1>
    </>
  )
}
