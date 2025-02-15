"use client";
import CoursePageContainer from "@/modules/course/CoursePageContainer";

const playlistIds = [
  "PLYPjPMiw3_YsVockWfuuhoP86YPDUXp4f",
  "UU8butISFwT-Wl7EV0hUK0BQ",
  "PLpcSpRrAaOaoIqHQddZOdbRrzr5dJtgSs",
  "PLnXfazh66kVfUsfw9Oh5rBttZHaJe6HKB",
  "PLnXfazh66kVd0jXpYliCLAreHc4TDwnTf",
  "PLnXfazh66kVc8TRx1qmK3wshWs330_xsK",
];



export default function Course({ params: { slug } }: { params: { slug: string } }) {
  if (!playlistIds.includes(slug)) {
    return <div>Course not found</div>;
  }
  return <CoursePageContainer playlistId={slug} />;
}
