const API_URL = "http://localhost:8000"

async function httpGetPlanets() {
  // TODO: Once API is ready.
  // Load planets and return as JSON.

  let res = await fetch(`${API_URL}/planets`)

  res = await res.json();
  return res;
}

async function httpGetLaunches() {
  // TODO: Once API is ready.
  // Load launches, sort by flight number, and return as JSON.
  let res = await fetch(`${API_URL}/launches`);
  res = await res.json();
  return res.sort((a,b)=>a.flightNumber - b.flightNumber);
}

async function httpSubmitLaunch(launch) {
  // TODO: Once API is ready.
  // Submit given launch data to launch system.
   return await fetch(`${API_URL}/launches`, {
    method:'POST',
    headers:{
      "Content-Type": 'application/json'
    },
    body:JSON.stringify(launch)
   })
}

async function httpAbortLaunch(id) {
  
    return await fetch(`${API_URL}/launches/${id}`, {
      method:'delete',
    });
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};