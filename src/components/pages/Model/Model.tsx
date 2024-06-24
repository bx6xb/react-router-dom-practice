import { useParams } from "react-router-dom"
import { useAppSelector } from "../../../redux/store"

export const Model = () => {
  const params = useParams<ModelParams>()
  const state = useAppSelector((state) => state.brands)

  const sneakerModel = state
    .find((b) => b.pagePath === params.brand)
    ?.sneakers.find((s) => s.id.toString() === params.id)!

  return (
    <div>
      <div
        style={{
          textAlign: "center",
          display: "flex",
          gap: "10px",
          margin: "20px",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2>{sneakerModel.model}</h2>
        <h3>Price {sneakerModel.price}</h3>
        <img
          style={{ width: "300px", height: "300px", objectFit: "cover" }}
          src={sneakerModel.picture}
          alt={sneakerModel.model}
        />
      </div>
    </div>
  )
}

// types
type ModelParams = {
  brand: string
  id: string
}
