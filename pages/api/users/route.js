
// http://localhost:3000/api/users

export async function GET(request) {

    const res = await fetch('https://dummyjson.com/users');
    const users = await res.json();

    return new Response(JSON.stringify(users))
}