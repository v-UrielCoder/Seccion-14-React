import { getHerosByPublisher } from '../helpers'

export const HeroList = ({ publisher }) => {

  const heroes = getHerosByPublisher( publisher )

  return (
    <>
      <ul>
        { heroes.map( hero => (
            <li key={hero.superhero}>{ hero.superhero }</li>
        ))}
      </ul>

    </>
  )
}
