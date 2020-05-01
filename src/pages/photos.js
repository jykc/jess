import React from "react"


import Layout from '../components/Layout';

import Footer from '../components/Footer';
import SocialLinks from '../components/SocialLinks';
import Header from '../components/HeaderGallery';

import fullp01 from '../assets/images/fulls/p01.jpg'
import fullp02 from '../assets/images/fulls/p02.jpg'
import fullp03 from '../assets/images/fulls/p03.jpg'
import fullp04 from '../assets/images/fulls/p04.jpg'
import fullp05 from '../assets/images/fulls/p05.jpg'
import fullp06 from '../assets/images/fulls/p06.jpg'
import fullp07 from '../assets/images/fulls/p07.jpg'
import fullp08 from '../assets/images/fulls/p08.jpg'
import fullp09 from '../assets/images/fulls/p09.jpg'
import fullp10 from '../assets/images/fulls/p10.jpg'
import fullp11 from '../assets/images/fulls/p11.jpg'
import fullp12 from '../assets/images/fulls/p12.jpg'
import fullp13 from '../assets/images/fulls/p13.jpg'
import fullp14 from '../assets/images/fulls/p14.jpg'
import fullp15 from '../assets/images/fulls/p15.jpg'
import fullp16 from '../assets/images/fulls/p16.jpg'
import fullp17 from '../assets/images/fulls/p17.jpg'
import fullp18 from '../assets/images/fulls/p18.jpg'
import fullp19 from '../assets/images/fulls/p19.jpg'
import fullp20 from '../assets/images/fulls/p20.jpg'
import fullp21 from '../assets/images/fulls/p21.jpg'
import fullp22 from '../assets/images/fulls/p22.jpg'
import fullp23 from '../assets/images/fulls/p23.jpg'
import fullp24 from '../assets/images/fulls/p24.jpg'
import thumbp01 from '../assets/images/thumbs/p01.jpg'
import thumbp02 from '../assets/images/thumbs/p02.jpg'
import thumbp03 from '../assets/images/thumbs/p03.jpg'
import thumbp04 from '../assets/images/thumbs/p04.jpg'
import thumbp05 from '../assets/images/thumbs/p05.jpg'
import thumbp06 from '../assets/images/thumbs/p06.jpg'
import thumbp07 from '../assets/images/thumbs/p07.jpg'
import thumbp08 from '../assets/images/thumbs/p08.jpg'
import thumbp09 from '../assets/images/thumbs/p09.jpg'
import thumbp10 from '../assets/images/thumbs/p10.jpg'
import thumbp11 from '../assets/images/thumbs/p11.jpg'
import thumbp12 from '../assets/images/thumbs/p12.jpg'
import thumbp13 from '../assets/images/thumbs/p13.jpg'
import thumbp14 from '../assets/images/thumbs/p14.jpg'
import thumbp15 from '../assets/images/thumbs/p15.jpg'
import thumbp16 from '../assets/images/thumbs/p16.jpg'
import thumbp17 from '../assets/images/thumbs/p17.jpg'
import thumbp18 from '../assets/images/thumbs/p18.jpg'
import thumbp19 from '../assets/images/thumbs/p19.jpg'
import thumbp20 from '../assets/images/thumbs/p20.jpg'
import thumbp21 from '../assets/images/thumbs/p21.jpg'
import thumbp22 from '../assets/images/thumbs/p22.jpg'
import thumbp23 from '../assets/images/thumbs/p23.jpg'
import thumbp24 from '../assets/images/thumbs/p24.jpg'

import Gallery from '../components/Gallery'

const DEFAULT_IMAGES = [
  {
    id: '1',
    source: fullp01,
    thumbnail: thumbp01,
    caption: 'Jess Photo 1',
  },
  {
    id: '2',
    source: fullp02,
    thumbnail: thumbp02,
    caption: 'Jess Photo 2',
  },
  {
    id: '3',
    source: fullp03,
    thumbnail: thumbp03,
    caption: 'Jess Photo 3',
  },
  {
    id: '4',
    source: fullp04,
    thumbnail: thumbp04,
    caption: 'Jess Photo 4',
  },
  {
    id: '5',
    source: fullp05,
    thumbnail: thumbp05,
    caption: 'Jess Photo 5',
  },
  {
    id: '6',
    source: fullp06,
    thumbnail: thumbp06,
    caption: 'Jess Photo 6',
  },
  {
    id: '7',
    source: fullp07,
    thumbnail: thumbp07,
    caption: 'Jess Photo 7',
  },
  {
    id: '8',
    source: fullp08,
    thumbnail: thumbp08,
    caption: 'Jess Photo 8',
  },
  {
    id: '9',
    source: fullp09,
    thumbnail: thumbp09,
    caption: 'Jess Photo 9',
  },
  {
    id: '10',
    source: fullp10,
    thumbnail: thumbp10,
    caption: 'Jess Photo 10',
  },
  {
    id: '11',
    source: fullp11,
    thumbnail: thumbp11,
    caption: 'Jess Photo 11',
  },
  {
    id: '12',
    source: fullp12,
    thumbnail: thumbp12,
    caption: 'Jess Photo 12',
  },
  {
    id: '13',
    source: fullp13,
    thumbnail: thumbp13,
    caption: 'Jess Photo 13',
  },
  {
    id: '14',
    source: fullp14,
    thumbnail: thumbp14,
    caption: 'Jess Photo 14',
  },
  {
    id: '15',
    source: fullp15,
    thumbnail: thumbp15,
    caption: 'Jess Photo 15',
  },
  {
    id: '16',
    source: fullp16,
    thumbnail: thumbp16,
    caption: 'Jess Photo 16',
  },
  {
    id: '17',
    source: fullp17,
    thumbnail: thumbp17,
    caption: 'Jess Photo 17',
  },
  {
    id: '18',
    source: fullp18,
    thumbnail: thumbp18,
    caption: 'Jess Photo 18',
  },
  {
    id: '19',
    source: fullp19,
    thumbnail: thumbp19,
    caption: 'Jess Photo 19',
  },
  {
    id: '20',
    source: fullp20,
    thumbnail: thumbp20,
    caption: 'Jess Photo 20',
  },
  {
    id: '21',
    source: fullp21,
    thumbnail: thumbp21,
    caption: 'Jess Photo 21',
  },
  {
    id: '22',
    source: fullp22,
    thumbnail: thumbp22,
    caption: 'Jess Photo 22',
  },
  {
    id: '23',
    source: fullp23,
    thumbnail: thumbp23,
    caption: 'Jess Photo 23',
  },
  {
    id: '24',
    source: fullp24,
    thumbnail: thumbp24,
    caption: 'Jess Photo 24',
  },
]

export default () => (
<Layout>
  <Header />
  <div>   
  <h1 className="gallery-title">Photos</h1>
    <Gallery
              images={DEFAULT_IMAGES.map(
                ({ id, source, thumbnail, caption, description }) => ({
                  source,
                  thumbnail,
                  caption
                })
              )}
    />
    <SocialLinks />
    <Footer />
  </div>
 </Layout>
  
)
