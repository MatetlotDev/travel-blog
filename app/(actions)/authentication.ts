'use server';

import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';

const secretKey = process.env.PASSWORD;
const key = new TextEncoder().encode(secretKey);

export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('1 hour from now')
    .sign(key);
}

export async function decrypt(input: string): Promise<any> {
  try {
    const { payload } = await jwtVerify(input, key, {
      algorithms: ['HS256'],
    });
    return payload;
  } catch {
    return null;
  }
}

export async function submitLoginPassword(formData: FormData) {
  const PASSWORD = process.env.PASSWORD;

  const userValue = formData.get('password');

  const isValid = PASSWORD === userValue;

  if (isValid) {
    const expires = new Date(Date.now() + 10 * 1000);
    const session = await encrypt({ isValid, expires });

    cookies().set('session', session, {
      httpOnly: true,
    });
  }
}

export async function getSession() {
  const session = cookies().get('session')?.value;
  if (!session) return null;
  return await decrypt(session);
}
