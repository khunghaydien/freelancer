import { Post } from "../../domain/Post"
import './Post .scss'
type PostProps = {
    postList: Post[],
}
const Post = ({ postList }: PostProps) => {
    return (
        <div className="post">
            {postList.map(({
                id,
                title,
                type,
                description,
                service }) => (
                <div className="post__item" key={id}>
                    <div className="post__header">
                        <div className="post__container">
                            <div className="post__header--job">
                                <div className="job__title">{title}</div>
                                <div className="job__type-of-job">{type}</div>
                                <div className="job__status"></div>
                            </div>
                            <div className="post__header--poster">
                                <div className="poster__start"></div>
                                <div className="poster__info"></div>
                                <div className="poster__name"></div>
                            </div>
                        </div>
                        <div className="post__header--save"></div>
                    </div>
                    <div className="post__body">
                        <div></div>
                        <div className="post__description">{description}</div>
                        <div className="post__service">{service}</div>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default Post