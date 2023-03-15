import { useSearchParams } from "react-router-dom"

const Company = () => {
  const [search, setSearch] = useSearchParams()
  console.log(search.get("search"))
  return (
    <>
      <h1>
        Company {search.get("search")} City : {search.get("city")}
      </h1>
      <input
        type="text"
        onChange={(e) => {
          setSearch({ search: search.get("search"), city: e.target.value })
        }}
      />
    </>
  )
}

export default Company
