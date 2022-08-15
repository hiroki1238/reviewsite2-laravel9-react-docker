import React from "react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/Authenticated";
import { Link } from "@inertiajs/inertia-react";

const Index = (props) => {
    const { myBookmarks, auth } = props;

    return (
        <Authenticated
            auth={props.auth}
            // header={
            //     <h2 className="font-semibold text-xl text-gray-800 leading-tight">
            //         ブックマーク
            //     </h2>
            // }
            >

           
            <div className="py-2 px-3 mt-7 shadow-lg shadow-shadowgray1 bg-gray-200 my-0 mx-auto rounded-lg border border-gray-300 text-center w-5/7">
            <div className="flex justify-left">
                    <Link
                        className="text-gray-400 text-xl no-underline"
                        onClick={() => window.history.back()}
                    >
                        戻る
                    </Link>
                </div>
            <h2 className="text-title-purple1 text-3xl">ブックマーク</h2>
            <p className="py-2 text-xl">ブックマークした投稿がここに表示されます</p>
            
                {myBookmarks.map((review) => (
                    <div key={review.id}>
                        <h2 className="m-2">
                            <Link className="text-link-blue text-2xl" href={`/reviews/${review.id}`}>
                                {review.title}
                            </Link>
                        </h2>
                    </div>
                ))}
                </div>
        </Authenticated>
    );
};

export default Index;
