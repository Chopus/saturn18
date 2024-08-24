import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = {
    token: "597044843:u0FhbrUJ",
    request: "6283879629360",
    limit: 100,
    lang: "ru"
  };
  
  const url = 'https://server.leakosint.com/';
  
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  const jsonResponse = await response.json();
  return NextResponse.json(jsonResponse);
}