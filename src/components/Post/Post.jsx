import classes from './Post.module.css';
function Post({ description, author }) {
    return (
        <div className={classes.main}>
            <p>{author}</p>
            <p>{description}</p>
        </div>
    );
};
export default Post;