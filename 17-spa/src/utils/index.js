import { saveAs } from 'file-saver'
import { URL_API } from "../constants"

export async function kirimData(url, data) {
  const respon = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(_ => _.ok ? _.json() : null)

  return respon
}

export async function unduhKode(url, data) {
  const respon = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(_ => _.ok ? _.blob() : null)
    .then(blob => blob ? saveAs(blob, `${new Date().getTime()}-kode.png`) : null)

  return respon
}

export async function dapatkanOpsi() {
  return fetch(`${URL_API}/options`)
    .then(_ => _.ok ? _.json() : null)
}

export function validator(nilai) {
  return typeof nilai === 'string' || nilai === null
}
