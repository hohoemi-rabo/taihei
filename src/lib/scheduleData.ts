import { Schedule, ClassInfo } from '@/types/schedule'

export const scheduleData: Schedule[] = [
  {
    dayOfWeek: '月',
    timeSlots: [
      {
        id: 'mon-1',
        startTime: '09:00',
        endTime: '10:00',
        className: '朝の健康体操教室',
        instructor: '山田先生',
        targetAge: 'シニア向け',
        capacity: 20,
        description: 'ゆったりとした動きで体をほぐします'
      },
      {
        id: 'mon-2',
        startTime: '16:00',
        endTime: '17:00',
        className: '子供の体操教室',
        instructor: '田中先生',
        targetAge: '小学生低学年',
        capacity: 15,
        description: '楽しく基礎体力を身につけます'
      }
    ]
  },
  {
    dayOfWeek: '火',
    timeSlots: [
      {
        id: 'tue-1',
        startTime: '10:00',
        endTime: '11:30',
        className: '笑いの活脳体操教室',
        instructor: '鈴木先生',
        targetAge: '全年齢',
        capacity: 25,
        description: '笑いながら脳を活性化'
      },
      {
        id: 'tue-2',
        startTime: '19:00',
        endTime: '20:30',
        className: '出会い活（婚活）',
        instructor: '佐藤先生',
        targetAge: '20-40代',
        capacity: 20,
        description: '運動を通じた出会いの場'
      }
    ]
  },
  {
    dayOfWeek: '水',
    timeSlots: [
      {
        id: 'wed-1',
        startTime: '09:00',
        endTime: '10:00',
        className: '朝の健康体操教室',
        instructor: '山田先生',
        targetAge: 'シニア向け',
        capacity: 20,
        description: 'ゆったりとした動きで体をほぐします'
      },
      {
        id: 'wed-2',
        startTime: '16:00',
        endTime: '17:00',
        className: '子供の体操教室',
        instructor: '田中先生',
        targetAge: '小学生低学年',
        capacity: 15,
        description: '楽しく基礎体力を身につけます'
      }
    ]
  },
  {
    dayOfWeek: '木',
    timeSlots: [
      {
        id: 'thu-1',
        startTime: '13:00',
        endTime: '15:00',
        className: 'ニュースポーツ囲碁ボール',
        instructor: '高橋先生',
        targetAge: '全年齢',
        capacity: 16,
        description: '頭と体を使う新感覚スポーツ'
      },
      {
        id: 'thu-2',
        startTime: '16:00',
        endTime: '17:00',
        className: '子供の体操教室',
        instructor: '田中先生',
        targetAge: '小学生低学年',
        capacity: 15,
        description: '楽しく基礎体力を身につけます'
      }
    ]
  },
  {
    dayOfWeek: '金',
    timeSlots: [
      {
        id: 'fri-1',
        startTime: '09:00',
        endTime: '10:00',
        className: '朝の健康体操教室',
        instructor: '山田先生',
        targetAge: 'シニア向け',
        capacity: 20,
        description: 'ゆったりとした動きで体をほぐします'
      },
      {
        id: 'fri-2',
        startTime: '10:30',
        endTime: '12:00',
        className: '笑いの活脳体操教室',
        instructor: '鈴木先生',
        targetAge: '全年齢',
        capacity: 25,
        description: '笑いながら脳を活性化'
      }
    ]
  },
  {
    dayOfWeek: '土',
    timeSlots: [
      {
        id: 'sat-1',
        startTime: '10:00',
        endTime: '11:00',
        className: '子供の体操教室',
        instructor: '田中先生',
        targetAge: '小学生低学年',
        capacity: 15,
        description: '楽しく基礎体力を身につけます'
      },
      {
        id: 'sat-2',
        startTime: '13:00',
        endTime: '15:00',
        className: 'ニュースポーツ囲碁ボール',
        instructor: '高橋先生',
        targetAge: '全年齢',
        capacity: 16,
        description: '頭と体を使う新感覚スポーツ'
      },
      {
        id: 'sat-3',
        startTime: '18:00',
        endTime: '19:30',
        className: '出会い活（婚活）',
        instructor: '佐藤先生',
        targetAge: '20-40代',
        capacity: 20,
        description: '運動を通じた出会いの場'
      }
    ]
  },
  {
    dayOfWeek: '日',
    timeSlots: []
  }
]

export const classInfoData: ClassInfo[] = [
  {
    id: 'kids',
    name: '子供の体操教室',
    description: '基礎体力向上と楽しい運動体験を提供。遊びを通じて運動の楽しさを学び、健康な体づくりをサポートします。',
    targetAge: '小学生低学年（6-9歳）',
    duration: '60分',
    capacity: 15,
    benefits: [
      '基礎体力の向上',
      '協調性の育成',
      '運動習慣の定着',
      '社会性の発達'
    ],
    color: 'primary'
  },
  {
    id: 'morning',
    name: '朝の健康体操教室',
    description: 'シニアの方も安心して参加できる、ゆったりとした健康体操プログラム。無理のない動きで健康維持をサポートします。',
    targetAge: 'シニア向け（60歳以上）',
    duration: '60分',
    capacity: 20,
    benefits: [
      '健康維持・増進',
      '筋力・柔軟性の向上',
      '転倒予防',
      '仲間づくり'
    ],
    color: 'secondary'
  },
  {
    id: 'brain',
    name: '笑いの活脳体操教室',
    description: '笑いながら脳を活性化。認知症予防にも効果的な楽しい体操教室。笑いとともに心も体も健康に。',
    targetAge: '全年齢',
    duration: '90分',
    capacity: 25,
    benefits: [
      '脳の活性化',
      '認知症予防',
      'ストレス解消',
      '免疫力向上'
    ],
    color: 'accent-green'
  },
  {
    id: 'matchmaking',
    name: '出会い活（婚活）',
    description: '運動を通じた自然な出会いの場。楽しく体を動かしながら、同じ趣味を持つ仲間と交流できます。',
    targetAge: '20-40代',
    duration: '90分',
    capacity: 20,
    benefits: [
      '自然な出会い',
      '共通の趣味',
      '健康的な交流',
      'コミュニケーション'
    ],
    color: 'accent-pink'
  },
  {
    id: 'igoball',
    name: 'ニュースポーツ囲碁ボール',
    description: '頭と体を使う新感覚スポーツ。戦略性と運動を組み合わせた、誰でも楽しめる交流会です。',
    targetAge: '全年齢',
    duration: '120分',
    capacity: 16,
    benefits: [
      '頭脳の活性化',
      '戦略的思考力',
      '世代間交流',
      '新しい体験'
    ],
    color: 'accent-purple'
  }
]