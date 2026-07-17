import prisma from "@/lib/prisma";
import { syncUser } from "@/lib/user";
import { NextRequest, NextResponse } from "next/server";

export  async function POST (requset : NextRequest){
    try{
        const dbUser = await syncUser()

        if (!dbUser){
            return NextResponse.json({message : "unAuthorized"},{status: 401})
        }

        const body = await requset.json()

        const {title , discription, category} =body

        const post = await prisma.post.create({
            data:{
                title,
                category,
                discription,
                authorId:dbUser.id
            }
        })

        return NextResponse.json(post)
    }catch(error){
        return NextResponse.json({error:"internal server error"},{status:404})
    }
}

export async function GET(requset:NextRequest) {
    try{
        const posts = await prisma.post.findMany({
        include:{
            author : true,
            votes:true
        },orderBy:{
            cratedAt:"desc"
        }
        })
        return NextResponse.json(posts)
    }catch(error){
        throw error
    }
}