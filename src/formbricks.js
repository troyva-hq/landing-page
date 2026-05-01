const ENV_ID = 'cmomkfdam61revi01g5t1zecv';
const SURVEY_ID = 'cmomkosjf60cbx1017ai6d0jl';
const QUESTION_ID = 'ritv19i7haz4ovplyuwt96ab';
const API_BASE = 'https://app.formbricks.com/api/v1/client';

export async function submitEmail(email) {
  const res = await fetch(`${API_BASE}/${ENV_ID}/responses`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      surveyId: SURVEY_ID,
      finished: true,
      data: { [QUESTION_ID]: email },
    }),
  });
  if (!res.ok) throw new Error('submission failed');
}

// Fetches real response count via Vercel proxy (/api/waitlist-count).
// Returns null on failure (caller falls back to offset).
export async function getResponseCount() {
  try {
    const res = await fetch('/api/waitlist-count');
    if (!res.ok) return null;
    const json = await res.json();
    return typeof json.count === 'number' ? json.count : null;
  } catch {
    return null;
  }
}
