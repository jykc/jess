import React from "react"

import Layout from '../components/Layout';

import Footer from '../components/Footer';
import SocialLinks from '../components/SocialLinks';
import Header from '../components/HeaderGallery';

import fulla01 from '../assets/images/fulls/a01.jpg'
import fulla02 from '../assets/images/fulls/a02.jpg'
import fulla03 from '../assets/images/fulls/a03.jpg'
import fulla04 from '../assets/images/fulls/a04.jpg'
import fulla05 from '../assets/images/fulls/a05.jpg'
import fulla06 from '../assets/images/fulls/a06.jpg'
import fulla07 from '../assets/images/fulls/a07.jpg'
import fulla08 from '../assets/images/fulls/a08.jpg'
import fulla09 from '../assets/images/fulls/a09.jpg'
import fulla10 from '../assets/images/fulls/a10.jpg'
import fulla11 from '../assets/images/fulls/a11.jpg'
import fulla12 from '../assets/images/fulls/a12.jpg'
import thumba01 from '../assets/images/thumbs/a01.jpg'
import thumba02 from '../assets/images/thumbs/a02.jpg'
import thumba03 from '../assets/images/thumbs/a03.jpg'
import thumba04 from '../assets/images/thumbs/a04.jpg'
import thumba05 from '../assets/images/thumbs/a05.jpg'
import thumba06 from '../assets/images/thumbs/a06.jpg'
import thumba07 from '../assets/images/thumbs/a07.jpg'
import thumba08 from '../assets/images/thumbs/a08.jpg'
import thumba09 from '../assets/images/thumbs/a09.jpg'
import thumba10 from '../assets/images/thumbs/a10.jpg'
import thumba11 from '../assets/images/thumbs/a11.jpg'
import thumba12 from '../assets/images/thumbs/a12.jpg'
import Gallery from '../components/Gallery'

const DEFAULT_IMAGES = [
  {
    id: '1',
    source: fulla01,
    thumbnail: thumba01,
    caption: 'Jess Artwork 1',
  },
  {
    id: '2',
    source: fulla02,
    thumbnail: thumba02,
    caption: 'Jess Artwork 2',
  },
  {
    id: '3',
    source: fulla03,
    thumbnail: thumba03,
    caption: 'Jess Artwork 3',
  },
  {
    id: '4',
    source: fulla04,
    thumbnail: thumba04,
    caption: 'Jess Artwork 4',
  },
  {
    id: '5',
    source: fulla05,
    thumbnail: thumba05,
    caption: 'Jess Artwork 5',
  },
  {
    id: '6',
    source: fulla06,
    thumbnail: thumba06,
    caption: 'Jess Artwork 6',
  },
  {
    id: '7',
    source: fulla07,
    thumbnail: thumba07,
    caption: 'Jess Artwork 7',
  },
  {
    id: '8',
    source: fulla08,
    thumbnail: thumba08,
    caption: 'Jess Artwork 8',
  },
  {
    id: '9',
    source: fulla09,
    thumbnail: thumba09,
    caption: 'Jess Artwork 9',
  },
  {
    id: '10',
    source: fulla10,
    thumbnail: thumba10,
    caption: 'Jess Artwork 10',
  },
  {
    id: '11',
    source: fulla11,
    thumbnail: thumba11,
    caption: 'Jess Artwork 11',
  },
  {
    id: '12',
    source: fulla12,
    thumbnail: thumba12,
    caption: 'Jess Artwork 12',
  },
]

export default () => (
<Layout>
  <Header />
  <div>   
  <h1 className="gallery-title">Artwork</h1>
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
