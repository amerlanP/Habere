import type { APIRoute } from "astro";
import { app } from "../../../firebase/server";
import { getFirestore } from "firebase-admin/firestore";

export const GET: APIRoute = async ({ request }) => {
  try {
    //  get email from request
    const searchParams = new URL(request.url).searchParams;
    const email = searchParams.get("email");

    //  get reference to default habits category
    //  within database.
    //  -- will need to be changed to get from all
    //     categories eventually.
    const db = getFirestore(app);
    const completedRef = await db
      .collection("habits")
      .doc(email as string)
      .collection("categories")
      .doc("completed");

    //  define habits to be returned
    const completed: number[] = [];

    //  build a Habit object for each entry in the
    //  default category and push to habits.
    //  -- will have to be modified when additional
    //     categories are implemented.
    await completedRef.get().then((docData) => {
      const data = docData.data();
      let length = 0;
      if (data) {
        length = data.completed.length;
      }

      for (let i = 0 ; i < length ; i++) {
        completed.push(data!.completed[i]);
      }
    })

    return new Response(JSON.stringify(completed));
  } catch (error) {
    console.log(error);
    return new Response("Something went wrong", {
      status: 500,
    });
  }
};
