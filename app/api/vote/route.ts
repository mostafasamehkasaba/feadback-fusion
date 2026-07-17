import prisma from "@/lib/prisma";
import { syncUser } from "@/lib/user";
import { NextRequest, NextResponse } from "next/server";

export async function POST (requset: NextRequest){
    try{
           const dbUser = await syncUser()
        
                if (!dbUser){
                    return NextResponse.json({message : "unAuthorized"},{status: 401})
                }

                const {postId}  = await requset.json()
                if(!postId){
                    return NextResponse.json({error : "postId is required"},{status: 400})
                }
                const existingVotes  = await prisma.vote.findUnique({
                    where :{
                        userId_postId :{
                            userId : dbUser.id,
                            postId,
                        }
                    }
                })

                if(existingVotes){
                    await prisma.vote.delete({
                        where : {id : existingVotes.id}
                    })

                    return NextResponse.json({voted : false})
                }
                else{
                    await prisma.vote.create({
                        data : {
                            userId :dbUser.id,
                            postId,
                        }
                    })

                    return NextResponse.json({voted : true})
                }
    }catch(error){
        throw error
    }
}