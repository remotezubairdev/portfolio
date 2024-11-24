import { connectToDB } from "@/app/db/connectToDB";
import { projectProps } from "@/app/props/projectProps";
import Project from "@/app/schemas/projectSchema";
import { NextResponse } from "next/server";

interface ParamsGETProps {
    params: {
        id: string;
    }
}

export async function GET(request: Request, { params }: ParamsGETProps) {
    const { id } = params;
    
    try {
        await connectToDB();
        const project: projectProps[] = await Project.find({ _id: id});
        return NextResponse.json(project[0]);
    } catch (error) {
        console.error("Error fetching project")
        return NextResponse.json({ message: "Failed to fetch", error});
    }
}