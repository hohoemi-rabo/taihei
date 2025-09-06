import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { AlertCircle, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-gray-50 py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <AlertCircle className="mx-auto h-16 w-16 text-gray-400 mb-4" />
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                お知らせが見つかりません
              </h1>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                お探しのお知らせは削除されたか、URLが間違っている可能性があります。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/news"
                  className="inline-flex items-center justify-center rounded-full bg-primary-600 px-6 py-3 text-base font-semibold text-white hover:bg-primary-500 transition-colors"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  お知らせ一覧に戻る
                </Link>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center rounded-full border-2 border-gray-300 text-gray-700 px-6 py-3 text-base font-semibold hover:bg-gray-50 transition-colors"
                >
                  ホームページに戻る
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}