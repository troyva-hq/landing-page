const ENV_ID = 'cmomkfdam61revi01g5t1zecv';
const SURVEY_ID = 'cmozxh5bdr4jey501jeyvix7w';
const QUESTION_ID = 'ha1wyxomk6b8ennn5oxdbwuh';
const QUESTION_ID_UNIVERSITY = 'oz17t57whrjkfdq6eb6v2i6g';
const QUESTION_ID_REFERENCE = 'pjvdxlab97l92qcheplvbc18';
const API_BASE = 'https://app.formbricks.com/api/v1/client';

export async function submitEmail(email, university, reference) {
  const res = await fetch(`${API_BASE}/${ENV_ID}/responses`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      surveyId: SURVEY_ID,
      finished: true,
      data: { [QUESTION_ID]: email, [QUESTION_ID_UNIVERSITY]: university, [QUESTION_ID_REFERENCE]: reference },
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
