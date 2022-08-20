import React, {useState} from "react";
import { inertia } from "@inertiajs/inertia";
import { Link, useForm } from "@inertiajs/inertia-react";
import Authenticated from "@/Layouts/Authenticated";

// import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

const Create = (props) => {
    const { venue, auth, images } = props;
    // const [value, setValue] = React.useState();
    const [preview, setPreview] = useState([]);
    const { data, setData, post } = useForm({
        images: "",

        //useForm と dataはセットで使う(dataという値は決まっているもの)
        title: "", //↑このpostは送信方式
        body: "",
        seat: "",
        user_id: auth.user.id,
        star1: "",
        star2: "",
        star3: "",
        venue_id: venue.id,
        visited_at: "",
    });

    const handleSendImage = (e) => {
        e.preventDefault();
        post(`/reviews/store`); //postを使用すれば、送信するデータを指定しなくても、実行されるとdataに格納されているデータを勝手に送信してくれる "/posts"というページに値を送っている
    };

    const handleChangeFile = (e) => {
        const { files } = e.target;
        {Array.from(files).map((file) => {
            //console.log(file);
            setPreview(prevPreview => [...prevPreview, window.URL.createObjectURL(file)]);
        })}
      };
      console.log(props);

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors} //これは何のため？
            // header={
            //     <h2 className="font-semibold text-xl text-gray-800 leading-tight">
            //         新規投稿
            //     </h2>
            // }
        >
            <div className="p-6 mt-5 shadow-lg shadow-shadowgray1 bg-gray-200 my-0 mx-auto rounded-lg border border-gray-300 text-center w-5/7">
                <form onSubmit={handleSendImage}>
                    <div>
                        <h2 className="text-title-purple1 text-2xl mb-2">タイトル</h2>
                        <input className="mb-6"
                            type="text"
                            placeholder="タイトル"
                            onChange={(e) => setData("title", e.target.value)}
                        ></input>
                        <span className="text-red-600">
                            {props.errors.title}
                        </span>

                        <h2 className="text-title-purple1 text-2xl mb-2">レビュー内容</h2>
                        <textarea className="mb-6"
                            placeholder="迷いました"
                            onChange={(e) => setData("body", e.target.value)}
                        ></textarea>
                        <span className="text-red-600">
                            {props.errors.body}
                        </span>

                        <h2 className="text-title-purple1 text-2xl mb-2">座席番号</h2>
                        <input className="mb-6"
                            type="text"
                            placeholder="K17"
                            onChange={(e) => setData("seat", e.target.value)}
                        ></input>

                        <Box sx={{ "& > legend": { mt: 2 } }}>
                            <h2 className="text-title-purple1 text-2xl mb-2">
                                ステージの見やすさ
                            </h2>
                            <Rating
                                name="simple-controlled"
                                onChange={(e) =>
                                    setData("star1", e.target.value)
                                }
                            />
                        </Box>

                        <Box sx={{ "& > legend": { mt: 2 } }}>
                            <h2 className="text-title-purple1 text-2xl mb-2 mt-4">
                                アクセスの良さ
                            </h2>
                            <Rating
                                name="simple-controlled"
                                onChange={(e) =>
                                    setData("star2", e.target.value)
                                }
                            />
                        </Box>

                        <Box sx={{ "& > legend": { mt: 2 } }}>
                            {/* <Typography component="legend">Controlled</Typography> */}
                            <h2 className="text-title-purple1 text-2xl mb-2 mt-4">総合点</h2>
                            <Rating
                                name="simple-controlled"
                                onChange={(e) =>
                                    setData("star3", e.target.value)
                                }
                            />
                        </Box>

                        <h2 className="text-title-purple1 text-2xl mb-2 mt-4">訪問日</h2>
                        <input className="mb-5"
                            type="date"
                            placeholder="2020-01-01"
                            onChange={(e) =>
                                setData("visited_at", e.target.value)
                            }
                        ></input>

                        <div className="name-filed width">
                            <div className="first-name-box">
                                <div className="text-label">
                                    <h2 className="text-title-purple1 text-xl mb-3">
                                        画像を選択
                                    </h2>{" "}
                                    {/*送信用*/}
                                    <input className=""
                                        type="file"
                                        multiple
                                        onChange={(e) => {
                                            setData("images", e.target.files);
                                            handleChangeFile(e);
                                        }}
                                    />{" "}
                                    {/*複数枚の時[0]不要*/}
                                    <span className="text-red-600">
                                        {props.errors.image}
                                    </span>
                                </div>

                                {/* errors.item_url || errors.item_url.* ?
                    <div class="alert alert-danger">{ errors.first('item_url') . errors.first('item_url.*') }</div> */}
                            </div>
                        </div>

                        {/* 表示用 */}
                    <div className="h-48 w-48 my-0 mx-auto">
                    {preview ? <div>
                            {preview.map((pre, index) => (
                                <img
                                key={index}
                                    src={`${pre}`}
                                    className="object-contain"
                                />
                            ))}
                        </div> : null }
                    </div>

                    </div>
                    <button type="submit" className="px-3 py-1 mt-5 bg-title-purple2 m-2 text-white hover:bg-purple-400 rounded-md">投稿</button>
                </form>

                <div className="border border-b-0 border-gray-300 mt-2"></div>
                <div className="w-1/2 ml-auto text-right space-x-3 mt-3">
                    <Link
                        className="text-gray-400 hover:text-gray-600 no-underline text-lg"
                        onClick={() => window.history.back()}
                    >
                        戻る
                    </Link>
                </div>
            </div>
        </Authenticated>
    );
};

export default Create;
