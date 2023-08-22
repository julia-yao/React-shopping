import { useRouteError,Link } from "react-router-dom"

export default function MealError() {
    const error = useRouteError()

  return (
    <div className="MealError mx-auto">
        <h2>發生錯誤</h2>
        <p>{error.message}</p>
        <Link to="/">回到首頁。</Link>
    </div>
  )
}
