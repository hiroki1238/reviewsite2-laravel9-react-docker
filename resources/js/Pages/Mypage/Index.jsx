import React from "react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/Authenticated";
import { Link } from '@inertiajs/inertia-react'

const Index = (props) => {
  const { myReviews } = props;

  return (
    <Authenticated auth={props.auth} header={
      <h2 className="font-semibold text-xl text-gray-800 leading-tight">
        Index
      </h2>
    }>

      <div className="p-12 bg-my-gray1">
       <h1>マイページ</h1>
       <h3>neko neko neko neko neko neko</h3>
       {/* <div id="icon" className="rounded">
       ここにアイコンを表示
       </div>
       <Link href="/mypage/profile/{ authUser.id }">{ authUser.name }のプロフィール</Link> */}
      </div>

    </Authenticated>
  );
}

export default Index;