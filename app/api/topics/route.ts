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

export async function GET(){
await connectMongo(); // connection String
   const topic = await Topic.find() //mongo db syntax find
   return NextResponse.json({topic})
}

export async function DELETE(req){
    const id = req.nextUrl.searchParams.get("id"); //grab id
    await connectMongo();
    await Topic.findByIdAndDelete(id)
    return NextResponse.json({message: "Topic Deleted"}, {status:200})
}