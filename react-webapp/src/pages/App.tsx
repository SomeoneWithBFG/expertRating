import React from 'react';

import { Article } from "../components/Article"
import { AddArticle } from "../components/AddArticle"

import Input from "../components/basic/Input"

import { useSelector, shallowEqual, useDispatch } from "react-redux"
import { addArticle, removeArticle } from "../redux/actionCreators"
import { Dispatch } from "redux"

const App: React.FC = () => {
  const articles: readonly IArticle[] = useSelector(
    (state: ArticleState) => state.articles,
    shallowEqual
  )

  const dispatch: Dispatch<any> = useDispatch()

  const saveArticle = React.useCallback(
    (article: IArticle) => dispatch(addArticle(article)),
    [dispatch]
  )

  return (
    <main>
      <div>
      <h1>My Articles</h1>
      <AddArticle saveArticle={saveArticle} />
      {articles.map((article: IArticle) => (
        <Article
          key={article.id}
          article={article}
          removeArticle={removeArticle}
        />
      ))}
      
      <div style={{margin:"1rem"}}>
      <Input name="test" type="disabled" />
      </div>

      <div style={{margin:"1rem"}}>
      <Input name="test" type="basic" />
      </div>

      </div>
    </main>
  )
}


export default App;
