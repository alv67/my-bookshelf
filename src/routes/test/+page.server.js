import Airtable from 'airtable'

import { SECRET_API_KEY, AIRTABLE_DB_ID } from '$env/static/private'

const base = new Airtable({ apiKey: `${SECRET_API_KEY}` }).base(`${AIRTABLE_DB_ID}`)

/** @type {import('../books/$types').PageServerLoad} */
export async function load({ fetch, params }) {
  let res = await base('Libri').select({ fields: ["Copertina", "Titolo", "Titolo Originale"] }).firstPage()

  console.log("!!!!!\n" + JSON.stringify(res))
  return {
    records: res.map((i) => i._rawJson)
  }
}
