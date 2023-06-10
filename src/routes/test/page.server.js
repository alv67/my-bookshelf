// @ts-nocheck
import Airtable from 'airtable';

import { SECRET_API_KEY, AIRTABLE_DB_ID } from '$env/static/private';

const base = new Airtable({ apiKey: `${SECRET_API_KEY}` }).base(`${AIRTABLE_DB_ID}`)

/** @type {import('../books/$types').PageServerLoad} */
export async function load({ fetch, params }) {
  let query = base('Libri').select({
    // Selezioniamo i primi tre records 
    maxRecords: 3
  }).firstPage(function (err, records) {
    if (err) { console.error(err); return }
    records?.forEach((r) => console.log("! " + r))
    return { records: records }
  }
}

