import "./singlepost.css"

export default function SinglePost() {
  return (
    <div className='singlePost'>
        <div className="singlePostWrapper">
            <img className="singlePostImg" src="images/post.png" alt="" />
            <h1 className="singlePostTitle">
                Lorem ipsum dolor
                <div className="singlePostEdit">
                    <i className="singlePostIcon far fa-edit"></i>
                    <i className="singlePostIcon far fa-trash-alt"></i> 
                </div>
            </h1>
            <div className="singlePostInfo">
                <span>
                    Author:
                    <b className="singlePostAuthor">
                        Safak
                    </b>
                </span>
                <span>1 day ago</span>
            </div>
            <p className="singlePostDesc">
                Ad aliqua qui est reprehenderit incididunt magna adipisicing. Enim dolor cupidatat officia voluptate sit do fugiat reprehenderit adipisicing quis non aute exercitation ea. Consequat magna occaecat excepteur esse dolore sunt id in. Do sint excepteur elit do sit non ad duis dolore ad sit quis consequat. Ut eiusmod aliquip sunt aute velit anim anim ipsum pariatur fugiat est incididunt ut aute. Reprehenderit exercitation ut dolore ullamco occaecat anim incididunt nisi incididunt et do aliqua. Cupidatat minim nostrud enim ullamco sunt et.
                <br />
                <br />
                Nisi nulla labore ut eu officia. Sunt fugiat sit fugiat commodo enim voluptate irure ad ullamco nostrud. Quis est consequat eiusmod laboris qui ad Lorem nulla sint. Pariatur ut ea ipsum fugiat id. Irure ut sunt incididunt enim velit sit proident cillum occaecat id ut consectetur. Anim tempor veniam ut velit. Aute in ea labore laboris esse labore irure magna eu labore exercitation.
            </p>
        </div>
    </div>
  )
}
