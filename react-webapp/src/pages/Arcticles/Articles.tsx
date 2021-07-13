import React from 'react';

import { Article } from "../../components/Article"
import { AddArticle } from "../../components/AddArticle"

import Selector from "../../components/basic/Select"
import Input from "../../components/basic/Input"
import Button from "../../components/basic/Button"

import { useSelector, shallowEqual, useDispatch } from "react-redux"
import { addArticle, removeArticle } from "../../redux/actionCreators"
import { Dispatch } from "redux"

import Menu from "../../components/complex/Menu"

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
      <Menu />
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
        onChange={testFunction}
      />
      </div>

      <div style={{margin:"1rem"}}>
      <Input 
        props={{
          name: "",
          type: "basic",
          placeholder: "",
        }} 
        onChange={testFunction}
      />
      </div>

      <div style={{margin:"1rem"}}>
      <Button 
        props={{
          name: "afsgh",
          type: "basic",
          placeholder: "afsgh",
          isDisabled: false
        }} 
        onChange={testFunction} />
      </div>

      </div>
    </main>
  )
}


export default App;
