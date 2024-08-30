import { c as createAstro, d as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead } from '../astro_c9e4c781.mjs';
import 'html-escaper';
import 'clsx';
import { a as app, $ as $$Layout } from './account_f0235e34.mjs';
import { getAuth } from 'firebase-admin/auth';
import 'firebase-admin/app';

const $$Astro = createAstro();
const $$Signin = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Signin;
  const auth = getAuth(app);
  if (Astro2.cookies.has("session")) {
    const sessionCookie = Astro2.cookies.get("session").value;
    const decodedCookie = await auth.verifySessionCookie(sessionCookie);
    if (decodedCookie) {
      return Astro2.redirect("/home");
    }
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Sign in" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="container"><h2>Habere</h2><form id="loginForm" action="/api/auth/signin" method="post"><div class="form-group" style="margin-bottom: 10px;"><label for="emailId">Email ID:</label><input type="text" class="form-control" id="emailId" name="email" required></div><div class="form-group"><label for="password">Password:</label><input type="password" class="form-control" id="password" name="password" required></div><button id="loginButton" type="submit" class="btn btn-primary">
Login
</button></form><div class="hidden-info mt-3"><p id="msg-for-failure"></p></div><div class="container mt-3 new-user-container"><p>Don't have an account? Sign up now!</p><a href="/register" class="btn btn-primary">Sign up</a></div></div>` })}`;
}, "/home/leial/Habere2/src/pages/signin.astro", void 0);

const $$file = "/home/leial/Habere2/src/pages/signin.astro";
const $$url = "/signin";

export { $$Signin as default, $$file as file, $$url as url };
