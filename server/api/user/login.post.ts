export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { email, password } = body;

  const data = (await $fetch("http://localhost:8080/api/user/login", {
    method: "POST",
    body: {
      email,
      password,
    },
  })) as { token: string };

  setCookie(event, "token", data.token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 60 * 60 * 24, // 1 day
  });
});
