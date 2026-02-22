import type { IPost } from "../../types"
import styles from './styles.module.css'

interface Props {
    post: IPost
}

export const PostCard = ({post}:Props) =>{
    return(
        <div className={styles.card}>
            <p>{post.title}</p>
            <p>{post.body}</p>
        </div>
    )
}