import { c as createAstro, d as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead } from '../astro_c9e4c781.mjs';
import 'html-escaper';
import 'clsx';
import { $ as $$Layout } from './account_f0235e34.mjs';
import 'firebase-admin/app';
import 'firebase-admin/auth';

const $$Astro = createAstro();
const $$Register = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Register;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Register" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="create-user"><h1 class="form-title">Create a New User</h1><form action="/api/auth/register" method="post"><div class="form-outline mb-4"><label for="name">Name</label><input id="name" name="name" class="form-control" placeholder="Enter First Name"></div><div class="form-outline mb-4"><label for="email">Email Id</label><input id="email" name="email" class="form-control" placeholder="Enter Email ID"></div><div class="form-outline mb-4"><label for="password">Password</label><input id="password" type="password" name="password" class="form-control" placeholder="Enter Password"></div><button id="createUserButton" type="submit" class="btn btn-primary" style="margin-top: 10px; width:24%; margin-bottom: 10px; text-decoration: underline 1.6px;">
Submit
</button><a href="/signin" class="btn btn-primary">Continue to Login</a><div class="hidden-info"><p id="msg-for-failure-sucess"></p></div></form></div>` })}`;
}, "/home/leial/Habere2/src/pages/register.astro", void 0);

const $$file = "/home/leial/Habere2/src/pages/register.astro";
const $$url = "/register";

export { $$Register as default, $$file as file, $$url as url };
