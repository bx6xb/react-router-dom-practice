import { useParams } from "react-router-dom"
import { Model } from "./Model"
import { useSelector } from "react-redux"
import { AppRootStateType } from "../../../redux/store"

type ModelParams = {
  brand: string
  id: string
}

export const ModelContainer = () => {
  const params = useParams<ModelParams>()
  const state = useSelector((state: AppRootStateType) => state.brands)

  const sneakerModel = state
    .find((b) => b.pagePath === params.brand)
    ?.sneakers.find((s) => s.id.toString() === params.id)!

  return <Model sneakerModel={sneakerModel} />
}
