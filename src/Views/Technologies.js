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
    src: 'https://softwaretap.com/wp-content/uploads/2020/09/JavaScript-2.jpg',
    altText: 'Javascript',
    caption: 'Javascript'
  },
  {
    src: 'https://cdn-media-1.freecodecamp.org/images/1*H0IBb9kvGI3eIuL1sGmWug.jpeg',
    altText: 'CSS',
    caption: 'CSS'
  },
  {
    src: 'https://flywheel.neocities.org/img/HTML5.jpg',
    altText: 'HTML',
    caption: 'HTML'
  },
  {
    src: 'https://lh3.googleusercontent.com/proxy/-6OQaEOKFfLguYM5JWqCPXVtx8oH_0MiiD5rzyEYzWEXUiSRpuR-ffr2SmFRncnvaXiX-Fna09mdTnIdk784m82aVvxXQpuUH0tRiYuEyVUigbfIhvOG-Hzt_6jM',
    altText: 'React',
    caption: 'React'
  },
  {
    src: 'https://miro.medium.com/max/600/1*wlQV5JRDIOlwqj1Ds8J4qQ.jpeg',
    altText: 'SASS',
    caption: 'SASS'
  },
  {
    src: 'https://www.pragimtech.com/wp-content/uploads/2019/04/bootstrap.jpg',
    altText: 'Bootstrap',
    caption: 'Bootstrap'
  },
  {
    src: 'https://softapptechnologies.com/images/c6.png',
    altText: 'Firebase',
    caption: 'Firebase'
  },
  {
    src: 'https://miro.medium.com/max/600/1*Hi4zRrOGJfbvkjGsTIpnbQ.jpeg',
    altText: 'Postman',
    caption: 'Postman'
  },
  {
    src: 'https://thomasdeneuville.com/wp-content/uploads/2020/02/netifly-full-logo-light.png',
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
        <img className="tech-image" src={item.src} alt={item.altText} width="100%" height="100%"/>
        <CarouselCaption captionText=""/>
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
