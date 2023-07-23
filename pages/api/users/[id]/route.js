

// http://localhost:3000/api/users/:id

export async function GET(request, { params }) {
    
    const res = await fetch(`https://dummyjson.com/users/${params.id}`);
    const users = await res.json();

    return new Response(JSON.stringify(users))
}