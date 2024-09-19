import data from './data.json'
export function GET(request) {
  // working with url parameters
  const { searchParams } = new URL(request.url);
  const search = searchParams.get('search');
  let filterData = data;
  if(search) {
    filterData = filterData.filter(item => item.comment.includes(search));
  }
  return Response.json(filterData);
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