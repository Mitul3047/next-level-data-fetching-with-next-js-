import React from 'react';

const DetailsPage = async({params}) => {
    // console.log(params);
    const res = await fetch(`http://localhost:5000/posts/${params.id}`)
    const post = await res.json();
    console.log(post);
    return (
        <div>
            <h1>Detail Page</h1>
            <div >
                        <div className="card w-[70%] bg-gray-300 my-4 mx-auto  shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">{post.title}</h2>
                                <p>{post.description}</p>
                                <p>Likes: {post.likesCount}</p>
                                {/* <div className="card-actions justify-end">
                                    <Link href={`/posts/${post.id}`}><button className="btn btn-primary">Buy Now</button></Link>
                                </div> */}
                            </div>
                        </div>
                    </div>
        </div>
    );
};

export default DetailsPage;