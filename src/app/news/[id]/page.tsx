import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { newsData, categoryInfo } from '@/lib/newsData'
import { NewsPost } from '@/types/news'
import { 
  ArrowLeft,
  CalendarDays,
  Clock,
  ChevronLeft,
  ChevronRight,
  Share2,
  Bell,
  Users,
  Calendar,
  Megaphone,
  Home,
  ChevronRight as BreadcrumbChevron
} from 'lucide-react'
import Link from 'next/link'

interface PageProps {
  params: {
    id: string
  }
}

// 静的パス生成
export async function generateStaticParams() {
  return newsData.map((news) => ({
    id: news.id,
  }))
}

// 動的メタデータ生成
export async function generateMetadata({ params }: PageProps) {
  const news = newsData.find((item) => item.id === params.id)
  
  if (!news) {
    return {
      title: 'お知らせが見つかりません - 泰平スタジオ'
    }
  }

  return {
    title: `${news.title} - 泰平スタジオ`,
    description: news.excerpt,
    openGraph: {
      title: news.title,
      description: news.excerpt,
      type: 'article',
      publishedTime: news.publishedAt,
      authors: ['泰平スタジオ'],
    },
    twitter: {
      card: 'summary_large_image',
      title: news.title,
      description: news.excerpt,
    }
  }
}

export default function NewsDetailPage({ params }: PageProps) {
  const news = newsData.find((item) => item.id === params.id)
  
  if (!news) {
    notFound()
  }

  // 前後の記事を取得
  const currentIndex = newsData.findIndex((item) => item.id === params.id)
  const prevNews = currentIndex > 0 ? newsData[currentIndex - 1] : null
  const nextNews = currentIndex < newsData.length - 1 ? newsData[currentIndex + 1] : null
  
  // 関連記事を取得（同じカテゴリーの他の記事）
  const relatedNews = newsData
    .filter((item) => item.category === news.category && item.id !== news.id)
    .slice(0, 3)

  const getCategoryIcon = (category: NewsPost['category']) => {
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

  const getCategoryStyle = (category: NewsPost['category']) => {
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
        {/* Breadcrumb */}
        <section className="bg-gray-50 py-4 border-b border-gray-200">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center space-x-2 text-sm">
              <Link href="/" className="flex items-center text-gray-500 hover:text-primary-600 transition-colors">
                <Home className="h-4 w-4 mr-1" />
                ホーム
              </Link>
              <BreadcrumbChevron className="h-4 w-4 text-gray-400" />
              <Link href="/news" className="text-gray-500 hover:text-primary-600 transition-colors">
                お知らせ
              </Link>
              <BreadcrumbChevron className="h-4 w-4 text-gray-400" />
              <span className="text-gray-900 font-medium truncate">{news.title}</span>
            </nav>
          </div>
        </section>

        {/* Article Header */}
        <section className="bg-white py-8">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            {/* Back to list link */}
            <div className="mb-6">
              <Link
                href="/news"
                className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors group"
              >
                <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                お知らせ一覧に戻る
              </Link>
            </div>

            {/* Category and Date */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium border ${getCategoryStyle(news.category)}`}>
                {getCategoryIcon(news.category)}
                {categoryInfo[news.category].name}
              </div>
              <div className="flex items-center text-gray-500 text-sm">
                <CalendarDays className="h-4 w-4 mr-1" />
                公開日: {formatDate(news.publishedAt)}
              </div>
              {news.updatedAt !== news.publishedAt && (
                <div className="flex items-center text-gray-500 text-sm">
                  <Clock className="h-4 w-4 mr-1" />
                  更新日: {formatDate(news.updatedAt)}
                </div>
              )}
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-8">
              {news.title}
            </h1>
          </div>
        </section>

        {/* Article Content */}
        <section className="bg-white py-8 border-b border-gray-200">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                {news.content}
              </div>
            </div>
          </div>
        </section>

        {/* Share Buttons */}
        <section className="bg-gray-50 py-6 border-b border-gray-200">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Share2 className="h-5 w-5 text-gray-500 mr-3" />
                <span className="text-sm font-medium text-gray-700">この記事をシェア</span>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={`https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}&text=${encodeURIComponent(news.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 rounded-lg bg-green-500 text-white text-sm font-medium hover:bg-green-600 transition-colors"
                >
                  LINE
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(news.title)}&url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 rounded-lg bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors"
                >
                  X
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors"
                >
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation to prev/next articles */}
        <section className="bg-white py-8 border-b border-gray-200">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {prevNews && (
                <Link
                  href={`/news/${prevNews.id}`}
                  className="group flex items-center p-4 rounded-xl border-2 border-gray-200 hover:border-primary-300 hover:bg-primary-50 transition-all"
                >
                  <ChevronLeft className="h-5 w-5 text-gray-400 group-hover:text-primary-600 mr-3 flex-shrink-0" />
                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-gray-500 mb-1">前の記事</p>
                    <p className="text-sm font-medium text-gray-900 group-hover:text-primary-600 truncate">
                      {prevNews.title}
                    </p>
                  </div>
                </Link>
              )}
              {nextNews && (
                <Link
                  href={`/news/${nextNews.id}`}
                  className="group flex items-center p-4 rounded-xl border-2 border-gray-200 hover:border-primary-300 hover:bg-primary-50 transition-all"
                >
                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-gray-500 mb-1 text-right">次の記事</p>
                    <p className="text-sm font-medium text-gray-900 group-hover:text-primary-600 truncate text-right">
                      {nextNews.title}
                    </p>
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-primary-600 ml-3 flex-shrink-0" />
                </Link>
              )}
            </div>
          </div>
        </section>

        {/* Related Articles */}
        {relatedNews.length > 0 && (
          <section className="bg-gray-50 py-12">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                関連記事
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedNews.map((relatedItem) => (
                  <Link
                    key={relatedItem.id}
                    href={`/news/${relatedItem.id}`}
                    className="group bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden"
                  >
                    <div className="p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium border ${getCategoryStyle(relatedItem.category)}`}>
                          {getCategoryIcon(relatedItem.category)}
                          {categoryInfo[relatedItem.category].name}
                        </div>
                      </div>
                      <h3 className="text-sm font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
                        {relatedItem.title}
                      </h3>
                      <p className="text-xs text-gray-600 mb-3 line-clamp-2">
                        {relatedItem.excerpt}
                      </p>
                      <div className="flex items-center text-xs text-gray-500">
                        <CalendarDays className="h-3 w-3 mr-1" />
                        {formatDate(relatedItem.publishedAt)}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  )
}