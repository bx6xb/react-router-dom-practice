import { Link, useParams } from "react-router-dom"
import { useAppSelector } from "../../../redux/store"

export const BrandPage = () => {
  const params = useParams<ParamsType>()

  const brand = useAppSelector((state) =>
    state.brands.find((brand) => brand.pagePath === params.brand)
  )

  return brand ? (
    <div>
      <h2 style={{ textAlign: "center" }}>{brand.title}</h2>
      <div
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          margin: "10px",
        }}
      >
        {brand.sneakers.map((s) => (
          <Link key={s.model} to={`/${brand.pagePath}/model/${s.id}`}>
            <img
              style={{ width: "300px", height: "300px", objectFit: "cover" }}
              src={s.picture}
              alt={s.model}
            />
          </Link>
        ))}
      </div>
      <p>{brand.contentText}</p>
    </div>
  ) : (
    <h2>Brand not found</h2>
  )
}

// types
type ParamsType = {
  brand: string
}
