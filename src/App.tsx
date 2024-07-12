import './App.css'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import { Mousewheel, Pagination } from 'swiper/modules'

const srcMap = [
  {
    src: '/images/bc0.jpg',
    date: '2020-02-09',
    title: '星期六 小雨',
    auth: '·°南風起等亇lαi',
    text: '后来职高的风也没有吹过普高，那年的爱留在盛夏，遗憾也被东风吹走🎈',
    room: '天字一号房',
  },
  {
    src: '/images/bc1.jpg',
    date: '2020-02-15',
    title: '星期六 小雨',
    auth: '温柔扌ヨ墓яεηヽ',
    text: '讲真的, 你在我心里的位置, 我自己都羡慕💔',
    room: '地字一号房',
  },
  {
    src: '/images/bc2.jpg',
    date: '2020-03-20',
    title: '星期六 小雨',
    auth: '﹏ー懜dυΘ年〆',
    text: '明明隔着屏幕, 却还能影响到我的心情, 明明心是我的, 那里面满满都是你',
    room: '玄字一号房',
  },
  {
    src: '/images/bc3.jpg',
    date: '2020-05-04',
    title: '星期六 小雨',
    auth: '⿺﹎單裑m^',
    text: '穷就不要谈恋爱了, 谈着谈着, 你又娶不了她😭',
    room: '黄字一号房',
  },
]
const onCall = ()=>{
  alert('确定致电订房?')
}
export default function App() {
  return (
    <>
      <div className="top">
        <div className="title">
          <div className="text text1">惊</div>
          <div className="text text2">蛰</div>
        </div>
        <div className="main">
          <Swiper
            direction={'vertical'}
            slidesPerView={1}
            spaceBetween={0}
            mousewheel={true}
            pagination={{
              clickable: true,

              dynamicBullets: true,
            }}
            fadeEffect={{ crossFade: true }}
            modules={[Mousewheel, Pagination]}
            className="mySwiper">
            {srcMap.map((e) => {
              return (
                <SwiperSlide>
                  <div className="slider__content">
                    <span className="slider__date">
                      {e.date} -- {e.title}
                    </span>
                    <div className="slider__auth">{e.auth}</div>
                    <div className="slider__text">{e.text}</div>
                    <div className="slider__room">
                      推荐订阅: <button className='btn-grad' onClick={()=>{onCall()}}>{e.room}</button>
                    </div>
                  </div>
                  <img src={e.src} key={e.src} alt="威海" loading="lazy" />
                  <div className="swiper-lazy-preloader">加载中...</div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>
      {/* <div>button</div> */}
    </>
  )
}
