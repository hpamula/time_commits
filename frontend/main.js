async function sendJSON(route, data) {
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

const btn1 = document.createElement('button');
btn1.textContent = 'Send + wait for response';
btn1.onclick = async () => {
  const response = await sendJSON('/api/respond', { action: 'btn1 clicked' });
  btn1.textContent = response.message || 'No message';
};
const btn2 = document.createElement('button');
btn2.textContent = 'Send + don’t wait';
btn2.onclick = () => {
  sendJSON('/api/respond', { action: 'btn2 clicked' });
};
document.body.appendChild(btn1);
document.body.appendChild(btn2);
