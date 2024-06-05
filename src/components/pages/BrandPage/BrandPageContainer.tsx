import { useSelector } from "react-redux"
import { BrandPage } from "./BrandPage"
import { AppRootStateType } from "../../../redux/store"
import { useParams } from "react-router-dom"

type ParamsType = {
  brand: string
}

export const BrandPageContainer = () => {
  const params = useParams<ParamsType>()

  const brand = useSelector((state: AppRootStateType) =>
    state.brands.find((brand) => brand.pagePath === params.brand)
  )

  return <>{brand ? <BrandPage brand={brand} /> : <h2>Brand don't found</h2>}</>
}
