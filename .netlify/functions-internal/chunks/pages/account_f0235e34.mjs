import { c as createAstro, d as createComponent, r as renderTemplate, e as addAttribute, f as renderHead, g as renderSlot, h as renderComponent } from '../astro_c9e4c781.mjs';
import 'html-escaper';
import 'clsx';
import { initializeApp, cert } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';

const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"><head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title><link rel="stylesheet" href="/styles.css">${renderHead()}</head><body>${renderSlot($$result, $$slots["default"])}</body></html>`;
}, "/home/leial/Habere2/src/layouts/Layout.astro", void 0);

console.log("habere-48491");
const serviceAccount = {
  type: "service_account",
  project_id: "habere-48491",
  private_key_id: "cb10bc874698f02703724b4933106b0256c76b4f",
  private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCTWLBexW2Zxb3U\n4gnLc4pBDMb31zyt+hkgDxsoSOEWrh3wojbFofiJBEodfGBm8do9+qmg9xM8+CdV\n7S/WWB+HehpSwXsPmDjoGv1hJDkD+YWwl7KKP87jgFJJpmXJX2yfh6mD7gzoCLZw\nGizJ2nmfZD0unn4lQWuaf72mk7PkbhIM9XOd3/t59HaxrDHaiC3jC2XC12xRW/z7\nxIA7VKOGsny0DdRUekj22Z/VUPn1BCPNHWjy0GC6Ud4EZPlsJVLhvjFDum81Z3Dl\nC7UiA51AvV/JOxWx1GpiYPqgAR5T1uPLkTgRaKogh+N14om9gTc8L6tzjq5XNgep\nwWw8uh8LAgMBAAECggEAA9mm7isJhKGiprvrVpojzDRZxKMmrkMhQfGzG3fgDdgp\n5x5OARcM6AOpLiEQYdBDDCiPIyohog+382pZvCecV01s/6mXnh4zqnj+Evo/1SdB\ng45LN4qYTOCPBeantT3dmEOSveRMCQolPkOo1PN1ByG26Y9xq2aMucJJwd8NLdRa\nVFsYQxSFM86ZVnaW7v8kscygzr0nJxLsw/hvQhPIIubWYIupNr5l8XY47btTryj7\nzRKxCMm6O5OjP0rFnt5ckGwlc9TLxLdkPDy2DSOxxU1dZ5btEHSGIjo7jKon8hrz\nAIuOsjtIdhi3CUXZuIdf6KX3TvDh4kPch9ipb1bV4QKBgQDGfEHauDPLnzp+2NOZ\nIK4q2iMkIiwqugdP6fmFJBgpSa1LKKJhkrmo930usVdHwkCOw95Xibys3kytseKg\naQE6FfT1W6lvdsxsudl1TfE6TJ09gIQouBePJAdgwd8CSPZiXICVoeKLUYLyV9OV\nTaTTDLyJjeuBjDwTzbBIJwtc6wKBgQC+CuuQM11dLOZ+hwL9/e6wAI/3k17PDHGg\nTchnxHzzOOnLnE5omxe/yOweCA62PIfK1/2mh2JUqgkaDxY0lzZrWKXmB0XA9RIE\nTIpUevCKa1KhW0bJMM+twuRcOAUqumSQKMvVXkLSScxXJUA2YTJbXLBayqBJP52s\ncpLa/AE+YQKBgEVUqfwoU49QszITsvXOAIhfYd8BQMQ77snvRIVJMldZsPqL2wyS\nH9/xcvyYXZBnPf2gVU3mgs0vaUFS3YKCqzcK7GG3/ts8d/OSh27+JsDieho9hexj\nQXdyclFN5wP5UHbTMOcTgPqBImhcXT/Nu0EtNb4moJjDz0hrlKPfX4y5AoGAf0kj\nI68zjm+/ZemZ2HLXBq0pwCHFs5nbFQpj+xSAuAtblFN5tNiEHKE/fJHbALYkIXlv\nW7V758cHV5vZPJo3CckTPLGMR8QdMCHv2MuLBrsBWi+fhquZvgE2IIoo88hqCKA6\nfgunZ9+j7I53prSNHOJFAFqM5uKkAdevgtqdHqECgYBK5kJMjxI0a914z0a6G4Iu\n/ULjolT6ftA8TM0JrxplfAj52MY9wZT+HcH+Axd6rUEsXen7SFo/xs0gGKYXc6Lm\ny78TaT8eVtJb3ymIlt++cT9zZsfuKEnfcLrzyCwbesrJXMHuMAic6g0B6Mq/YFTk\nXsZ9/NmJm0jgPVKEXtE1Ww==\n-----END PRIVATE KEY-----\n",
  client_email: "firebase-adminsdk-eedol@habere-48491.iam.gserviceaccount.com",
  client_id: "109993751736736906133",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-eedol%40habere-48491.iam.gserviceaccount.com"
};
if (({}).EMULATOR) {
  console.log("Emulator Setting Up");
  process.env["FIREBASE_AUTH_EMULATOR_HOST"] = "localhost:9099";
  process.env["FIRESTORE_EMULATOR_HOST"] = "localhost:8080";
}
const app = initializeApp({
  credential: cert(serviceAccount)
});

const $$Astro = createAstro();
const $$Account = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Account;
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
}, "/home/leial/Habere2/src/pages/account.astro", void 0);

const $$file = "/home/leial/Habere2/src/pages/account.astro";
const $$url = "/account";

const account = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Account,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, app as a, account as b };
