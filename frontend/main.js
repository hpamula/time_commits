async function sendJSON(route, data={}) {
  try {
    const res = await fetch(route, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (!res.ok) {
      console.error(`Server error: ${res.status} ${res.statusText}`);
      return { error: `Server error: ${res.status}` };
    }
    return res.json();
  } catch (err) {
    console.error('Network or parsing error:', err);
    return { error: 'Network or parsing error' };
  }
}
function addButton(text, onClick) {
  const btn = document.createElement('button');
  btn.textContent = text;
  btn.onclick = onClick;
  document.body.insertBefore(btn, document.currentScript);
}

addButton('Log in web console server time', async () => {
  console.log(await sendJSON('/api/activity'));
});
addButton('Send and log in web console', async () => {
  console.log(await sendJSON('/api/activity', { activity: 'work', time: new Date().toISOString() }));
});
