import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { scheduleData, classInfoData } from '@/lib/scheduleData'
import { Clock, Users, Calendar, ChevronRight, CheckCircle } from 'lucide-react'

export default function SchedulePage() {
  const daysOfWeek = ['月', '火', '水', '木', '金', '土', '日']
  
  // 各教室の色を取得するヘルパー関数
  const getClassColor = (className: string) => {
    const classInfo = classInfoData.find(info => info.name === className)
    return classInfo?.color || 'primary'
  }

  // 色に応じたクラス名を返すヘルパー関数
  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: { bg: string, text: string, border: string } } = {
      'primary': {
        bg: 'bg-primary-100',
        text: 'text-primary-700',
        border: 'border-primary-500'
      },
      'secondary': {
        bg: 'bg-secondary-100',
        text: 'text-secondary-700',
        border: 'border-secondary-500'
      },
      'accent-green': {
        bg: 'bg-green-100',
        text: 'text-green-700',
        border: 'border-green-500'
      },
      'accent-pink': {
        bg: 'bg-pink-100',
        text: 'text-pink-700',
        border: 'border-pink-500'
      },
      'accent-purple': {
        bg: 'bg-purple-100',
        text: 'text-purple-700',
        border: 'border-purple-500'
      }
    }
    return colorMap[color] || colorMap['primary']
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
                スケジュール
              </h1>
              <p className="mt-4 text-lg text-gray-600">
                各教室の開催時間をご確認いただけます
              </p>
            </div>
          </div>
        </section>

        {/* Timetable Section */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">週間タイムテーブル</h2>
            
            {/* Desktop Timetable */}
            <div className="hidden lg:block overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="border border-gray-300 bg-gray-50 px-4 py-3 text-left font-semibold">時間</th>
                    {daysOfWeek.map(day => (
                      <th key={day} className="border border-gray-300 bg-gray-50 px-4 py-3 text-center font-semibold min-w-[140px]">
                        {day}曜日
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {/* 時間帯を生成（9:00-20:00） */}
                  {Array.from({ length: 12 }, (_, i) => i + 9).map(hour => (
                    <tr key={hour}>
                      <td className="border border-gray-300 px-4 py-2 text-sm font-medium bg-gray-50">
                        {hour}:00
                      </td>
                      {daysOfWeek.map(day => {
                        const daySchedule = scheduleData.find(s => s.dayOfWeek === day)
                        const timeSlot = daySchedule?.timeSlots.find(
                          slot => parseInt(slot.startTime.split(':')[0]) === hour
                        )
                        
                        if (timeSlot) {
                          const color = getClassColor(timeSlot.className)
                          const classes = getColorClasses(color)
                          const duration = parseInt(timeSlot.endTime.split(':')[0]) - parseInt(timeSlot.startTime.split(':')[0])
                          
                          return (
                            <td
                              key={day}
                              className={`border border-gray-300 p-2 ${classes.bg}`}
                              rowSpan={duration}
                            >
                              <div className="text-xs">
                                <div className={`font-bold ${classes.text}`}>
                                  {timeSlot.className}
                                </div>
                                <div className="text-gray-600 mt-1">
                                  {timeSlot.startTime} - {timeSlot.endTime}
                                </div>
                                {timeSlot.instructor && (
                                  <div className="text-gray-500 mt-1">
                                    {timeSlot.instructor}
                                  </div>
                                )}
                              </div>
                            </td>
                          )
                        }
                        
                        // 前の時間帯からの継続かチェック
                        const prevSlot = daySchedule?.timeSlots.find(slot => {
                          const start = parseInt(slot.startTime.split(':')[0])
                          const end = parseInt(slot.endTime.split(':')[0])
                          return start < hour && end > hour
                        })
                        
                        if (prevSlot) {
                          return null // rowSpanで既にセルが結合されている
                        }
                        
                        return (
                          <td key={day} className="border border-gray-300 p-2">
                            <div className="text-gray-400 text-xs text-center">-</div>
                          </td>
                        )
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Timetable */}
            <div className="lg:hidden space-y-4">
              {daysOfWeek.map(day => {
                const daySchedule = scheduleData.find(s => s.dayOfWeek === day)
                
                return (
                  <div key={day} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="bg-gray-50 px-4 py-3 font-semibold text-lg">
                      {day}曜日
                    </div>
                    <div className="p-4">
                      {daySchedule?.timeSlots.length === 0 ? (
                        <p className="text-gray-500 text-center py-4">定休日</p>
                      ) : (
                        <div className="space-y-3">
                          {daySchedule?.timeSlots.map(slot => {
                            const color = getClassColor(slot.className)
                            const classes = getColorClasses(color)
                            
                            return (
                              <div
                                key={slot.id}
                                className={`rounded-lg p-3 border-l-4 ${classes.bg} ${classes.border}`}
                              >
                                <div className="flex items-start justify-between">
                                  <div>
                                    <div className={`font-bold ${classes.text}`}>
                                      {slot.className}
                                    </div>
                                    <div className="text-sm text-gray-600 mt-1">
                                      <Clock className="inline-block w-4 h-4 mr-1" />
                                      {slot.startTime} - {slot.endTime}
                                    </div>
                                    {slot.instructor && (
                                      <div className="text-sm text-gray-500 mt-1">
                                        講師: {slot.instructor}
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>
                            )
                          })}
                        </div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Class Information Section */}
        <section className="py-16 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">教室情報</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {classInfoData.map(classInfo => {
                const classes = getColorClasses(classInfo.color)
                
                return (
                  <div key={classInfo.id} className="bg-white rounded-xl shadow-md overflow-hidden">
                    <div className={`h-2 ${classes.bg}`} />
                    <div className="p-6">
                      <h3 className={`text-xl font-bold ${classes.text} mb-3`}>
                        {classInfo.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        {classInfo.description}
                      </p>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-sm text-gray-600">
                          <Users className="w-4 h-4 mr-2 text-gray-400" />
                          対象: {classInfo.targetAge}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Clock className="w-4 h-4 mr-2 text-gray-400" />
                          時間: {classInfo.duration}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                          定員: {classInfo.capacity}名
                        </div>
                      </div>
                      <div className="border-t pt-4">
                        <p className="text-sm font-semibold text-gray-700 mb-2">こんな効果があります</p>
                        <ul className="space-y-1">
                          {classInfo.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-start text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Trial Application Section */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-3xl p-8 md:p-12 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">体験申込み受付中！</h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto">
                どの教室も初回は無料で体験いただけます。
                お気軽にお問い合わせください。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center rounded-full bg-white text-primary-600 px-8 py-3 text-base font-semibold hover:bg-gray-100 transition-colors"
                >
                  体験申込みフォームへ
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
                <a
                  href="tel:0265-XX-XXXX"
                  className="inline-flex items-center justify-center rounded-full border-2 border-white text-white px-8 py-3 text-base font-semibold hover:bg-white/10 transition-colors"
                >
                  電話で問い合わせる
                </a>
              </div>
              <div className="mt-8 text-sm">
                <p>お電話でのお問い合わせ</p>
                <p className="text-2xl font-bold mt-2">0265-XX-XXXX</p>
                <p className="mt-1">受付時間: 月〜土 9:00-20:00</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}