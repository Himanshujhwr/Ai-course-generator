// export const dynamic = "force-dynamic";

// ("use client");
// import { db } from "@/configs/db";
// import { CourseList } from "@/configs/schema";
// import { useUser } from "@clerk/nextjs";
// import { and, eq } from "drizzle-orm";
// import React, { useEffect, useState } from "react";
// import CourseBasicInfo from "./_components/CourseBasicInfo";
// import CourseDetail from "./_components/CourseDetail";
// import ChapterList from "./_components/ChapterList";
// import { Button } from "@/components/ui/button";
// //import { GenerateChapterContent_AI } from '@/configs/AiModel';
// import LoadingDialog from "../_components/LoadingDialog";
// import service from "@/configs/service";
// import { useRouter } from "next/navigation";
// import { Chapters } from "@/configs/schema";

// function CourseLayout({ params }) {
//   const { user } = useUser();
//   const [course, setCourse] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const router = useRouter();

//   useEffect(() => {
//     params && GetCourse();
//   }, [params, user]);
//   const GetCourse = async () => {
//     const result = await db
//       .select()
//       .from(CourseList)
//       .where(
//         and(eq(CourseList.courseId, params?.courseId)),
//         eq(CourseList?.createdBy, user?.primaryEmailAddress?.emailAddress)
//       );

//     setCourse(result[0]);
//     console.log(result);
//   };

//   const GenerateChapterContent = () => {
//     setLoading(true);
//     const chapters = course?.courseOutput?.course?.chapters;
//     chapters.forEach(async (chapter, index) => {
//       const PROMPT =
//         "Explain the concept in Detail on Topic:" +
//         course?.name +
//         ",Chapter:" +
//         chapter?.name +
//         ", in JSON Format with list of array with field as title , description in detail , Code Example (Code field in <precode> format) if applicable ";
//       console.log(PROMPT);

//       // if(index<3){
//       try {
//         let videoId = "";
//         const result = await //GenerateChapterContent_AI.sendMessage(PROMPT);
//         console.log(result?.response?.text());
//         const content = JSON.parse(result?.response?.text());
//         console.log("Parsed Content:", content);

//         // service.getVideos(course?.name+':'+chapter?.name).then(resp=>{
//         //   console.log(resp);
//         //   videoId=resp[0]?.id?.videoId
//         // })

//         const videoResponse = await service.getVideos(
//           course?.name + ":" + chapter?.name
//         );
//         console.log("Video Response:", videoResponse);

//         videoId = videoResponse[0]?.id?.videoId;

//         await db.insert(Chapters).values({
//           chapterId: index,
//           courseId: course?.courseId,
//           content: content,
//           videoId: videoId,
//         });
//         setLoading(false);
//       } catch (error) {
//         setLoading(false);
//         console.log(error);
//       }
//       await db.update(CourseList).set({
//         publish: true,
//       });
//       router.replace("/create-course/" + course?.courseId + "/finish");
//       // }
//     });
//   };

//   return (
//     <div className="mt-10 px-7 md:px-20 lg:px-44">
//       <h1 className="font-bold text-center text-2xl ">Course Layout</h1>

//       <LoadingDialog loading={loading} />

//       <CourseBasicInfo course={course} refreshData={() => GetCourse()} />

//       <CourseDetail course={course} />

//       <ChapterList course={course} refreshData={() => GetCourse()} />

//       <Button onClick={GenerateChapterContent} className="my-10">
//         Generate Course Content
//       </Button>
//     </div>
//   );
// }

// export default CourseLayout;
export const dynamic = "force-dynamic";

import { db } from "@/configs/db";
import { CourseList, Chapters } from "@/configs/schema";
import { and, eq } from "drizzle-orm";
import CourseBasicInfo from "./_components/CourseBasicInfo";
import CourseDetail from "./_components/CourseDetail";
import ChapterList from "./_components/ChapterList";
import { Button } from "@/components/ui/button";
import LoadingDialog from "../_components/LoadingDialog";
import service from "@/configs/service";
import { redirect } from "next/navigation";

async function CourseLayout({ params }) {
  const courseResult = await db
    .select()
    .from(CourseList)
    .where(eq(CourseList.courseId, params.courseId));

  const course = courseResult[0];

  async function GenerateChapterContent() {
    "use server";

    const chapters = course?.courseOutput?.course?.chapters;

    for (let index = 0; index < chapters.length; index++) {
      const chapter = chapters[index];

      const videoResponse = await service.getVideos(
        `${course.name}:${chapter.name}`
      );

      const videoId = videoResponse?.[0]?.id?.videoId || "";

      await db.insert(Chapters).values({
        chapterId: index,
        courseId: course.courseId,
        content: {}, // AI content removed for now
        videoId,
      });
    }

    await db
      .update(CourseList)
      .set({ publish: true })
      .where(eq(CourseList.courseId, course.courseId));

    redirect(`/create-course/${course.courseId}/finish`);
  }

  return (
    <div className="mt-10 px-7 md:px-20 lg:px-44">
      <h1 className="font-bold text-center text-2xl">Course Layout</h1>

      <CourseBasicInfo course={course} />
      <CourseDetail course={course} />
      <ChapterList course={course} />

      <form action={GenerateChapterContent}>
        <Button type="submit" className="my-10">
          Generate Course Content
        </Button>
      </form>

      <LoadingDialog loading={false} />
    </div>
  );
}

export default CourseLayout;
