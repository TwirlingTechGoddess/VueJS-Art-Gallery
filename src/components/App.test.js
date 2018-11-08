import { shallow } from 'vue-test-utils'
import App from './App.vue'

describe('App', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(App)
    expect(wrapper).toMatchSnapshot()
  })
})

