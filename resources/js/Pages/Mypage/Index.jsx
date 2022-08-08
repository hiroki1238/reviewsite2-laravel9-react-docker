import React from "react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/Authenticated";
import { Link } from "@inertiajs/inertia-react";

const Index = (props) => {
    const { myReviews, auth } = props;

    return (
        <Authenticated
            auth={props.auth}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    {auth.user.name}のマイページ
                </h2>
            }>

            <div className="p-6 bg-gray-200 w-96 my-0 mx-auto rounded-lg border border-gray-300 text-center">
                {/* グレーのボックス(背景)に関する指定 */}
                <h3>ここにアイコンを表示</h3>
                <h1 className="text-purple-800">{auth.user.name}のマイページ</h1>
                <Link href={`/mypage/profile/${auth.user.id}`}>
                    プロフィール詳細
                </Link>
                {/* <div id="icon" className="rounded">
       ここにアイコンを表示
       </div>
       <Link href="/mypage/profile/{ authUser.id }">{ authUser.name }のプロフィール</Link> */}
            </div>

            <div className="p-6 bg-gray-200 w-96 my-0 mx-auto rounded-lg border border-gray-300 text-center">
                <h2 className="text-purple-800">あなたのレビュー</h2>
                {myReviews.map((review) => (
                    <div key={review.id}>
                        <h2>
                            <Link href={`/reviews/${review.id}`}>
                                {review.title}
                            </Link>
                        </h2>
                    </div>
                ))}
                </div>
                <div className="p-6 bg-gray-200 w-96 my-0 mx-auto rounded-lg border border-gray-300 text-center">
                <h3 className="text-purple-800">お気に入りの会場</h3>
                <h3>お気に入り一覧を表示</h3>
                <h3 className="text-purple-800">ブックマーク</h3>
                <h3>ブックマーク一覧を表示</h3>
                </div>
        </Authenticated>
    );
};

export default Index;
