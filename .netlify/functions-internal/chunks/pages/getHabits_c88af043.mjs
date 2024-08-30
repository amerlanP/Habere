import { a as app } from './account_f0235e34.mjs';
import { getFirestore } from 'firebase-admin/firestore';
import '../astro_c9e4c781.mjs';
import 'html-escaper';
import 'clsx';
import 'firebase-admin/app';
import 'firebase-admin/auth';

const GET = async ({ request }) => {
  try {
    const searchParams = new URL(request.url).searchParams;
    const email = searchParams.get("email");
    const db = getFirestore(app);
    const categoryRef = await db.collection("habits").doc(email).collection("categories").doc("default");
    const habits = [];
    await categoryRef.get().then((docData) => {
      const data = docData.data();
      let length = 0;
      if (data) {
        length = data.name.length;
      }
      for (let i = 0; i < length; i++) {
        const h = {
          name: data.name[i],
          description: data.description[i],
          category: "default",
          email,
          isComplete: data.completed[i]
        };
        habits.push(h);
      }
    });
    return new Response(JSON.stringify(habits));
  } catch (error) {
    console.log(error);
    return new Response("Something went wrong", {
      status: 500
    });
  }
};

export { GET };
