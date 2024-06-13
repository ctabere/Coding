export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-between">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row border border-yellow-400">
          <img src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
            className="max-w-sm rounded-lg shadow-2xl" />
          <div className="border border-rose-300">
            <h1 className="text-5xl font-bold border">Play kittenz</h1>
            <p className="py-6"></p>Think you can handle this level of cuteness? Welcome to Kittenz, where you'll match the fluffiest, sassiest kittens on the internet! Flip those cards, find those matches, and unleash a tsunami of adorable chaos.

Prepare for uncontrollable giggles, endless "awwws," and a serious case of kitten addiction. Only the bravest can conquer the cute! Are you up for the challenge? Play Kittenz now and get ready for a purr-splosion of fun! 🐾
            <button className="btn btn-primary">Get Started</button>
            <img
              src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
              className="max-w-sm rounded-lg shadow-2xl" />
          </div>
        </div>
      </div>
    </main>
  );
}
