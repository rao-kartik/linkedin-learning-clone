import React from "react";
import styled from "styled-components";

export default function RegisterFormLeftSection() {
  return (
    <FormLeftSection>
      <div>
        <p>
          Apply to join the passionate instructors who share their expertise and
          knowledge with the world. You'll collaborate with some of the
          industry's top producers, directors, and editors so that your content
          is presented in the best possible light.
        </p>

        <p>
          <span>As a LinkedIn Learning instructor, you can:</span>

          <ul>
            <li>Help people reach professional and personal goals</li>
            <li>Learn valuable skills applicable to your professional life</li>
            <li>Benefit from the massive visibility our platforms provide</li>
            <li>Earn extra income</li>
          </ul>
        </p>
      </div>

      <AboutWorkingBox>
        <h3>About Working with Us</h3>

        <p>
          We’re a team of talented, smart, passionate content creators who share
          the vision of helping create economic opportunity for every member of
          the global workforce. We collaborate with subject matter experts like
          you and create our courses differently from anyone else, and that’s
          what helps make them so good.
        </p>

        <QuoteBox>
          "As an instructor, you’re passionate about your subject matter. The
          thing I love about working with LinkedIn is, they help you bring it to
          life in really exciting ways." — Lisa Earle McLeod, Sales Leadership
          Consultant & LinkedIn Learning instructor
        </QuoteBox>
      </AboutWorkingBox>

      <ApplyNowBox>
        <h4>Apply Now!</h4>

        <p>
          If you're interested in becoming an instructor, please apply on this
          form. You'll see a field for a sample movie, and you can review our
          sample movie guidelines to understand what we're looking for. After
          you submit the form, we will reach out to you if there's a good fit.
          Please note that we can't respond to every application, but we do keep
          all submissions for future consideration.
        </p>
      </ApplyNowBox>
    </FormLeftSection>
  );
}

const FormLeftSection = styled.section``;

const AboutWorkingBox = styled.div``;

const QuoteBox = styled.div``;

const ApplyNowBox = styled.div``;
