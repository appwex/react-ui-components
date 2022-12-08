import Stories from '../stories'
import Component from '../a-components/Component'

const component = {
  arg: 'Sample Component',
}

const ComponentStory = () => (
  <Stories argList={[component]} template={args => <Component {...args} />} />
)

export default ComponentStory
