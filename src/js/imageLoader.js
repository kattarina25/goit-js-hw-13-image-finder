import api from './apiService';
import updateImagesMarkup from './updateImagesMarkup';
import refs from './refs';
import message from './messageForUser';

const options = {
  rootMargin: '30px',
};

const onEntry = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      api.pageIncrement();
      api.fetch().then(data => {
        updateImagesMarkup(data);
        api.count = refs.gallery.childElementCount;
        api.count <= api.total - 12
          ? lazyLoad()
          : setTimeout(() => message.finishList(), 2000);
      });
      observer.unobserve(entry.target);
    }
  });
};

const lazyLoad = () => {
  new IntersectionObserver(onEntry, options).observe(
    refs.gallery.lastElementChild,
  );
};

const firstLoad = value => {
  api.query = value;
  api.fetch().then(data => {
    api.total
      ? (updateImagesMarkup(data), message.success(api.total), lazyLoad())
      : message.error();
  });
};
export default firstLoad;
