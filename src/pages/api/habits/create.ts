import type { APIRoute } from "astro";
import { app } from "../../../firebase/server";
import { getFirestore} from "firebase-admin/firestore";

export const POST: APIRoute = async ({ request }) => {
  try {
    //  extract data from request
    const body = await request.json();
    const name: string = body.habit.name;
    const description: string = body.habit.description;
    //const category: string = body.habit.category;
    const email: string = body.habit.email;
    // const isComplete: string = body.isComplete;

    //  get reference to habits category
    //  within database.
    const db = getFirestore(app);
    const categoryRef = await db
      .collection("habits")
      .doc(email)
      .collection("categories")
      .doc("subCat")
      .collection("habitsCol")
      .doc(name);

      const colRef = await db
      .collection("habits")
      .doc(email)
      .collection("categories")
      .doc("subCat")
      .collection("habitsCol");

    let collectionSize = 0;
    let id = 0;
      
    colRef.get().then((qSnap) => {
      collectionSize = qSnap.size;

      if(collectionSize >= 1){
        id = collectionSize;
      }
    })


    //  if a document already exists at the reference,
    //  update it, otherwise create one and enter initial data.
    await categoryRef.get().then((docData) => {
      if (docData.exists) {
        categoryRef.update({
          id: id,
          name: name,
          description: description,
          streak: 0,
        });
      } else {
        categoryRef.set({
          id: id,
          name: name,
          description: description,
          streak: 0,
        });
      }
    });

    return new Response();
  } catch (error) {
    console.log(error);
    return new Response("Something went wrong", {
      status: 500,
    });
  }
};
