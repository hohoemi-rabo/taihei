import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { instructorProfile } from '@/lib/instructorData'
import { 
  Award,
  Calendar,
  Star,
  Heart,
  CheckCircle,
  Quote,
  Trophy,
  Target,
  Users
} from 'lucide-react'

export default function InstructorPage() {
  return (
    <>
      <Header />
      <main>
        {/* Page Header */}
        <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                講師紹介
              </h1>
              <p className="mt-4 text-lg text-gray-600">
                経験豊富な講師が皆様をサポートします
              </p>
            </div>
          </div>
        </section>

        {/* Profile Section */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Profile Photo */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <div className="aspect-square bg-gray-200 rounded-3xl flex items-center justify-center mb-6 shadow-lg">
                    <span className="text-gray-500 text-lg">講師写真</span>
                  </div>
                  <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      {instructorProfile.name}
                    </h2>
                    <p className="text-lg text-primary-600 font-medium mb-4">
                      {instructorProfile.title}
                    </p>
                    <div className="bg-gradient-to-r from-primary-100 to-secondary-100 rounded-2xl p-4">
                      <p className="text-sm font-medium text-gray-700 mb-2">モットー</p>
                      <p className="text-sm text-gray-600 italic">
                        "{instructorProfile.motto}"
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Profile Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Introduction */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <Users className="h-6 w-6 text-primary-600 mr-2" />
                    プロフィール
                  </h3>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                      {instructorProfile.introduction.trim()}
                    </p>
                  </div>
                </div>

                {/* Specialties */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <Target className="h-6 w-6 text-secondary-600 mr-2" />
                    専門分野
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {instructorProfile.specialties.map((specialty, index) => (
                      <div
                        key={index}
                        className="flex items-start bg-gray-50 rounded-lg p-3"
                      >
                        <Star className="h-5 w-5 text-accent-yellow mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{specialty}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Qualifications Section */}
        <section className="py-16 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 flex items-center justify-center">
                <Award className="h-8 w-8 text-primary-600 mr-3" />
                資格・認定
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                専門的な知識と技術を証明する資格を取得しています
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {instructorProfile.qualifications.map((qualification) => (
                <div
                  key={qualification.id}
                  className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <Award className="w-6 h-6 text-primary-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {qualification.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">
                        {qualification.organization}
                      </p>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 text-gray-400 mr-1" />
                        <span className="text-sm text-gray-500">
                          {qualification.year}年取得
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 flex items-center justify-center">
                <Trophy className="h-8 w-8 text-secondary-600 mr-3" />
                経歴
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                20年以上の指導経験で培った実績をご紹介します
              </p>
            </div>
            <div className="space-y-8">
              {instructorProfile.experience.map((exp, index) => (
                <div
                  key={exp.id}
                  className={`flex flex-col md:flex-row gap-6 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className="md:w-1/3">
                    <div className="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl p-6">
                      <div className="text-sm font-semibold text-primary-700 mb-2">
                        {exp.period}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {exp.title}
                      </h3>
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <div className="bg-white rounded-2xl border-2 border-gray-100 p-6 h-full">
                      <p className="text-gray-700 mb-4">
                        {exp.description}
                      </p>
                      {exp.highlights && (
                        <div>
                          <p className="text-sm font-semibold text-gray-700 mb-3">
                            主な実績・取り組み
                          </p>
                          <ul className="space-y-2">
                            {exp.highlights.map((highlight, highlightIndex) => (
                              <li
                                key={highlightIndex}
                                className="flex items-start text-sm text-gray-600"
                              >
                                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                {highlight}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-16 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">活動実績</h2>
              <p className="mt-4 text-lg text-gray-600">
                これまでの主な活動と表彰歴
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {instructorProfile.achievements.map((achievement) => (
                <div
                  key={achievement.id}
                  className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="aspect-video bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">活動写真プレースホルダー</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center">
                        <Trophy className="w-5 h-5 text-accent-yellow mr-2" />
                        <span className="text-sm font-medium text-gray-600">
                          {achievement.date}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Message Section */}
        <section className="py-16 bg-gradient-to-br from-primary-50 to-secondary-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 flex items-center justify-center">
                  <Heart className="h-8 w-8 text-accent-pink mr-3" />
                  講師からのメッセージ
                </h2>
              </div>
              <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 relative">
                <Quote className="absolute top-4 left-4 h-8 w-8 text-primary-200" />
                <Quote className="absolute bottom-4 right-4 h-8 w-8 text-primary-200 rotate-180" />
                <div className="prose prose-lg max-w-none text-center">
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line text-lg">
                    {instructorProfile.message.trim()}
                  </p>
                </div>
                <div className="text-center mt-8">
                  <p className="text-primary-600 font-bold text-lg">
                    {instructorProfile.name}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                一緒に楽しく体を動かしませんか？
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                初心者の方も経験者の方も大歓迎です。
                まずはお気軽に体験レッスンにお越しください。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/#contact"
                  className="inline-flex items-center justify-center rounded-full bg-primary-600 px-8 py-3 text-base font-semibold text-white hover:bg-primary-500 transition-colors"
                >
                  体験申込み・お問い合わせ
                </a>
                <a
                  href="/schedule"
                  className="inline-flex items-center justify-center rounded-full border-2 border-primary-600 text-primary-600 px-8 py-3 text-base font-semibold hover:bg-primary-50 transition-colors"
                >
                  スケジュールを見る
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}