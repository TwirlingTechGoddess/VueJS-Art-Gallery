
import { shallow } from 'vue-test-utils'
import Gallery from './Gallery.vue'
import App from './App.vue'


describe('Gallery', () => {
  it('matches snapshot without images', () => {
    const wrapper = shallow(Gallery) 
    expect(wrapper).toMatchSnapshot()
  })

  it('matches snapshot with images', (done) => {
    const wrapper = shallow(Gallery)
    wrapper.setData({images: [{image:'https://nrs.harvard.edu/urn-3:HUAM:CARP09302_dynmc', caption: '', id: 7}] })
    wrapper.vm.$nextTick(() => {
      expect(wrapper).toMatchSnapshot()
      done()
    })
  })

  it('calls showCurated when curated button is pressed', () => {
    const showCurated = jest.fn()
    const wrapper = shallow(Gallery)
    wrapper.setMethods({ showCurated })
    const button = wrapper.find('.curated')
    button.trigger('click')
    expect(showCurated.mock.calls.length).toBe(1)
  })

  it('fetches async when more button is pressed', (done) => {
    const wrapper = shallow(Gallery)
    wrapper.find('button').trigger('click')
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.value).toBe(undefined)
      done()
    })
  })
})