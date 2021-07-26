import * as React from 'react'
import { Dispatch } from 'redux'
import { useDispatch } from 'react-redux'
import styles from './Article.module.scss'

type Props = {
    article: IArticle
    removeArticle: (article: IArticle) => void
}

export const Article: React.FC<Props> = ({ article, removeArticle }) => {
    const dispatch: Dispatch<any> = useDispatch()

    const deleteArticle = React.useCallback(
        (article: IArticle) => dispatch(removeArticle(article)),
        [dispatch, removeArticle]
    )

    return (
        <div className={styles.article}>
            <div>
                <h1>{article.title}</h1>
                <p>{article.body}</p>
            </div>
            <button onClick={() => deleteArticle(article)}>Delete</button>
        </div>
    )
}