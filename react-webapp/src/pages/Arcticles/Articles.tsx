import React from 'react'

import { Article } from '../../components/Article'
import { AddArticle } from '../../components/AddArticle'

import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { addArticle, removeArticle } from '../../redux/actionCreators'
import { Dispatch } from 'redux'

import styles from './styles.module.scss'

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
        <main className={styles.pageContainer}>
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
            </div>
        </main>
    )
}

export default App
