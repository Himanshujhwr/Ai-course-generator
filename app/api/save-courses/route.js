import { NextResponse } from "next/server";
import { db } from "@/configs/db";
import { CourseList } from "@/configs/schema";
import { v4 as uuidv4 } from "uuid";

export async function POST(req) {
  try {
    const { courseLayout, userCourseInput } = await req.json();

    const courseId = uuidv4();

    await db.insert(CourseList).values({
      courseId,
      name: userCourseInput.topic,
      level: userCourseInput.level,
      category: userCourseInput.category,
      courseOutput: courseLayout,
      createdBy: userCourseInput.createdBy || "",
      userName: userCourseInput.userName || "",
      userProfileImage: userCourseInput.userProfileImage || "",
    });

    return NextResponse.json({ courseId });
  } catch (error) {
    console.error("SAVE COURSE ERROR:", error);
    return NextResponse.json(
      { error: "Failed to save course" },
      { status: 500 }
    );
  }
}
