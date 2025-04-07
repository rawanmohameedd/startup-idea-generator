import { useState } from 'react';
import axios from 'axios';

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
      // Make sure industry and trend are not empty
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
          model: 'llama3-8b-8192', // Groq-optimized model
          messages: [{ role: 'user', content: prompt }],
          temperature: 0.7,
          max_tokens: 250
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`,
          },
        }
      );
      
      const reply = res.data.choices[0].message.content;
      setIdea(reply);
    } catch (err: unknown) {
      console.error('Error details:', err);
      
      // Provide specific error messages for Groq API issues
      if (axios.isAxiosError(err) && err.response && err.response.status === 429) {
        setError('Rate limit exceeded. Please try again later.');
      } else{
        setError('Something went wrong. Try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div >
      <h1>💡 Startup Idea Generator</h1>
      
      <div>
        
        <input
          type="text"
          placeholder="Industry (e.g., Food)"
          value={industry}
          onChange={(e) => setIndustry(e.target.value)}
        />
        
        <input
          type="text"
          placeholder="Trend (e.g., AI)"
          value={trend}
          onChange={(e) => setTrend(e.target.value)}
        />
        
        <button
          onClick={generateIdea}
          disabled={loading}
        >
          {loading ? 'Generating...' : 'Generate Idea 🚀'}
        </button>
        
        {error && (
          <div >
            {error}
          </div>
        )}
        
        {idea && (
          <div >
            <pre >{idea}</pre>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;