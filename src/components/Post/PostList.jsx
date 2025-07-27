import Post from './Post'

function PostList({ postsList }) {
    return (
        <>
            {postsList.length > 0 && postsList.map((post, index) => <Post key={index} author={post.author} description={post.description} />)}
            {postsList.length === 0 && <h1>no post available</h1>}
        </>
    );
};
export default PostList;