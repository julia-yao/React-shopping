import { useRouteError,Link } from "react-router-dom"

export default function MealError() {
    const error = useRouteError()

  return (
    <div className="MealError d-flex justify-content-center py-5">
      <div>
        <h2>發生錯誤</h2>
        <p>{error.message}</p>
        <p>回首頁<Link to="/">Sara's Lunch</Link>...</p>
      </div>
    </div>
  )
}
