import type { APIRoute } from "astro";
import { app } from "../../../firebase/server";
import { getFirestore, FieldValue } from "firebase-admin/firestore";

export const POST: APIRoute = async ({ request }) => {
  try {
    //  extract data from request
    const body = await request.json();
    const index: number = body.index;
    const email: string = body.email;
    const indexStreak: number = body.indexStreak;
    const name: string = body.name;

    //  get reference to habits category
    //  within database.
    const db = getFirestore(app);
    const completedRef = await db
      .collection("habits")
      .doc(email)
      .collection("categories")
      .doc("completed");

    const categoryRef = await db
      .collection("habits")
      .doc(email!)
      .collection("categories")
      .doc("subCat")
      .collection("habitsCol")
      .doc(name);

    // //  if a document already exists at the reference,
    // //  update it, otherwise create one and enter initial data.
    await completedRef.get().then((docData) => {
      if (docData.exists) {
        completedRef.update({
          completed: FieldValue.arrayUnion(index),
        });
      } else {
        completedRef.set({
          completed: FieldValue.arrayUnion(index),
        });
      }
    });

    await categoryRef.get().then((docData) => {
      if (docData.exists) {
        categoryRef.update({
          streak: indexStreak,
        });
      }
    });

    // await categoryRef.get().then((querySnapshot) => {
    //   querySnapshot.forEach((docData) => {

    //     if (docData.exists) {

    //       const documentRef = docData.ref;

    //         documentRef.update({
    //           streak: indexStreak,
    //         })

    //     }
    //      else {
    //       return new Response("doc doesn't even exist");
    //     }
    //   });
    // });

    return new Response(
      JSON.stringify("Habit completion finished successfully")
    );
  } catch (error) {
    console.log(error);
    return new Response("Something went wrong", {
      status: 500,
    });
  }
};
