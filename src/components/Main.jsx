import afterlife from '../assets/afterlife.jpg'
import transformers from '../assets/transformers.jpg'
import mowgli from '../assets/mowgli.jpg'
import shift from '../assets/shift.png'
import squidgame from '../assets/squidgame.webp'
import harrypotter from '../assets/harrypotter.jpg'

const movies = [
  { title: 'Afterlife', image: afterlife },
  { title: 'Transformers', image: transformers },
  { title: 'Mowgli', image: mowgli },
  { title: 'Shift', image: shift },
  { title: 'Round 6', image: squidgame },
  { title: 'Harry Potter', image: harrypotter },
]

export default function Main() {
  const scrollToMovies = () => document.querySelector('#filmes')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <main className="main" id="topo">
      <section className="hero-copy" aria-labelledby="hero-title">
        <p className="eyebrow">A sua próxima sessão começa aqui</p>
        <h1 id="hero-title">Seus Filmes</h1>
        <p className="description">
          Aqui, você pode escolher o filme que deseja assistir.<br className="desktop-break" />
          Caso queira escolher mais, clique no botão.
        </p>
        <button className="button button-more" type="button" onClick={scrollToMovies}>
          Mais <span aria-hidden="true">→</span>
        </button>
      </section>

      <section className="cards" id="filmes" aria-label="Filmes em destaque">
        {movies.map((movie) => (
          <article className="card" key={movie.title}>
            <img src={movie.image} alt={`Pôster do filme ${movie.title}`} />
            <div className="card-overlay"><span>{movie.title}</span><span aria-hidden="true">↗</span></div>
          </article>
        ))}
      </section>
    </main>
  )
}
