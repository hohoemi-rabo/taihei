import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { newsData, categoryInfo } from '@/lib/newsData'
import { NewsCategory } from '@/types/news'
import { 
  CalendarDays,
  Filter,
  ChevronRight,
  Bell,
  Users,
  Calendar,
  Megaphone
} from 'lucide-react'

export default function NewsPage() {
  const getCategoryIcon = (category: NewsCategory) => {
    switch (category) {
      case 'important':
        return <Bell className="h-5 w-5" />
      case 'classroom':
        return <Users className="h-5 w-5" />
      case 'event':
        return <Calendar className="h-5 w-5" />
      default:
        return <Megaphone className="h-5 w-5" />
    }
  }

  const getCategoryStyle = (category: NewsCategory) => {
    switch (category) {
      case 'important':
        return 'bg-red-100 text-red-800 border-red-200'
      case 'classroom':
        return 'bg-blue-100 text-blue-800 border-blue-200'
      case 'event':
        return 'bg-green-100 text-green-800 border-green-200'
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <>
      <Header />
      <main>
        {/* Page Header */}
        <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                お知らせ
              </h1>
              <p className="mt-4 text-lg text-gray-600">
                泰平スタジオからの最新情報をお届けします
              </p>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-white border-b border-gray-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center mb-4 sm:mb-0">
                <Filter className="h-5 w-5 text-gray-500 mr-2" />
                <span className="text-sm font-medium text-gray-700">カテゴリー</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <button className="px-4 py-2 rounded-full bg-primary-100 text-primary-800 border border-primary-200 font-medium text-sm hover:bg-primary-200 transition-colors">
                  すべて
                </button>
                {Object.entries(categoryInfo).map(([key, info]) => (
                  <button
                    key={key}
                    className={`px-4 py-2 rounded-full border font-medium text-sm transition-colors hover:opacity-80 ${getCategoryStyle(key as NewsCategory)}`}
                  >
                    {info.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* News List */}
        <section className="py-16 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              {newsData.map((news) => (
                <article
                  key={news.id}
                  className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow overflow-hidden"
                >
                  <div className="p-6 sm:p-8">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                      <div className="flex-1">
                        {/* Category and Date */}
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium border ${getCategoryStyle(news.category)}`}>
                            {getCategoryIcon(news.category)}
                            {categoryInfo[news.category].name}
                          </div>
                          <div className="flex items-center text-sm text-gray-500">
                            <CalendarDays className="h-4 w-4 mr-1" />
                            {formatDate(news.publishedAt)}
                          </div>
                        </div>

                        {/* Title */}
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 hover:text-primary-600 transition-colors">
                          <a href={`/news/${news.id}`} className="block">
                            {news.title}
                          </a>
                        </h2>

                        {/* Excerpt */}
                        <p className="text-gray-600 leading-relaxed mb-4">
                          {news.excerpt}
                        </p>

                        {/* Read More Link */}
                        <a
                          href={`/news/${news.id}`}
                          className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors group"
                        >
                          続きを読む
                          <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </a>
                      </div>

                      {/* Placeholder for featured image */}
                      {news.imageUrl && (
                        <div className="w-full sm:w-48 h-32 bg-gray-200 rounded-xl flex items-center justify-center flex-shrink-0">
                          <span className="text-gray-500 text-sm">画像</span>
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <nav className="flex items-center gap-2">
                <button className="px-3 py-2 rounded-lg border border-gray-300 text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed" disabled>
                  前へ
                </button>
                <button className="px-4 py-2 rounded-lg bg-primary-600 text-white font-medium">
                  1
                </button>
                <button className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50">
                  2
                </button>
                <button className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50">
                  3
                </button>
                <button className="px-3 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50">
                  次へ
                </button>
              </nav>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}