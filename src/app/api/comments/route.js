import data from './data.json'
import { headers, cookies } from 'next/headers';
export function GET(request) {
  // working with url parameters
  const { searchParams } = new URL(request.url);
  const search = searchParams.get('search');

  const requestHeaders = new Headers(request.headers);
  console.log(requestHeaders.get("Authorization")); // this is a key in request headers
  console.log(headers().get("Authorization")); // this is a key in request headers

  const getCookies = request.cookies;
  console.log(getCookies.get('theme'));

  // set the cookies
  cookies().set("name", "vishnu vardhan");
  cookies().set("resultsPerPage", 20);
  console.log(cookies().get("resultsPerPage"));

  // for learning purpose
  return new Response('<h1>Testing Headers</h1>', {
    status: 201,
    headers: { 'Content-Type': 'text/html',
      'set-cookie': 'theme=dark' // setting the cookies using set-cookie
      },
  });


  // let filterData = data;
  // if(search) {
  //   filterData = filterData.filter(item => item.comment.includes(search));
  // }
  // return Response.json(filterData);
}

export async function POST(request) {

  // this async and await is mandatory and most important
  const comment = await request.json();
  data.push(comment);
  return new Response(JSON.stringify(data), {
    status: 201,
    headers: { 'Content-Type': 'application/json' },
  });
}