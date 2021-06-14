import React from "react";
import styled from "styled-components";
import CreateInput from "./../Common/CreateInput/CrateInput";

interface ISelectSpecializationProps {}

const initState = {
  specializations: [],
};

export default function SelectSpecilization({}: ISelectSpecializationProps) {
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {};

  const businessTopics = [
    "Business Software and Tools",
    "Career Development",
    "Customer Service",
    "Finance and Accounting",
    "Human Resources",
    "Leadership and Management",
    "Marketing",
    "Professional Development",
    "Project Management",
    "Sales",
    "Small Business and Entrepreneurship",
    "Training and Education",
  ];

  const creativeTopics = [
    "Architecture, Engineering and Construction",
    "Animation and Illustration",
    "Audio and Music",
    "Graphic Design",
    "Motion Graphics and VFX",
    "Photography",
    "Product Design and Manufacturing",
    "User Experience",
    "Video",
    "Visualization and Real-Time",
    "Web Design",
  ];

  const technologyTopics = [
    "Cloud Computing",
    "Data Science",
    "Database Management",
    "DevOps",
    "IT Help Desk",
    "Mobile Development",
    "Network and System Administration",
    "Security",
    "Software Development",
    "Web Development",
  ];

  const createOption = (arr: string[]) => {
    return arr.map((option: string) => (
      <CreateInput
        type="checkbox"
        label={option}
        required={false}
        name=""
        value={option}
        placeholder=""
        handleChange={handleChange}
      />
    ));
  };

  return (
    <SpecializationBox>
      <QuestionBox>
        <div>
          <p>
            What business topics are you qualified to teach? (Please select up
            to 3.)
          </p>

          {createOption(businessTopics)}
        </div>

        <div>
          <p>
            What creative topics are you qualified to teach? (Please select up
            to 3.
          </p>

          {createOption(creativeTopics)}
        </div>

        <div>
          <p>
            What technology topics are you qualified to teach? (Please select up
            to 3.)
          </p>

          {createOption(technologyTopics)}
        </div>

        <SelectBox></SelectBox>
      </QuestionBox>
    </SpecializationBox>
  );
}

const SpecializationBox = styled.div``;
const QuestionBox = styled.div``;
const SelectBox = styled.div``;
