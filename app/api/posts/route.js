import Post from "@/model/Post.js";
import { NextResponse } from "next/server"
import connect from "@/utils/db";

export const GET = async (request) => {
    
     try {

         await connect()

         const posts = await Post.find(); 

        return new NextRespons(posts, {status: 200});

  } catch(err) {
         return new NextResponse("database Error", {status: 500});
     }
};