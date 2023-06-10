import { SECRET_API_KEY } from '$env/static/private'

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, params }) {
  const res = await fetch("https://api.airtable.com/v0/appdk53FVT4FUkE80/Libri", {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${SECRET_API_KEY}`
    }
  })
  let body = await res.json()
  console.log("!!!!!\n" + JSON.stringify(body.records[0]))
  return {
    records: await body.records
  }
}