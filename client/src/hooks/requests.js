const URL = 'http://localhost:5000'

async function httpGetPlanets() {
  // TODO: Once API is ready.
  let response = await fetch(`${URL}/planets`)
  console.log(response)
  return response.json()
  return ['test','testes']
  // return resp
  // Load planets and return as JSON.
}

async function httpGetLaunches() {
  // TODO: Once API is ready.
  // Load launches, sort by flight number, and return as JSON.
}

async function httpSubmitLaunch(launch) {
  // TODO: Once API is ready.
  // Submit given launch data to launch system.
}

async function httpAbortLaunch(id) {
  // TODO: Once API is ready.
  // Delete launch with given ID.
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};