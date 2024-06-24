import { ProtectedRoute } from "../routes/ProtectedRoute"

export const ProtectedPage = ProtectedRoute(() => {
  return <div>Protected page</div>
})
