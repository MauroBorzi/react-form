const articlesList = [
  {
    id: 1,
    title: `pantofole`
  },
  {
    id: 2,
    title: `spazzolino`
  },
  {
    id: 3,
    title: `dentifricio`
  },
  {
    id: 4,
    title: `pigiama`
  },
  {
    id: 5,
    title: `libro`
  }
]

console.log(articlesList)

const ArticlesList = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <h2 className="text-center m-5">Articoli da viaggio</h2>
          <ol className="list-group list-group-numbered border border-primary">
            {articlesList.map(art => {
              return <li className="list-group-item border border-primary"
                key={art.id}>
                {art.title}
              </li>
            })}
          </ol>
        </div>
      </div>
    </div>

  )
}

export default ArticlesList


