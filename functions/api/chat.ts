
const MODELS = ['gemini-3.1-flash-lite', 'gemini-3.5-flash'];

interface Env {
  GEMINI_API_KEY: string;
  ASSETS: { fetch: (url: URL) => Promise<Response> };
}

interface Message {
  role: 'user' | 'model';
  text: string;
}

export async function onRequestPost({ request, env }: { request: Request; env: Env }) {
  const { messages } = (await request.json()) as { messages: Message[] };


  const recent = messages.slice(-10).map((m) => ({
    role: m.role === 'model' ? 'model' : 'user',
    parts: [{ text: String(m.text).slice(0, 1000) }],
  }));

  const context = await (await env.ASSETS.fetch(new URL('/ai-context.json', request.url))).text();

  const instructions = `You are the assistant on Hadi Ayoub's portfolio website.

  Answer visitors' questions about Hadi, including his skills, projects, experience, education, background, and how to contact him.

  Use ONLY the information provided below. Never invent, assume, or exaggerate information about Hadi.
      If you don't know the answer or the information is not provided, say so and suggest contacting Hadi by email.

  If a question is not related to Hadi, his work, skills, projects, education, or portfolio, politely bring the conversation back to Hadi.

      When discussing Hadi's projects, briefly explain what the project does and the technologies used when that information is available.

  Keep answers short, clear, friendly, and professional. Avoid unnecessary details unless the visitor asks for more information.
      Reply in the same language as the visitor, including English, French, or Moroccan Darija when appropriate.

      Information about Hadi (JSON):
  ${context}`;

  let response: Response | undefined;
  for (const model of MODELS) {
    response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-goog-api-key': env.GEMINI_API_KEY },
      body: JSON.stringify({ systemInstruction: { parts: [{ text: instructions }] }, contents: recent }),
    });

    if (response.status !== 503 && response.status !== 429) break;
    console.warn(`Gemini model ${model} busy (${response.status}), trying the next one`);
  }

  if (!response || !response.ok) {
    console.error('Gemini error', response?.status, await response?.text());
    return Response.json({ error: 'The assistant is not available right now.' }, { status: 502 });
  }

  const data = (await response.json()) as { candidates?: { content?: { parts?: { text?: string }[] } }[] };
  const answer = data.candidates?.[0]?.content?.parts?.map((p) => p.text).join('') || '…';
  return Response.json({ answer });
}
