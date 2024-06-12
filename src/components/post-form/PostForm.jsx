import React from "react";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, select, RTE } from "../index";
import databaseService from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PostForm = ({ post }) => {
  const { register, handleSubmit, watch, setValue, control, getValues } =
    useForm({
      defaultValues: {
        title: post?.title || "",
        slug: post?.slug || "",
        content: post?.content || "",
        status: post?.status || "active",
      },
    });

  const navigate = useNavigate();
  const userData = useSelector((state) => state.user.userData);
  const submit = async (data) => {
    if (post) {
      const file = data.image[0]
        ? databaseService.uploadFile(data.image[0])
        : null;

      if (file) {
        databaseService.deleteFile(post.featuredImage);
      }
      const dbPost = await databaseService.updatePost(post.$id, {
        ...data,
        featuredImage: file ? file.$id : undefined,

        if(dbPost) {
          navigate(`/post/${dbPost.$id}`);
        },
      });
    }
  };

  return <div>PostForm</div>;
};

export default PostForm;
