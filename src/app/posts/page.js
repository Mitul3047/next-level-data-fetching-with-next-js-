import Link from 'next/link';
import React from 'react';

const PostsPage = async () => {
    const res = await fetch("http://localhost:5000/posts",{
        cache: "no-store"
        // next:{
        //     revalidate: 5,
        // }??????

    })
    const posts = await res.json()
    // console.log(posts);
    return (
        <div>
            <h2>Total Post: {posts.length} </h2>

            {
                posts.map(post => (
                    <div key={post.id}>
                        <div className="card w-[70%] bg-gray-300 my-4 mx-auto  shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">{post.title}</h2>
                                <p>{post.description}</p>
                                <p>Likes: {post.likesCount}</p>
                                <div className="card-actions justify-end">
                                    <Link href={`/posts/${post.id}`}><button className="btn btn-primary">Buy Now</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default PostsPage;