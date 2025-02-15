export const dynamic = "force-static";
import { NextResponse } from "next/server";

const mockData: Array<string> = [
  "PLYPjPMiw3_YsVockWfuuhoP86YPDUXp4f",
  "UU8butISFwT-Wl7EV0hUK0BQ",
  "PLpcSpRrAaOaoIqHQddZOdbRrzr5dJtgSs",
  "PLnXfazh66kVfUsfw9Oh5rBttZHaJe6HKB",
  "PLnXfazh66kVd0jXpYliCLAreHc4TDwnTf",
  "PLnXfazh66kVc8TRx1qmK3wshWs330_xsK",
];


export async function POST(request: Request) {
  const { id } = await request.json();
  console.log(request.body);
  if (typeof id !== "string") {
    return NextResponse.json({ message: "Bad Request" }, { status: 400 });
  }

  if (mockData.includes(id)) {
    return NextResponse.json(id, { status: 200 });
  }
  return NextResponse.json({ message: "Not Found" }, { status: 404 });
}

export async function GET() {
  // 405
  return NextResponse.json({ message: "Method Not Allowed" }, { status: 405 });
}
