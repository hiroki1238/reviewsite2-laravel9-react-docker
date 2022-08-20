import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Link, useForm } from "@inertiajs/inertia-react";

const Index = (props) => {
    const { auth } = props;
    const {data, setData, post} = useForm({
        name: "",
        keyword: "",
        scale_standing: "",
        scale_sitting: "",
        location_path: "",
        address: "",
        prefecture_id: "",
        url: "",
    })

    const handleSendPosts = (e) => {
        e.preventDefault();
        post();
    }
    console.log(props);
    

    return (
        <Authenticated auth={props.auth} errors={props.errors}>
            <div className="p-6 mt-5 shadow-lg shadow-shadowgray1 bg-gray-200 my-0 mx-auto rounded-lg border border-gray-300 text-center w-5/7">
            
                <form onSubmit={handleSendPosts}>
                    <h1 className="text-title-purple1 text-3xl mb-5">
                        新規会場登録
                    </h1>
                    <div>
                        <input
                            className="w-6/7 mb-6"
                            type="text"
                            placeholder="会場名"
                            onChange={(e) => setData("name", e.target.value)}
                        ></input>
                        <span className="text-red-600">
                            {props.errors.name}
                        </span>

                        <textarea className="w-6/7 h-60" placeholder="お問い合わせ内容を入力" onChange={(e) => setData("body", e.target.value)}></textarea>
                        <span className="text-red-600">
                            {props.errors.body}
                        </span>
                    </div>

                    <div className="w-5/7 ml-auto text-right space-x-3 mt-3 mr-2">
                    
                    <Link
                        className="text-gray-400 text-lg no-underline mr-5"
                        href="/"
                    >
                        ホームに戻る
                    </Link>
                
                    <button
                        type="submit"
                        className="px-3 py-1 mt-5 bg-title-purple2 m-2 text-white hover:bg-purple-400 rounded-md"
                    >
                        送信
                    </button>
                    </div>
                </form>
            </div>
        </Authenticated>
    );
};

export default Index;