import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Link } from "@inertiajs/inertia-react";
import Prefectures from "@/Components/Prefectures";
import Slider1 from "@/Components/Slider1";
import Search from "@/Components/Search";

const Index = (props) => {
    const { auth, prefecture_array, reviews, images } = props;

    return (
        <Authenticated auth={props.auth}>
            <Slider1 images={images}/>

            <div className="w-full">
                <div className="p-6 mt-5 shadow-lg shadow-shadowgray1 bg-gray-200 my-0 mx-auto rounded-lg border border-gray-300 text-center w-5/7">
                    <h2 className="text-title-purple1 text-3xl mb-3">
                        新着のレビュー
                    </h2>
                    {reviews.map((review) => (
                        <div key={review.id}>
                            <h2 className="m-2">
                                <Link
                                    className="text-link-blue text-2xl"
                                    href={`/reviews/${review.id}`}
                                >
                                    {review.title} <span className="text-lg">({review.venue.name})</span>
                                </Link>
                            </h2>
                        </div>
                    ))}
                </div>
                <br />
                {/* <div className="p-6 mt-5 shadow-lg shadow-shadowgray1 bg-gray-200 my-0 mx-auto rounded-lg border border-gray-300 text-center w-5/7">
                    <h3 className="text-title-purple1 text-3xl mb-2">
                        何か書く1
                    </h3>
                    <h3 className="text-2xl">何か書く</h3>
                    <hr className="border-gray-400 mt-5 mb-5" />
                    <h3 className="text-title-purple1 text-3xl mb-2">
                        何か書く2
                    </h3>
                    <h3>何か書く</h3>
                </div>
                <br /> */}

                <Search />
                <br />
                <Prefectures prefecture_array={prefecture_array} />
            </div>
            <br />
        </Authenticated>
    );
};

export default Index;
