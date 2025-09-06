export default function Home() {
  return (
    <div className="min-h-screen p-8">
      {/* カラーパレットのテスト表示 */}
      <div className="max-w-7xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-gradient">
          泰平スタジオ - カラーパレットテスト
        </h1>
        
        {/* Primary Colors */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Primary Colors (ブルー系)</h2>
          <div className="grid grid-cols-5 md:grid-cols-10 gap-2">
            {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map(shade => (
              <div key={shade} className="text-center">
                <div className={`w-full h-20 rounded-lg bg-primary-${shade}`} />
                <span className="text-xs">{shade}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Secondary Colors */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Secondary Colors (オレンジ系)</h2>
          <div className="grid grid-cols-5 md:grid-cols-10 gap-2">
            {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map(shade => (
              <div key={shade} className="text-center">
                <div className={`w-full h-20 rounded-lg bg-secondary-${shade}`} />
                <span className="text-xs">{shade}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Accent Colors */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Accent Colors</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="w-full h-20 rounded-lg bg-accent-pink" />
              <span className="text-sm">Pink</span>
            </div>
            <div className="text-center">
              <div className="w-full h-20 rounded-lg bg-accent-green" />
              <span className="text-sm">Green</span>
            </div>
            <div className="text-center">
              <div className="w-full h-20 rounded-lg bg-accent-purple" />
              <span className="text-sm">Purple</span>
            </div>
            <div className="text-center">
              <div className="w-full h-20 rounded-lg bg-accent-yellow" />
              <span className="text-sm">Yellow</span>
            </div>
          </div>
        </div>

        {/* Gradients */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Gradients</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="h-32 rounded-2xl gradient-primary flex items-center justify-center">
              <span className="text-white font-bold">Primary Gradient</span>
            </div>
            <div className="h-32 rounded-2xl gradient-secondary flex items-center justify-center">
              <span className="text-white font-bold">Secondary Gradient</span>
            </div>
            <div className="h-32 rounded-2xl gradient-accent flex items-center justify-center">
              <span className="text-white font-bold">Accent Gradient</span>
            </div>
          </div>
        </div>

        {/* Sample Buttons */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Sample Components</h2>
          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-3 rounded-full bg-primary-500 text-white font-bold hover:bg-primary-600 transition-colors">
              Primary Button
            </button>
            <button className="px-6 py-3 rounded-full bg-secondary-500 text-white font-bold hover:bg-secondary-600 transition-colors">
              Secondary Button
            </button>
            <button className="px-6 py-3 rounded-full gradient-primary text-white font-bold hover:shadow-lg transition-shadow">
              Gradient Button
            </button>
            <button className="px-6 py-3 rounded-full border-2 border-primary-500 text-primary-500 font-bold hover:bg-primary-50 transition-colors">
              Outline Button
            </button>
          </div>
        </div>

        {/* Cards */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Sample Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-3xl shadow-lg p-6 border-t-4 border-primary-500">
              <h3 className="text-xl font-bold text-primary-700 mb-2">子供の体操教室</h3>
              <p className="text-gray-600">楽しく体を動かしながら、基礎体力を身につけます。</p>
            </div>
            <div className="bg-white rounded-3xl shadow-lg p-6 border-t-4 border-secondary-500">
              <h3 className="text-xl font-bold text-secondary-700 mb-2">朝の健康体操</h3>
              <p className="text-gray-600">シニアの方も安心して参加できる健康体操です。</p>
            </div>
            <div className="bg-white rounded-3xl shadow-lg p-6 border-t-4 border-accent-green">
              <h3 className="text-xl font-bold text-accent-green mb-2">笑いの活脳体操</h3>
              <p className="text-gray-600">笑いながら脳を活性化する楽しい体操教室です。</p>
            </div>
          </div>
        </div>

        {/* Typography */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Typography</h2>
          <div className="space-y-2">
            <h1 className="text-6xl font-bold">見出し1 - Heading 1</h1>
            <h2 className="text-4xl font-bold">見出し2 - Heading 2</h2>
            <h3 className="text-3xl font-bold">見出し3 - Heading 3</h3>
            <h4 className="text-2xl font-bold">見出し4 - Heading 4</h4>
            <p className="text-lg">本文テキスト - Body text with Noto Sans JP font</p>
            <p className="text-sm text-gray-600">キャプション - Caption text</p>
          </div>
        </div>
      </div>
    </div>
  );
}