import React from "react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/Authenticated";
import { Link } from '@inertiajs/inertia-react'


const Show = (props) => {
    const { post } = props; 
    console.log(post);
    return (
        <Authenticated auth={props.auth} header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Index
                </h2>
            }>
            
            <div className="p-12">
                <h1>{ post.title }</h1>
                
                <div>
                    <h3>本文</h3>
                    <p>{ post.body }</p>
                </div>

                <div>
                [<Link href={"/posts/" + post.id + "/edit"}>edit</Link>]
                </div>
                
                <div>
                    <Link href="/">戻る</Link>
                </div>
            </div>
        </Authenticated>
        );
}

export default Show;