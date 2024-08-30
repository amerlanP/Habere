import type { APIRoute } from "astro";
import { app } from "../../../firebase/server";
import { getFirestore } from "firebase-admin/firestore";

import type { Habit } from "../../../React-Habere/src/utils/types";

export const GET: APIRoute = async ({ request }) => {
  try {
    //  get email from request
    const searchParams = new URL(request.url).searchParams;
    const email: string | null = searchParams.get("email");

    //  get reference to default habits category
    //  within database.
    //  -- will need to be changed to get from all
    //     categories eventually.
    const db = getFirestore(app);
    const categoryRef = await db
      .collection("habits")
      .doc(email!)
      .collection("categories")
      .doc("subCat")
      .collection("habitsCol");

    //  define habits to be returned
    const habits: Habit[] = [];

    //  build a Habit object for each entry in the
    //  default category and push to habits.
    //  -- will have to be modified when additional
    //     categories are implemented.

    await categoryRef.get().then((querySnapshot) => {
      querySnapshot.forEach((docData) => {

        
        if (docData.exists) {
          const data = docData.data();
        
            const h: Habit = {
              id: data!.id,
              name: data!.name,
              description: data!.description,
              category: "default",
              email: email as string,
              streak: data!.streak,
            };

            habits.push(h);
          
        } else {
          console.log("no habits to grab");
        }
      });
    });

    return new Response(JSON.stringify(habits));
  } catch (error) {
    console.log(error);
    return new Response("Something went wrong", {
      status: 500,
    });
  }
};
