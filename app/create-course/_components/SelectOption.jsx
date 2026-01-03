import React, { useContext } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { FaVideo } from "react-icons/fa";
import { GiLevelEndFlag } from "react-icons/gi";
import { MdAccessTimeFilled } from "react-icons/md";
import { TbListNumbers } from "react-icons/tb";
import { UserInputContext } from "@/app/_context/UserInputContext";

function SelectOption() {
  const { userCourseInput, setUserCourseInput } = useContext(UserInputContext);
  const handleInputChange = (fieldName, value) => {
    setUserCourseInput((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  return (
    <div className="px-10 md:px-20 lg:px-44">
      <div className="grid grid-cols-2 gap-10">
        <div>
          <label className="text-md flex items-center gap-2  mb-1 ">
            <GiLevelEndFlag className="text-xl" />
            Difficulty Level
          </label>
          <Select
            onValueChange={(value) => handleInputChange("level", value)}
            defaultValue={userCourseInput?.level}
          >
            <SelectTrigger className="h-14 text-lg">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Beginner">Beginner</SelectItem>
              <SelectItem value="Intermediate">Intermediate</SelectItem>
              <SelectItem value="Advance">Advance</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className="text-md flex items-center gap-2  mb-1 ">
            <MdAccessTimeFilled className="text-xl" />
            Course Duration
          </label>
          <Select
            onValueChange={(value) => handleInputChange("duration", value)}
            defaultValue={userCourseInput?.duration}
          >
            <SelectTrigger className="h-14 text-lg">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2 Hours">2 Hours</SelectItem>
              <SelectItem value="5 Hours">5 Hours</SelectItem>
              <SelectItem value="More than 6 Hours">
                More than 6 Hours
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className="text-md flex items-center gap-2 mb-1 ">
            <FaVideo className="text-xl" />
            Add Video
          </label>
          <Select
            onValueChange={(value) => handleInputChange("displayVideo", value)}
            defaultValue={userCourseInput?.displayVideo}
          >
            <SelectTrigger className="h-14 text-lg">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Yes">Yes</SelectItem>
              <SelectItem value="No">No</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className="text-md flex items-center gap-2  mb-1 ">
            <TbListNumbers className="text-xl" />
            No of Chapters
          </label>
          <Input
            type="number"
            className="h-14 text-lg"
            onChange={(event) =>
              handleInputChange("noOfChapters", event.target.value)
            }
            defaultValue={userCourseInput?.noOfChapters}
          />
        </div>
      </div>
    </div>
  );
}

export default SelectOption;
