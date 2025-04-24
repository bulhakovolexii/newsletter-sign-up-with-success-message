import "./style.css";
import successSvg from "/images/icon-success.svg";

const main = document.getElementById("main") as HTMLElement;
const form = document.getElementById("form") as HTMLFormElement;
const field = document.getElementById("email") as HTMLInputElement;
const errorBox = document.getElementById("email-error") as HTMLSpanElement;

function isValidEmail(email: string): boolean {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function handleSubmit(e: Event): void {
  e.preventDefault();
  const email = field.value.trim();
  const data: Record<string, string> = {};

  if (!email) {
    errorBox.innerText = "Email is required.";
    field.classList.add("invalid");
    field.focus();
    return;
  }

  if (!isValidEmail(email)) {
    errorBox.innerText = "Please enter a valid email address.";
    field.classList.add("invalid");
    field.focus();
    return;
  }

  data[field.name] = email;
  field.classList.remove("invalid");

  main.innerHTML = `
      <section
        class="flex flex-col gap-6 px-6 pt-37 pb-7.5 md:max-h-118 md:max-w-114 md:px-10 md:pt-6"
      >
        <img src="${successSvg}" alt="" class="max-w-16" />
        <h1
          class="pt-4 text-[2.5rem]/10 font-bold md:pt-4.5 md:text-[3.5rem]/13.5"
        >
          Thanks for subscribing!
        </h1>
        <p class="text-blue-700">
          A confirmation email has been sent to
          <strong>${data.email}</strong>. Please open it and click the
          button inside to confirm your subscription.
        </p>
        <a
          href=""
          class="mt-60 block cursor-pointer justify-self-end rounded-lg bg-gradient-to-r from-blue-800 to-blue-800 py-4 text-center text-white outline-offset-2 transition hover:bg-gradient-to-r hover:from-rose-400 hover:to-red-400 hover:shadow-2xl hover:shadow-red-400/50 focus-visible:outline-blue-800 md:mt-4 md:mb-3"
        >
          Dismiss message
        </a>
      </section>
  `;
}

form?.addEventListener("submit", handleSubmit);
