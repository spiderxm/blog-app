import PostDetail from "../../components/posts/post-detail/post-content"

function PostDetailPage() {
  return <PostDetail/>;
}

export async function getStaticPaths() {
    return {
        paths: [
            {
                params: {
                    slug: 1
                },
                params: {
                    slug: "2"
                }
            }
        ],
        fallback:false
    }
}

export async function getStaticProps() {
    return {
        props: {}
    }
}

export default PostDetailPage;
