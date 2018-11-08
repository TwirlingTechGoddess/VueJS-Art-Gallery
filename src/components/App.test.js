import { shallow } from 'vue-test-utils'
import App from './App.vue'
import Gallery from './Gallery.vue'
const mock = 'view-resource-mock'

describe('App', () => {
  it('matches snapshot without images', () => {
    const wrapper = shallow(App) 
    expect(wrapper).toMatchSnapshot()
  })

  it('matches snapshot with images', (done) => {
    const wrapper = shallow(App)
    wrapper.setData({images: [{image:'https://nrs.harvard.edu/urn-3:HUAM:CARP09302_dynmc', caption: '', id: 7}] })
    wrapper.vm.$nextTick(() => {
      expect(wrapper).toMatchSnapshot()
      done()
    })
  })
})
