import { SneakersItem } from "../../../redux/brandsReducer"

type ModelPropsType = {
  sneakerModel: SneakersItem
}

export const Model = (props: ModelPropsType) => {
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
        <h2>{props.sneakerModel.model}</h2>
        <h3>Price {props.sneakerModel.price}</h3>
        <img
          style={{ width: "300px", height: "300px", objectFit: "cover" }}
          src={props.sneakerModel.picture}
          alt={props.sneakerModel.model}
        />
      </div>
    </div>
  )
}
