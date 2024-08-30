import { c as createAstro, d as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead } from '../astro_c9e4c781.mjs';
import 'html-escaper';
import 'clsx';
import { $ as $$Layout } from './account_f0235e34.mjs';
import 'firebase-admin/app';
import 'firebase-admin/auth';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Sign in" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="first-page-body"><h1 class="welcome">WELCOME TO HABERE!</h1><a href="/signin" class="btn btn-primary">Sign In</a><br><a href="/register" class="btn btn-primary">Create Account</a></div>` })}`;
}, "/home/leial/Habere2/src/pages/index.astro", void 0);

const $$file = "/home/leial/Habere2/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
