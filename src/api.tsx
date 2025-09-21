// src/api/triggerHello.ts
export async function triggerHelloFromExpress(): Promise<string> {
  const res = await fetch('http://localhost:3000/');
  if (!res.ok) {
    throw new Error(`Request failed with status ${res.status}`);
  }
  return res.text();
}