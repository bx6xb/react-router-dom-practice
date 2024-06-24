import { ComponentType } from "react"
import { Navigate } from "react-router-dom"

export function ProtectedRoute<T extends {}>(Component: ComponentType<T>) {
  return (props: T) => {
    const isAuth = false
    return isAuth ? <Component {...props} /> : <Navigate to={"error"} />
  }
}
