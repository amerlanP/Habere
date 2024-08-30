import { c as createAstro, d as createComponent, r as renderTemplate, h as renderComponent } from '../astro_c9e4c781.mjs';
import 'html-escaper';
import 'clsx';
import { a as app, $ as $$Layout } from './account_f0235e34.mjs';
import { getAuth } from 'firebase-admin/auth';
import 'firebase-admin/app';

const $$Astro = createAstro();
const $$Dashboard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Dashboard;
  const auth = getAuth(app);
  if (!Astro2.cookies.has("session")) {
    return Astro2.redirect("/signin");
  }
  const sessionCookie = Astro2.cookies.get("session").value;
  const decodedCookie = await auth.verifySessionCookie(sessionCookie);
  const user = await auth.getUser(decodedCookie.uid);
  if (!user) {
    return Astro2.redirect("/signin");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "home" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "App", null, { "client:only": "react", "userName": user.displayName, "email": user.email, "client:component-hydration": "only", "client:component-path": "/home/leial/Habere2/src/React-Habere/src/App", "client:component-export": "default" })}` })}`;
}, "/home/leial/Habere2/src/pages/dashboard.astro", void 0);

const $$file = "/home/leial/Habere2/src/pages/dashboard.astro";
const $$url = "/dashboard";

export { $$Dashboard as default, $$file as file, $$url as url };
