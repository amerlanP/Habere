import type { APIRoute } from "astro";
import { getAuth} from "firebase-admin/auth";
import { app } from "../../../firebase/server";
import type {  } from "firebase-admin";


export const PUT: APIRoute = async ({ request }) => {
    
    const auth = getAuth(app);

    console.log(auth.createCustomToken);


    // /* Get form data */
    const requestBody = await request.json();

  // Access the data from the parsed body
    const { userId, newPassword } = requestBody;
    
    // const newPassword = formData.get("newPassword")?.toString();
    // const userId = formData.get("userId")?.toString();
  
    if (!newPassword || newPassword.length < 6) {
      return new Response("Password must be at least 6 characters long", { status: 400 });
    }

  
    // /* Update password */
    try {
      await auth.updateUser(userId!, {
        password: newPassword,
      });
    } catch (error) {
        console.log(error);
      return new Response("Error updating password", { status: 400 });
    }
  
    return new Response("Updated password", {status: 200});
};