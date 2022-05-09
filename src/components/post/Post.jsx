import "./post.css"

export default function Post() {
  return (
    <div className="post">
        <img className="postImg" src="images/post.png" alt="" />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">Velit nostrud exercitation labore veniam.</span>
            <hr/>
            <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">
            Mollit fugiat pariatur culpa sunt excepteur tempor ea occaecat magna ex. Magna ad aliqua Lorem cillum cillum. Aute elit mollit sint consectetur nulla enim. Sunt cupidatat aute incididunt culpa est sit. Dolore excepteur voluptate pariatur duis et ea proident nisi consectetur dolore. Aliquip excepteur voluptate eiusmod aliqua commodo cillum irure eu ex cupidatat aliqua.
        </p>
    </div>
  )
}
