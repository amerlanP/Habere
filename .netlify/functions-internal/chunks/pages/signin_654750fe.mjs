import { a as app } from './account_f0235e34.mjs';
import { getAuth } from 'firebase-admin/auth';
import '../astro_c9e4c781.mjs';
import 'html-escaper';
import 'clsx';
import 'firebase-admin/app';

const GET = async ({ request, cookies, redirect }) => {
  const auth = getAuth(app);
  const idToken = request.headers.get("Authorization")?.split("Bearer ")[1];
  if (!idToken) {
    return new Response("No token found", { status: 401 });
  }
  try {
    await auth.verifyIdToken(idToken);
  } catch (error) {
    console.log(error);
    return new Response("Invalid token", { status: 401 });
  }
  const fiveDays = 60 * 60 * 24 * 5 * 1e3;
  const sessionCookie = await auth.createSessionCookie(idToken, {
    expiresIn: fiveDays
  });
  cookies.set("session", sessionCookie, {
    path: "/"
  });
  return redirect("/home");
};

export { GET };
