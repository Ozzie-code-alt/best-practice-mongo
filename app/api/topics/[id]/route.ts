// we create dynamic route for updating ID 

import connectMongo from "@/libs/server"
import Topic from "@/models/topic"
import { NextResponse } from "next/server"

export async function PUT(req,{ params }) {
    const {id} = params
    const {newTitle: title, newDescription: description} = await req.json()
    await connectMongo()
    await Topic.findByIdAndUpdate(id, {title, description} )
    return NextResponse.json({message: "Topic Updated"}, {status:200})
}


export async function GET(req, {params}){
    const {id} = params // we grab id from link - desctructure
    await connectMongo();
   const topic=  await Topic.findOne({_id:id})
   return NextResponse.json({topic}, {status:200})
}