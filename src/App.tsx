import { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [industry, setIndustry] = useState('');
  const [trend, setTrend] = useState('');
  const [idea, setIdea] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const generateIdea = async () => {
    setLoading(true);
    setError('');
    setIdea('');

    try {
      if (!industry.trim() || !trend.trim()) {
        throw new Error('Please enter both industry and trend');
      }

      const apiKey = import.meta.env.VITE_GROQ_API_KEY;
      if (!apiKey) {
        throw new Error('Groq API key is missing. Please check your environment variables.');
      }

      const prompt = `Give me a unique startup idea in the ${industry} industry that uses ${trend}. Return it in this format: "Startup Name: ..., One-liner Pitch: ...".`;

      const res = await axios.post(
        'https://api.groq.com/openai/v1/chat/completions',
        {
          model: 'llama3-8b-8192',
          messages: [{ role: 'user', content: prompt }],
          temperature: 0.7,
          max_tokens: 250
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
          },
        }
      );

      const reply = res.data.choices[0].message.content;
      setIdea(reply);
    } catch (err: unknown) {
      console.error('Error details:', err);

      if (axios.isAxiosError(err) && err.response && err.response.status === 429) {
        setError('Rate limit exceeded. Please try again later.');
      } else {
        setError('Something went wrong. Try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <h1 className="app-title">💡 Startup Idea Generator</h1>

      <div className="generator-container">
        <input
          type="text"
          placeholder="Industry (e.g., Food)"
          value={industry}
          onChange={(e) => setIndustry(e.target.value)}
          className="input-field"
        />

        <input
          type="text"
          placeholder="Trend (e.g., AI)"
          value={trend}
          onChange={(e) => setTrend(e.target.value)}
          className="input-field"
        />

        <button
          onClick={generateIdea}
          disabled={loading}
          className="generate-button"
        >
          {loading ? (
            <div className="loader-container2">
              <div className="loader loader1">
                <i></i><span></span>
              </div>
              <div className="loader loader2">
                <i></i><span></span>
              </div>
            </div>
          ) : (
            'Generate Idea 🚀'
          )}
        </button>

        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        {idea && (
          <div key={idea} className="idea-container">
            <pre className="idea-text">{idea}</pre>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
