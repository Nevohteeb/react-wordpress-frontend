import {useState, useEffect} from 'react'
import axios from 'axios'
import Loading from '../components/Loading'

const baseUrl = import.meta.env.VITE_WP_API_BASEURL

const Home = () => {
  // Loading state
  const [loading, setLoading] = useState(true)
  // Posts state - they change based on the posts on the API
  const [posts, setPosts] = useState(null)

  const endpoint = `${baseUrl}/posts?_embed`

  useEffect(() => {
    axios.get(`${endpoint}`)
    .then((res) => {
      console.log(res.data)
      setPosts(res.data)
      // setLoading(false)
      setLoading(false) 
    })
    .catch((err) => console.log(err))
  }, [])

  const Posts = ({posts}) => {
    const mappedPosts = posts.map((post, index) => {
      return (
        <div key={post.slug + "-" + index} className='post-card'>
          <h4 className='title'>{post.title.rendered}</h4>
          <div dangerouslySetInnerHTML={{__html: post.excerpt.rendered}}/>

          <div>
            <p>MY POSTS</p>
          </div>



          <div>Key: {post.slug + "-" + index}</div>
          <li key={post.slug + "-" + index} className="readmore">
            <a href={`#/post/${post.id}`}>Read More</a>
          </li>
        </div>
      )
    })

    return (
      <>
        {mappedPosts}
      </>
    )
  }

  // RETURN OF THE HOME COMPONENT
  return (
    <div className='container'>
      <h2>Posts:</h2>
      <div className='cardCont'>
        {loading ? <Loading/> : <Posts posts={posts}/>}
      </div>
    </div>
  )
}

export default Home