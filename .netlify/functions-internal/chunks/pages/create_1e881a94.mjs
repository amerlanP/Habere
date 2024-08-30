import { a as app } from './account_f0235e34.mjs';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import '../astro_c9e4c781.mjs';
import 'html-escaper';
import 'clsx';
import 'firebase-admin/app';
import 'firebase-admin/auth';

const POST = async ({ request }) => {
  try {
    const body = await request.json();
    const name = body.name;
    const description = body.description;
    const category = body.category;
    const email = body.email;
    const isComplete = body.isComplete;
    const db = getFirestore(app);
    const categoryRef = await db.collection("habits").doc(email).collection("categories").doc(category);
    await categoryRef.get().then((docData) => {
      if (docData.exists) {
        categoryRef.update({
          name: FieldValue.arrayUnion(name),
          description: FieldValue.arrayUnion(description),
          completed: FieldValue.arrayUnion(isComplete)
        });
      } else {
        categoryRef.set({
          name: FieldValue.arrayUnion(name),
          description: FieldValue.arrayUnion(description),
          completed: FieldValue.arrayUnion(isComplete)
        });
      }
    });
    return new Response();
  } catch (error) {
    console.log(error);
    return new Response("Something went wrong", {
      status: 500
    });
  }
};

export { POST };
