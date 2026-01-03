# 🧠 AI-Powered Interview & Learning Assistant

This is a full-stack **Next.js 14** project enhanced with powerful AI features including real-time interviews, personalized course generation, and interactive PDF analysis.

Built using:
- **Next.js App Router**
- **Vapi for real-time voice interviews**
- **OpenAI / Gemini APIs**
- **LangChain / LlamaIndex**

---

## 🌟 Key Features

### 🎙️ 1. Real-Time AI Interview (Vapi Integration)
- Conducts **mock interviews** in real time using **voice input and output**.
- Provides **instant feedback** after the session using structured evaluation.
- Built with **Vapi Web SDK** and connected to **OpenAI** or **OpenRouter**.

### 📚 2. AI Course Generator
- Enter a topic or goal.
- The AI builds a **custom learning plan**, complete with modules, resources, and timelines.
- Uses LLM + curated web sources for updated course content.

### 📄 3. PDF Analyzer with Q&A
- Upload any **PDF file**.
- Ask **natural language questions** about the content.
- Uses **document chunking, embedding**, and **LLM-based retrieval** (via Pinecone or local vector store).

---

## 🔧 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/ai-interview-platform.git
cd ai-interview-platform

```
## 🔧 Install Dependencies

### 2. Put these lines in the vs code working folder

```bash
npm install
# or
yarn install

```
## 🔧  Environment Variables

### 3. Create a .env.local file in the root with the following:

```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key

OPENAI_API_KEY=your_openai_key
VAPI_API_KEY=your_vapi_key

PINECONE_API_KEY=your_pinecone_key
PINECONE_ENVIRONMENT=your_pinecone_env
PINECONE_INDEX=your_index_name


```
## 🔧 Run the App Locally

```bash
npm run dev
# or
yarn dev

```

## Visit http://localhost:3000 in your browser.

---

## 🧭 How to Explore the App


### AI Interview
💡 Tech Note: Uses @vapi-ai/web to handle voice streams and events.
- **Navigate to /interview or click "Start Interview" on the homepage.**
- **Choose your interview type (Frontend, Backend, System Design, etc.)**
- **Speak into the microphone — the AI responds in real-time.**
- **After the session, get structured JSON feedback: strengths, improvements, scores.**



### Course Generator
💡 Tech Note: Powered by OpenAI + Web search + custom prompt engineering.
- **Go to /course-generator.**
- **Enter your topic or career goal (e.g., "Learn MERN stack", "DSA for interviews").**
- **AI creates a multi-week learning plan with topics, resources, and tasks.**

### PDF Analyzer
💡 Tech Note: Uses LlamaIndex + vector storage (Pinecone or FAISS).
- **Visit /pdf-chat or /analyzer.**
- **Upload a .pdf file.**
- **Ask any question related to the content (e.g., "Summarize chapter 2", "What is the definition of XYZ?").**
- **AI returns contextual answers from inside the document.**



## 📦 Folder Structure
```

├── app/                # App directory (App Router)
│   ├── interview/      # Vapi integration for voice interviews
│   ├── analyzer/       # PDF upload and chat interface
│   ├── course-generator/
│   └── layout.js       # Shared layout
├── components/         # Reusable components
├── lib/                # Vapi setup, OpenAI wrappers
├── public/
├── styles/
├── utils/              # Helpers, prompts, etc.
└── .env.local          # Your API keys

```


## 🤝 Contributing
- Fork the repo
- Create a feature branch: git checkout -b my-feature
- Commit your changes
- Push and create a PR

## 📬 Feedback & Contact
- Feel free to reach out or raise an issue if you encounter bugs or want to request features.


