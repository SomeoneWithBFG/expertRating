import React from 'react';

import { Article } from "../components/Article"
import { AddArticle } from "../components/AddArticle"

import Selector from "../components/basic/Selector"

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
  
  const testFunction = (item: any) => {
    console.log(item)
  }

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
      <Selector 
        props={{
          name: "test", type: "basic", defaultValue: {value: "test1", placeholder: "fckff"},
          options: [{value: "test1", placeholder: "ftest1"}, {value: "test2", placeholder: "ftest2"}]
        }}
        onChange={testFunction}
      />
      </div>

      </div>
    </main>
  )
}


export default App;
