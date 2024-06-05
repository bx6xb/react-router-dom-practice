import { Error404 } from "./components/pages/Error404"
import { Adidas } from "./components/pages/Adidas"
import { Puma } from "./components/pages/Puma"
import { Abibas } from "./components/pages/Abibas"
import styles from "./components/Site.module.css"
import { NavLink, Navigate, Route, Routes } from "react-router-dom"
import { Model } from "./components/pages/Model/Model"
import { BrandPageContainer } from "./components/pages/BrandPage/BrandPageContainer"
import { ModelContainer } from "./components/pages/Model/ModelContainer"
import { Prices } from "./components/pages/Prices"

const PATH = {
  ADIDAS: "/adidas",
  PUMA: "/puma",
  ABIBAS: "/abibas",
  PRICES: "/prices",
} as const

function App() {
  return (
    <div>
      <div className={styles.header}>
        <h1>HEADER</h1>
      </div>
      <div className={styles.body}>
        <ul className={styles.nav}>
          <li>
            <NavLink to={PATH.ADIDAS} className={({ isActive }) => (isActive ? styles.active : "")}>
              Adidas
            </NavLink>
          </li>
          <li>
            <NavLink to={PATH.PUMA} className={({ isActive }) => (isActive ? styles.active : "")}>
              Puma
            </NavLink>
          </li>
          <li>
            <NavLink to={PATH.ABIBAS} className={({ isActive }) => (isActive ? styles.active : "")}>
              Abibas
            </NavLink>
          </li>
          <li>
            <NavLink to={PATH.PRICES} className={({ isActive }) => (isActive ? styles.active : "")}>
              Prices
            </NavLink>
          </li>
        </ul>
        <div className={styles.content}>
          <Routes>
            <Route path="/" element={<Navigate to={`${PATH.ADIDAS}/`} />} />

            <Route path="/:brand" element={<BrandPageContainer />} />
            <Route path="/:brand/model/:id" element={<ModelContainer />} />
            <Route path={PATH.PRICES} element={<Prices />} />

            <Route path="/*" element={<Error404 />} />
          </Routes>
        </div>
      </div>
      <div className={styles.footer}>abibas {new Date().getFullYear()}</div>
    </div>
  )
}

export default App
