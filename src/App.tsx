import { Link, useNavigate } from "react-router-dom"
import styles from "./components/Site.module.css"
import { NavLink, Outlet } from "react-router-dom"

const links = [
  {
    name: "Adidas",
    path: "/adidas",
  },
  {
    name: "Puma",
    path: "/puma",
  },
  {
    name: "Abibas",
    path: "/abibas",
  },
  {
    name: "Prices",
    path: "/prices",
  },
  {
    name: "Protected page",
    path: "/protected-page",
  },
]

function App() {
  const navigate = useNavigate()
  const navigateHandler = () => navigate(-1)

  const mappedLinks = links.map(({ name, path }) => (
    <li>
      <NavLink to={path} className={({ isActive }) => (isActive ? styles.active : "")}>
        {name}
      </NavLink>
    </li>
  ))

  return (
    <div>
      <div className={styles.header}>
        <h1>HEADER</h1>
      </div>
      <div className={styles.body}>
        <ul className={styles.nav}>{mappedLinks}</ul>
        <div className={styles.content}>
          <div className="buttonsWrapper">
            <Link to={"adidas"} className="mainMenuBtn">
              Main menu
            </Link>
            <button onClick={navigateHandler} className="mainMenuBtn">
              Prev
            </button>
          </div>
          <Outlet />
        </div>
      </div>
      <div className={styles.footer}>abibas {new Date().getFullYear()}</div>
    </div>
  )
}

export default App
