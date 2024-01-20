import connectMongo from "@/libs/server"
import Topic from "@/models/topic"
import { NextResponse } from "next/server"

export async function POST(req){
    //send the data as json format - title and description
    const {title, description} = await req.json()
    await connectMongo()
    await Topic.create({title, description}) // create 
    return NextResponse.json({message:"Topic Created"},{status: 201} ) // this is send now 
}