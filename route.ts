import { NextResponse } from "next/server";

const TEST_EMAIL = "test@example.com";
const TEST_PASSWORD = "test1234";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();
    if (email === TEST_EMAIL && password === TEST_PASSWORD) {
      return NextResponse.json({ user: { email: TEST_EMAIL } });
    }
    return NextResponse.json({ error: "Неверный логин или пароль" }, { status: 401 });
  } catch (error) {
    return NextResponse.json({ error: "Ошибка при входе" }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json([]);
}
