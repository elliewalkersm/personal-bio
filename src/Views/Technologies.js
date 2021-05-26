import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src: 'https://html5hive.org/wp-content/uploads/2014/06/js_800x800.jpg',
    altText: 'Javascript',
    caption: 'Javascript'
  },
  {
    src: 'http://x7d4c5z5.stackpathcdn.com/wp-content/uploads/2014/10/css3.jpg',
    altText: 'CSS',
    caption: 'CSS'
  },
  {
    src: 'https://hackr.io/tutorials/learn-html-5/logo/logo-html-5?ver=1587977020',
    altText: 'HTML',
    caption: 'HTML'
  },
  {
    src: 'https://www.freecodecamp.org/news/content/images/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png',
    altText: 'React',
    caption: 'React'
  },
  {
    src: 'https://blog.alexdevero.com/wp-content/uploads/2015/03/sass-logo.jpg',
    altText: 'SASS',
    caption: 'SASS'
  },
  {
    src: 'http://getbootstrap.com/docs/4.0/assets/brand/bootstrap-social.png',
    altText: 'Bootstrap',
    caption: 'Bootstrap'
  },
  {
    src: 'https://firebase.google.com/images/social.png',
    altText: 'Firebase',
    caption: 'Firebase'
  },
  {
    src: 'https://blog.qualys.com/wp-content/uploads/2020/10/postman.jpg',
    altText: 'Postman',
    caption: 'Postman'
  },
  {
    src: 'https://pbs.twimg.com/profile_images/1021778918842531840/FBVP_uDf.jpg',
    altText: 'Netlify',
    caption: 'Netlify'
  }
];

const Example = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
  ));

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
};

export default Example;
