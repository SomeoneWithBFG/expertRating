import React from 'react';

import { Article } from "../components/Article"
import { AddArticle } from "../components/AddArticle"

import Button from "../components/basic/Button"

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
      <Button 
        props={{name: "test", type: "disabled", placeholder:"disabled"}}
        onClick={()=>{console.log("disabled")}}
      />
      </div>

      </div>
    </main>
  )
}


export default App;
