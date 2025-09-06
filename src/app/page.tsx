import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { 
  Heart, 
  Users, 
  Calendar, 
  MapPin, 
  Phone, 
  Mail,
  Clock,
  Smile,
  Activity,
  Star
} from 'lucide-react'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section id="hero" className="relative bg-gradient-to-br from-primary-50 to-secondary-50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">楽しく体を動かそう！</span>
                <span className="block text-primary-600 mt-2">泰平スタジオ</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
                飯田市の体操教室。低学年の小学生からシニアまで、
                幅広い年齢層の方々が楽しく体を動かせる教室です。
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#contact"
                  className="rounded-full bg-primary-600 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary-500 transition-colors"
                >
                  体験申込み
                </a>
                <a
                  href="#activities"
                  className="rounded-full border-2 border-primary-600 px-8 py-3 text-base font-semibold text-primary-600 hover:bg-primary-50 transition-colors"
                >
                  教室を見る
                </a>
              </div>
            </div>
            {/* Placeholder for main visual */}
            <div className="mt-16 mx-auto max-w-4xl">
              <div className="aspect-video bg-gray-200 rounded-2xl flex items-center justify-center">
                <span className="text-gray-500">メインビジュアル（写真/イラスト）</span>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section id="overview" className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">泰平スタジオとは</h2>
              <p className="mt-4 text-lg text-gray-600">
                地域の皆様の健康と笑顔を支える体操教室
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="text-center">
                <div className="mx-auto h-12 w-12 text-primary-600">
                  <Heart className="h-full w-full" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">健康的な体づくり</h3>
                <p className="mt-2 text-sm text-gray-600">
                  楽しく運動しながら健康な体を作ります
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto h-12 w-12 text-secondary-600">
                  <Users className="h-full w-full" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">幅広い年齢層</h3>
                <p className="mt-2 text-sm text-gray-600">
                  子供からシニアまで誰でも参加できます
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto h-12 w-12 text-accent-green">
                  <Smile className="h-full w-full" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">笑顔あふれる教室</h3>
                <p className="mt-2 text-sm text-gray-600">
                  明るく楽しい雰囲気で運動を楽しめます
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto h-12 w-12 text-accent-purple">
                  <Activity className="h-full w-full" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">多彩なプログラム</h3>
                <p className="mt-2 text-sm text-gray-600">
                  様々な教室をご用意しています
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Activities Section */}
        <section id="activities" className="py-20 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">活動内容</h2>
              <p className="mt-4 text-lg text-gray-600">
                年齢や目的に合わせた様々な教室をご用意しています
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Activity Cards */}
              <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-primary-100 flex items-center justify-center">
                  <Users className="h-24 w-24 text-primary-600" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">子供の体操教室</h3>
                  <p className="mt-2 text-gray-600">
                    基礎体力向上と楽しい運動体験を提供。小学生低学年向けのプログラムです。
                  </p>
                  <div className="mt-4">
                    <span className="inline-block rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-800">
                      小学生
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-secondary-100 flex items-center justify-center">
                  <Clock className="h-24 w-24 text-secondary-600" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">朝の健康体操教室</h3>
                  <p className="mt-2 text-gray-600">
                    シニアの方も安心して参加できる、ゆったりとした健康体操プログラムです。
                  </p>
                  <div className="mt-4">
                    <span className="inline-block rounded-full bg-secondary-100 px-3 py-1 text-sm font-medium text-secondary-800">
                      シニア向け
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-accent-green/20 flex items-center justify-center">
                  <Smile className="h-24 w-24 text-accent-green" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">笑いの活脳体操教室</h3>
                  <p className="mt-2 text-gray-600">
                    笑いながら脳を活性化。認知症予防にも効果的な楽しい体操教室です。
                  </p>
                  <div className="mt-4">
                    <span className="inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
                      全年齢
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-accent-pink/20 flex items-center justify-center">
                  <Heart className="h-24 w-24 text-accent-pink" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">出会い活（婚活）</h3>
                  <p className="mt-2 text-gray-600">
                    運動を通じた自然な出会いの場。楽しく体を動かしながら交流できます。
                  </p>
                  <div className="mt-4">
                    <span className="inline-block rounded-full bg-pink-100 px-3 py-1 text-sm font-medium text-pink-800">
                      成人向け
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-accent-purple/20 flex items-center justify-center">
                  <Activity className="h-24 w-24 text-accent-purple" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">ニュースポーツ囲碁ボール</h3>
                  <p className="mt-2 text-gray-600">
                    頭と体を使う新感覚スポーツ。戦略性と運動を組み合わせた交流会です。
                  </p>
                  <div className="mt-4">
                    <span className="inline-block rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-800">
                      全年齢
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6 text-center">
                  <Calendar className="mx-auto h-16 w-16 text-primary-600" />
                  <h3 className="mt-4 text-xl font-bold text-gray-900">スケジュールを見る</h3>
                  <p className="mt-2 text-gray-600">
                    各教室の開催時間をご確認いただけます
                  </p>
                  <a
                    href="/schedule"
                    className="mt-4 inline-block rounded-full bg-primary-600 px-6 py-2 text-sm font-semibold text-white hover:bg-primary-500 transition-colors"
                  >
                    詳細を見る
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Facility Section */}
        <section id="facility" className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">施設情報</h2>
              <p className="mt-4 text-lg text-gray-600">
                安全で快適な環境で運動を楽しめます
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">スタジオ設備</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-primary-600 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">広々とした運動スペース</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-primary-600 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">冷暖房完備で年中快適</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-primary-600 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">各種運動器具を完備</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-primary-600 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">更衣室・ロッカー完備</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-primary-600 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">駐車場完備</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">写真ギャラリー</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
                    <span className="text-gray-500 text-sm">施設写真1</span>
                  </div>
                  <div className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
                    <span className="text-gray-500 text-sm">施設写真2</span>
                  </div>
                  <div className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
                    <span className="text-gray-500 text-sm">施設写真3</span>
                  </div>
                  <div className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
                    <span className="text-gray-500 text-sm">施設写真4</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Media Section */}
        <section id="media" className="py-20 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">メディア</h2>
              <p className="mt-4 text-lg text-gray-600">
                教室の様子や最新情報をご覧いただけます
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">YouTube動画</h3>
                <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">YouTube動画埋め込みエリア</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Facebook</h3>
                <div className="bg-white rounded-lg p-6 h-96 overflow-y-auto">
                  <div className="space-y-4">
                    <div className="bg-gray-100 rounded p-4">
                      <p className="text-sm text-gray-600">Facebook投稿プレースホルダー1</p>
                    </div>
                    <div className="bg-gray-100 rounded p-4">
                      <p className="text-sm text-gray-600">Facebook投稿プレースホルダー2</p>
                    </div>
                    <div className="bg-gray-100 rounded p-4">
                      <p className="text-sm text-gray-600">Facebook投稿プレースホルダー3</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Access Section */}
        <section id="access" className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">アクセス</h2>
              <p className="mt-4 text-lg text-gray-600">
                飯田市の便利な立地にあります
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">スタジオ情報</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-primary-600 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">住所</p>
                      <p className="text-gray-600">〒395-0000 長野県飯田市○○町1-2-3</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-primary-600 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">電話番号</p>
                      <p className="text-gray-600">0265-XX-XXXX</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-primary-600 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">メール</p>
                      <p className="text-gray-600">info@taihei-studio.jp</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-primary-600 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">営業時間</p>
                      <p className="text-gray-600">月〜土: 9:00 - 20:00</p>
                      <p className="text-gray-600">日曜・祝日: 定休日</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">地図</h3>
                <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">Google Maps埋め込みエリア</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">お問い合わせ</h2>
              <p className="mt-4 text-lg text-gray-600">
                体験申込みやご質問はお気軽にお問い合わせください
              </p>
            </div>
            <div className="mt-12 max-w-2xl mx-auto">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    お名前 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm px-4 py-2 border"
                    placeholder="山田太郎"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    メールアドレス <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm px-4 py-2 border"
                    placeholder="example@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="inquiry-type" className="block text-sm font-medium text-gray-700">
                    お問い合わせ種別 <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="inquiry-type"
                    name="inquiry-type"
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm px-4 py-2 border"
                  >
                    <option value="">選択してください</option>
                    <option value="trial">体験申込み</option>
                    <option value="question">ご質問</option>
                    <option value="other">その他</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    メッセージ <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm px-4 py-2 border"
                    placeholder="お問い合わせ内容をご記入ください"
                  />
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-full bg-primary-600 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary-500 transition-colors"
                  >
                    送信する
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}