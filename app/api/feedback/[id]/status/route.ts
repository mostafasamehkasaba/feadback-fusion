import { STATUS_ORDER } from "@/app/data/statusdata";
import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
interface Iparams {
    params :Promise<{id : string}>
}
export async function PATCH(requset:NextRequest,{params} : Iparams) {
    const {userId} = await auth()
      if (!userId){
               return NextResponse.json({message : "unAuthorized"},{status: 401})
           }

        // check  user is admin
        const user = await prisma.user.findUnique({where : {clerkUserId : userId}})
        if(!user || user.role !== "admin"){
            return NextResponse.json({error : "admin access required"} ,{status : 403})
        }

        const {status} = await requset.json()

        const {id :postId} = await params

        if(!STATUS_ORDER.includes(status)){
            return NextResponse.json({error :"Invaild status"},{status: 400})
        }

        const updatedPost = await prisma.post.update({
            where:{id : parseInt(postId)},
            data:{
                status 
            },
            include:{
                author :true,
                votes:true
            }
        })


        return NextResponse.json(updatedPost)


}