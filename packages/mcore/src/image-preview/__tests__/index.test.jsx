import React from 'react';
import { render } from 'enzyme';
import toJson from 'enzyme-to-json';
import ImagePreview from '../index';

const images = [
  'https://static.vikit.com/website/health/mcore/images/banners/1.png',
  'https://static.vikit.com/website/health/mcore/images/banners/2.png',
  'https://static.vikit.com/website/health/mcore/images/banners/3.png',
];

const originImages = [
  {
    url: 'https://cdn-health.vikit.com/mcore/imagePreview/compress_1.png',
    originUrl: 'https://static.vikit.com/website/health/mcore/images/banners/1.png',
  },
  {
    url: 'https://cdn-health.vikit.com/mcore/imagePreview/compress_2.png',
    originUrl: 'https://static.vikit.com/website/health/mcore/images/banners/2.png',
  }, {
    url: 'https://cdn-health.vikit.com/mcore/imagePreview/compress_3.png',
    originUrl: 'https://static.vikit.com/website/health/mcore/images/banners/3.png',
  },
];

describe('ImagePreview', () => {
  it('renders correctly', () => {
    const wrapper = render(<ImagePreview checked onChange={jest.fn()} images={images} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders correctly with origin', () => {
    const wrapper = render(<ImagePreview checked onChange={jest.fn()} images={originImages} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
