import { redirect } from 'next/navigation';
import data from './../data.json'
export function GET(request, {params}) {
    const index = data.findIndex(item => parseInt(params.id) === item.id );
    if(index === -1) {
        return redirect("/api/comments");
    }
  return Response.json(data[index]);
}

// Handling patch request
export async function PATCH(request, {params}) {
    const body = await request.json();
    const index = data.findIndex(item => parseInt(params.id) === item.id );
    if(index === -1) {
        return Response.json({message: 'invalid id'});
    }
    data[index] = { ...data[index], ...body };
  return Response.json(data);
}

export async function DELETE(request, {params}) {
    const index = data.findIndex(item => parseInt(params.id) === item.id );
    if(index === -1) {
        return Response.json({message: 'invalid id'});
    }
    data.splice(index, 1);
  return Response.json(data);
}