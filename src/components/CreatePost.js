import React from "react";
import Avatar from "react-avatar";

const CreatePost = () => {
  return (
    <div className="w-[50%]">
      <div className="m-3">
        <div className="flex items-center justify-evenly ">
          <div className="cursor-pointer hover:bg-gray-200 w-full text-center px- py-3">
            <h1 className="font-bold text-gray-600 text-lg">For you</h1>
          </div>
          <div className="cursor-pointer hover:bg-gray-200 w-full text-center px- py-3">
            <h1 className="font-bold text-gray-600 text-lg">Following</h1>
          </div>
        </div>
        <div>
          <div>
            <div>
              <Avatar
                src="https://pbs.twimg.com/profile_images/1703261403237502976/W0SFbJVS_400x400.jpg"
                size="40"
                round={true}
              />
            </div>
            <input />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
