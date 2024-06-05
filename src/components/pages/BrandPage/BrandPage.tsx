import { Link } from "react-router-dom"
import { BrandInfoType } from "../../../redux/brandsReducer"

type BrandPagePropsType = {
  brand: BrandInfoType
}

export const BrandPage = (props: BrandPagePropsType) => {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>{props.brand.title}</h2>
      <div
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          margin: "10px",
        }}
      >
        {props.brand.sneakers.map((s) => (
          <Link key={s.model} to={`/${props.brand.pagePath}/model/${s.id}`}>
            <img
              style={{ width: "300px", height: "300px", objectFit: "cover" }}
              src={s.picture}
              alt={s.model}
            />
          </Link>
        ))}
      </div>
      <p>{props.brand.contentText}</p>
    </div>
  )
}
