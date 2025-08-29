import { useState } from "react"

const articlesList = [
  `pantofole`,
  `spazzolino`,
  `dentifricio`,
  `pigiama`,
  `libro`
]

console.log(articlesList)

const ArticlesList = () => {

  const [articles, setArticles] = useState(articlesList)
  const [newArticle, setNewArticle] = useState('')

  const addArticle = e => {
    e.preventDefault()
    setArticles([...articles, newArticle])
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <h2 className="text-center m-5">Articoli da viaggio</h2>
          <ol className="list-group list-group-numbered border border-primary">
            {articlesList.map(art => {
              return <li className="list-group-item border border-primary">
                {art}
              </li>
            })}
          </ol>
          <form onSubmit={addArticle}>
            <input
              type="text"
              value={newArticle}
              onChange={e => { setNewArticle(e.target.value) }}
            />
            <button type="submit" class="btn btn-success">Aggiungi</button>
          </form>
        </div>
      </div>
    </div>

  )
}

export default ArticlesList


