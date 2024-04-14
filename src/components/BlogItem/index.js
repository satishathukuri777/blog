// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {item} = props
  return (
    <div className="blog-list-items-container">
      <div className="sub-item">
        <h1 className="title">{item.title}</h1>
        <p className="data">{item.publishedDate}</p>
      </div>
      <div>
        <p className="desc">{item.description}</p>
      </div>
    </div>
  )
}
export default BlogItem
