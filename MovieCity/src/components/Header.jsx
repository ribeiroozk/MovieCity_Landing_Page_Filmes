import { useState } from 'react'

const links = [
  { label: 'Filmes', href: '#filmes' },
  { label: 'Categoria', href: '#categoria' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="header">
      <a className="logo" href="#topo" aria-label="MovieCity - início" onClick={closeMenu}>
        MovieCity
      </a>

      <nav className={`navigation ${menuOpen ? 'open' : ''}`} aria-label="Navegação principal">
        <ul>
          {links.map((link) => (
            <li key={link.label}>
              <a href={link.href} onClick={closeMenu}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="header-actions">
        <button className="button button-login" type="button">Login</button>
        <button
          className={`menu-toggle ${menuOpen ? 'active' : ''}`}
          type="button"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((previous) => !previous)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
