import { useState } from "react"

const articlesList = [
  `pantofole`,
  `spazzolino`,
  `dentifricio`,
  `pigiama`,
  `libro`
]

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
            {articles.map((item, index) => {
              return <li className="list-group-item border border-primary" key={index}>
                {item}
              </li>
            })}
          </ol>
          <div className="col-6 mt-3">
            <form onSubmit={addArticle}>
              <input
                type="text"
                value={newArticle}
                onChange={e => setNewArticle(e.target.value)}
              />
              <button type="submit" className="btn btn-success mx-2">Aggiungi</button>
            </form>
          </div>
        </div>
      </div>
    </div>

  )
}

export default ArticlesList


